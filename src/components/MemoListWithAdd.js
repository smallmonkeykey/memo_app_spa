import { v4 as uuidv4 } from "uuid";

export default function MemoListWithAdd({
  memos,
  setMemos,
  setEditing,
  setSelectedId,
}) {
  function handleClickTitle(memo) {
    setSelectedId(memo.id);
    setEditing(true);
  }

  function handleAdd() {
    setEditing(true);
    const newMemo = { id: uuidv4(), content: "" };
    localStorage.setItem(newMemo.id, newMemo.content);
    setSelectedId(newMemo.id);
    setMemos([...memos, newMemo]);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
              onClick={() => handleClickTitle(memo)}
            >
              {memo.content.split("\n")[0]}
            </div>
          </li>
        ))}
      </ul>
      <div onClick={handleAdd}>＋</div>
    </div>
  );
}
