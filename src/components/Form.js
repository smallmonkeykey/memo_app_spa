import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import { useLogin } from "./login-context.js";

export default function Form({
  memos,
  setMemos,
  selectedId,
  setSelectedId,
  setEditing,
  text,
  setText,
}) {
  const { isLoggedIn } = useLogin();

  function saveAndReset(updateMemos) {
    setMemos(updateMemos);
    localStorage.setItem("memos", JSON.stringify(updateMemos));
    setText("");
    setSelectedId(null);
    setEditing(false);
  }

  function handleUpdate() {
    let updateMemos;
    if (selectedId === null) {
      const newMemo = { id: uuidv4(), content: text };
      updateMemos = [...memos, newMemo];
    } else {
      updateMemos = memos.map((memo) =>
        memo.id === selectedId ? { ...memo, content: text } : memo,
      );
    }
    saveAndReset(updateMemos);
  }

  function handleDelete() {
    const deletedMemos = memos.filter((memo) => memo.id !== selectedId);
    saveAndReset(deletedMemos);
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
      {isLoggedIn && (
        <div className="form_button-group">
          <button className="form_button" onClick={handleUpdate}>
            更新
          </button>
          <button className="form_button" onClick={handleDelete}>
            削除
          </button>
        </div>
      )}
    </div>
  );
}
