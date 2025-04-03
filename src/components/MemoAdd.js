import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function Form({ memos, setMemos, selectedId, setEditing}) {
  const selectedMemo = memos.find((memo) => memo.id === selectedId);
  const [text, setText] = useState(selectedMemo.content);

  function handleUpdate() {
    const updateMemos = memos.map((memo) =>
      memo.id === selectedId ? { ...memo, content: text } : memo
    );
    setMemos(updateMemos);
    setText("");
    setEditing(false);
  }

  function handleDelete() {
    const deletedMemos = memos.filter((memo) => memo.id !== selectedId);
    setMemos(deletedMemos)
    setEditing(false);
  }

  return (
    <>
      <textarea
        rows="20"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={text}
      />
      <button onClick={handleUpdate}>更新</button>
      <button onClick={handleDelete}>削除</button>
    </>
  );
}


export default function MemoApp() {
  const [memos, setMemos] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

function handleAdd() {
    setEditing(true)
    const newMemo = {id: uuidv4(), content:""};
    console.log(newMemo.id)
    setSelectedId(newMemo.id);
    setMemos([...memos, newMemo])
}

  return (
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
              onClick={() => setEditing(true)}
            >
              {memo.content.split("\n")[0]}
            </div>
          </li>
        ))}
      </ul>

      <div onClick={handleAdd}>＋</div>

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
