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
