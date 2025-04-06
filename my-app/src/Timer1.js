import React, { useState, useEffect } from "react";
function Timer() {
const [count, setCount] = useState(0);
useEffect(() => {
console.log("컴포넌트가 처음 마운트됨!");
}, []); // [] 빈 배열 → 최초 1회 실행
return (
<div>
<h1>카운트: {count}</h1>
<button onClick={() => setCount(count + 1)}>증가</button>
</div>
);
}
export default Timer;