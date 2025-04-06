// import React, { Component } from 'react';
// class Counter extends Component {
// constructor(props) {
// super(props);
// this.state = {
// number: 0
// }
// }
// handleIncrease = () => {
// this.setState({
// number: this.state.number + 1
// });
// }
// handleDecrease = () => {
// this.setState({
// number: this.state.number - 1
// });
// }
// render() {
//     return (
//     <div>
//     <h1> 카운터 </h1>
//     <div> 값 : {this.state.number} </div>
//     <button onClick={this.handleIncrease}>+</button>
//     <button onClick={this.handleDecrease}>-</button>
//     </div>
//     );
//     }
//     }
//     export default Counter;

import React, { useState } from "react";
/*function Counter() {
const [count, setCount] = useState(0); // 초기값 0
return (
<div>
<h1>카운트: {count}</h1>
<button onClick={() => setCount(count + 1)}>증가</button>
<button onClick={() => setCount(count - 1)}>감소</button>
</div>
);
}*/
const Counter=() =>{
    const [count, setCount] = useState(0); // 초기값 0
    return (
    <div>
    <h1>카운트: {count}</h1>
    <button onClick={() => setCount(count + 1)}>증가</button>
    <button onClick={() => setCount(count - 1)}>감소</button>
    </div> 
    )
}
export default Counter;