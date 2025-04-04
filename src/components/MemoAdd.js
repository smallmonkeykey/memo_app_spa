import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ memos, setMemos, selectedId, setEditing}) {
  const selectedMemo = memos.find((memo) => memo.id === selectedId);
  console.log(selectedMemo)
  const [text, setText] = useState(selectedMemo.content);

  function handleUpdate() {
    const updateMemos = memos.map((memo) =>
      memo.id === selectedId ? { ...memo, content: text } : memo
    );
    setMemos(updateMemos);
    localStorage.setItem(selectedId, text);
    setText("");
    setEditing(false);
  }

  function handleDelete() {
    const deletedMemos = memos.filter((memo) => memo.id !== selectedId);
    setMemos(deletedMemos)
    localStorage.removeItem(selectedId);
    setEditing(false);
  }

  return (
    <div>
      <>
        <textarea
          rows="20"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={text}
        />
      </>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button style={{ flex: 1 }} onClick={handleUpdate}>
          更新
        </button>
        <button style={{ flex: 1 }} onClick={handleDelete}>
          削除
        </button>
      </div>
    </div>
  );
}

export default function MemoApp() {
  const getMemos = () => {
    const memos = []
    for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      memos.push({ id: key, content: value });
    }
    return memos;
  }

  const [memos, setMemos] = useState(getMemos());
  const [isEditing, setEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

function handleAdd() {
    setEditing(true)
    const newMemo = {id: uuidv4(), content:""};
    localStorage.setItem(newMemo.id, newMemo.content);
    setSelectedId(newMemo.id);
    setMemos([...memos, newMemo])
}

  return (
    <div style={{ display: "flex", gap: "200px" }}>
      <div>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {memos.map((memo) => (
            <li key={memo.id}>
              <div
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                  margin: 5,
                }}
                onClick={() => {
                  setSelectedId(memo.id);
                  setEditing(true);
                }}
              >
                {memo.content.split("\n")[0]}
              </div>
            </li>
          ))}
        </ul>
        <div onClick={handleAdd}>＋</div>
      </div>
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
