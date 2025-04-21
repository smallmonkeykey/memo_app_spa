import { useState } from "react";
import MemoListWithAdd from "./MemoListWithAdd";
import Form from "./Form";
import "./Memo.css";

export default function Memo() {
  const getMemos = () => {
    const memos = JSON.parse(localStorage.getItem("memos") || "[]");
    return memos;
  };

  const [memos, setMemos] = useState(getMemos());
  const [isEditing, setEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [text, setText] = useState("");

  return (
    <div className="memo_wrap">
      <MemoListWithAdd
        memos={memos}
        setEditing={setEditing}
        setSelectedId={setSelectedId}
        setText={setText}
      />
      {isEditing && (
        <Form
          memos={memos}
          setMemos={setMemos}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setEditing={setEditing}
          text={text}
          setText={setText}
        />
      )}
    </div>
  );
}
