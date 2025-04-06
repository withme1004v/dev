//컴포넌트가 언마운트될 때 정리 (clean-up)
import React, { useState, useEffect } from "react";
function TimerComponent() {
const [count, setCount] = useState(0);
useEffect(() => {
const interval = setInterval(() => {
setCount((prevCount) => prevCount + 1);
}, 1000);
return () => {
console.log("타이머 정리됨!");
clearInterval(interval);
};
}, []); // 최초 실행 후 언마운트 시 정리
return <h1>타이머: {count}초</h1>;
}
export default TimerComponent;