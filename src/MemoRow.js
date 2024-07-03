import { useState } from "react";

function MemoRow() {
  const allMemos = function () {
    const allMemos = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      allMemos.push({ title: key, content: value });
    }

    return allMemos;
  };

  const [memoList] = useState(allMemos);

  const memoTitle = memoList.map((memo) => (
    <li key={memo.title}>{memo.title}</li>
  ));
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
