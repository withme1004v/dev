

import React from "react";
import PropTypes from "prop-types";
const Greeting = ({ name, age, isMember }) => {
return (
<div>
<h1>Hello, {name}!</h1>
<p>Age: {age}</p>
<p>Membership: {isMember ? "Active" : "Inactive"}</p>
</div>
);
};
// props의 자료형 선언
Greeting.propTypes = {
name: PropTypes.string.isRequired, // 문자열 (필수)
age: PropTypes.number, // 숫자
isMember: PropTypes.bool // 불리언
};
// 기본 props 값 설정
Greeting.defaultProps = {
    name:"kjlk",
age: 20,
isMember: false
};
export default Greeting;