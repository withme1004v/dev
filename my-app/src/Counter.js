import { useState, useRef , useEffect} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);  // 0 이라는 값에 대한 참조를 가지는 객체 반환


  useEffect(() => {
    console.log("렌더링 발생! 현재 count:", count);
  });

  const handleStateClick = () => {
    setCount(count + 1); // 상태 변경 → 리렌더링 발생    
  };

  const handleRefClick = () => {     
    countRef.current += 1; // useRef 값 변경 → 리렌더링 없음
    console.log("useRef 값:", countRef.current);
  };


  return (
    <>
      <p>useState Count: {count}</p>
      <p>useRef Count (렌더링 안 됨): {countRef.current}</p>
      <button onClick={handleStateClick}>useState 증가</button>
     <button onClick={handleRefClick}>useRef 증가</button>

    </>
  );
}

export default Counter;