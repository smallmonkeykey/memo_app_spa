import { useState } from "react";
import MemoListWithAdd from "./MemoListWithAdd";
import Form from "./Form";
import "./Memo.css";

export default function Memo() {
  const getMemos = () => {
    const memos = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      memos.push({ id: key, content: value });
    }
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
        setMemos={setMemos}
        setEditing={setEditing}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        setText={setText}
      />
      {isEditing && (
        <Form
          memos={memos}
          setMemos={setMemos}
          selectedId={selectedId}
          setEditing={setEditing}
          text={text}
          setText={setText}
        />
      )}
    </div>
  );
}
