import React, { useEffect, useState } from "react";

function LifeCycleDemo() {
  const [count, setCount] = useState(0);

  //  componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");

    return () => {
      console.log("컴포넌트가 언마운트됩니다.");
    };
  }, []); // 빈 배열: 마운트 시 1회 실행

  // componentDidUpdate (count가 변경될 때)
//   useEffect(() => {
//     console.log(`count가 업데이트되었습니다: ${count}`);
//   }, [count]); // count가 변경될 때마다 실행

  return (
    <div>
      <h2>LifeCycle Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+ 증가</button>
    </div>
  );
}

export default LifeCycleDemo;