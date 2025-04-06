//import logo from './logo.svg';
import './App.css';
import React from "react";
import Greeting from './Greeting';
const App = () => {
   
  return (
    <div>
      <Greeting name={123} age="twenty" isMember="true" />
    </div>
  );
};

export default App;

