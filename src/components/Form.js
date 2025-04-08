import "./Form.css";

export default function Form({
  memos,
  setMemos,
  selectedId,
  setEditing,
  text,
  setText,
}) {
  function handleUpdate() {
    const updateMemos = memos.map((memo) =>
      memo.id === selectedId ? { ...memo, content: text } : memo,
    );
    setMemos(updateMemos);
    localStorage.setItem(selectedId, text);
    setText("");
    setEditing(false);
  }

  function handleDelete() {
    const deletedMemos = memos.filter((memo) => memo.id !== selectedId);
    setMemos(deletedMemos);
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
      <div className="form_button-group">
        <button className="form_button" onClick={handleUpdate}>
          更新
        </button>
        <button className="form_button" onClick={handleDelete}>
          削除
        </button>
      </div>
    </div>
  );
}
