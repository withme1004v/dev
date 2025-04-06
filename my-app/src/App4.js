//import logo from './logo.svg';
import './App.css';
import React from "react";
import Greeting from './Greeting';

function UserInfo(props) {
  return (
  <div>
  <h1>이름: {props.name}</h1>
  <p>나이: {props.age}</p>
  </div>
  );
  }
  function App() {
   
  return <UserInfo name="아이유" age={25} />;
  }
export default App;

