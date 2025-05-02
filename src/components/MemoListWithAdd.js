import { useContext } from "react";
import { LoginContext } from "./Context.js";
import "./MemoListWithAdd.css";

export default function MemoListWithAdd({
  memos,
  setEditing,
  setSelectedId,
  setText,
}) {
  const { isLoggedIn } = useContext(LoginContext);

  function handleClickTitle(memo) {
    setSelectedId(memo.id);
    setText(memo.content);
    setEditing(true);
  }

  function handleAdd() {
    setEditing(true);
    setSelectedId(null);
    setText("");
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
      {isLoggedIn && <div onClick={handleAdd}>＋</div>}
    </div>
  );
}
