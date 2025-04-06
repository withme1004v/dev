//Props는 변경할 수 없다 (Read-Only)
import React from "react";
function Greeting(props) {
//props.name = "ㅏㅣㅏㅣ 값"; // 오류 발생
return <h1>안녕하세요, {props.name}님!</h1>;
}
export default Greeting;