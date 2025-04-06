//Props는 변경할 수 없다 (Read-Only)
import React from "react";
function Greeting({name="박보검"}) {
//props.name = "ㅏㅣㅏㅣ 값"; // 오류 발생
return <h1>안녕하세요, {name}님!</h1>;
}
// Greeting.defaultProps = {
//     name: "손님",
//     };
export default Greeting;