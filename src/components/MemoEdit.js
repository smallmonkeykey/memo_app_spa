import React from "react";
import { useRef } from "react";

export default function MemoEdit({ clickTitle, selectedMemoId }) {
  const inputContent = localStorage.getItem(selectedMemoId);
  const inputTextRef = useRef();

  function handleClickEdit() {
    console.log(inputTextRef.current.value);
    localStorage.setItem(selectedMemoId, inputTextRef.current.value);
  }

  if (clickTitle) {
    return (
      <form>
        <textarea
          rows="20"
          cols="50"
          defaultValue={inputContent}
          ref={inputTextRef}
        ></textarea>
        <button type="submit" onClick={handleClickEdit}>
          編集
        </button>
        <button type="submit">削除</button>
      </form>
    );
  }
}
