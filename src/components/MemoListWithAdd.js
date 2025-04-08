import { v4 as uuidv4 } from "uuid";
import "./MemoListWithAdd.css";

export default function MemoListWithAdd({
  memos,
  setMemos,
  setEditing,
  selectedId,
  setSelectedId,
  setText,
}) {
  function handleClickTitle(memo) {
    setSelectedId(memo.id);
    setText(memo.content);
    setEditing(true);
  }

  function handleAdd() {
    setEditing(true);
    const newMemo = { id: uuidv4(), content: "" };
    localStorage.setItem(newMemo.id, newMemo.content);
    setText(newMemo.content);
    setSelectedId(newMemo.id);
    setMemos([...memos, newMemo]);
  }

  return (
    <div className="memo_section">
      <ul className="memo_list">
        {memos.map((memo) => (
          <li key={memo.id}>
            <div className="memo_title" onClick={() => handleClickTitle(memo)}>
              {memo.content.split("\n")[0]}
            </div>
          </li>
        ))}
      </ul>
      <div onClick={handleAdd}>＋</div>
    </div>
  );
}
