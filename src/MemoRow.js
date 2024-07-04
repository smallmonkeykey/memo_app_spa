import { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function MemoRow({ memoList }) {
  const memoTitle = memoList.map((memo) => <li key={memo.id}>{memo.title}</li>);
  return <ul>{memoTitle}</ul>;
}

function AddMemoButton({ clickedButton, setClickedButton }) {
  function handleClick() {
    setClickedButton(!clickedButton);
  }

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      ＋
    </div>
  );
}

function InputMemo({ memoList, setMemoList, clickedButton, setClickedButton }) {
  const inputTextRef = useRef();

  const handleAddMemo = (e) => {
    e.preventDefault();
    const inputMemo = inputTextRef.current.value;
    const newMemo = {
      id: uuidv4(),
      title: inputMemo.split("\n")[0],
      content: inputMemo,
    };
    localStorage.setItem(newMemo.id, newMemo.content);
    inputTextRef.current.value = "";

    setMemoList([...memoList, newMemo]);
    setClickedButton(false);
  };

  if (clickedButton) {
    return (
      <form>
        <textarea rows="20" cols="50" ref={inputTextRef}></textarea>
        <button type="submit" onClick={handleAddMemo}>
          追加
        </button>
      </form>
    );
  }
}

export default function MemoTable() {
  const getAllMemos = () => {
    const allMemos = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const title = value.split("\n")[0];
      allMemos.push({ id: key, title: title, content: value });
    }
    return allMemos;
  };

  const [memoList, setMemoList] = useState(getAllMemos());
  const [clickedButton, setClickedButton] = useState(false);

  return (
    <>
      <MemoRow memoList={memoList} />
      <AddMemoButton
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
      <InputMemo
        memoList={memoList}
        setMemoList={setMemoList}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />
    </>
  );
}
