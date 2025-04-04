import { useState } from "react";
import MemoListWithAdd from "./MemoListWithAdd";
import Form from "./Form";

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

  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <MemoListWithAdd
        memos={memos}
        setMemos={setMemos}
        setEditing={setEditing}
        setSelectedId={setSelectedId}
      />
      {isEditing && (
        <Form
          memos={memos}
          setMemos={setMemos}
          selectedId={selectedId}
          setEditing={setEditing}
        />
      )}
    </div>
  );
}
