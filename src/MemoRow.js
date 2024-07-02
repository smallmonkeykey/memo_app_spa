const Memos = [
  { id: 1, title: "メモ1", content: "メモ1内容" },
  { id: 2, title: "メモ2", content: "メモ2内容" },
  { id: 3, title: "メモ3", content: "メモ3内容" },
  { id: 4, title: "メモ4", content: "メモ4内容" },
];

function MemoRow() {
  const memoTitle = Memos.map((memo) => <li key={memo.id}>{memo.title}</li>);
  return <ul>{memoTitle}</ul>;
}

function AddMemo() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      ＋
    </div>
  );
}

export default function MemoTable() {
  return (
    <>
      <MemoRow />
      <AddMemo />
    </>
  );
}
