import { useRef } from "react";

export default function InputMemo() {
  const inputTextRef = useRef();

  const handleAddMemo = (e) => {
    e.preventDefault();
    const inputMemo = inputTextRef.current.value;
    const title = inputMemo.split("\n")[0];
    localStorage.setItem(title, inputMemo);
  };

  return (
    <form>
      <textarea rows="20" cols="50" ref={inputTextRef}></textarea>
      <button type="submit" onClick={handleAddMemo}>
        追加
      </button>
    </form>
  );
}
