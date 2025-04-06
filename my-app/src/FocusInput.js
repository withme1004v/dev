import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null); // ref 객체 생성

  const handleClick = () => {
    inputRef.current.focus(); // DOM 요소에 직접 접근
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default FocusInput;