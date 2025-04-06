//import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from './Button';
import MyButton from './MyButton';
import ItemList from './ItemList';
import Counter from './Counter';
//import CountryList from "./CountryList";

/*const App = () => {
  let msg = "World";
  const addResult = (x, y) => {
    return (
      <div>
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div>
      <h2>Hello {msg}!</h2>
      <hr />
      {addResult(4, 3)}
    </div>
  );
};

export default App;*/
const App = () => {
  console.log('App 전체 렌더링')
  //let msg = "<i>World</i>";
  let msg = (<i>World</i>);
  const addResult = (x, y) => {
    return (
      <div className="card card-body bg-light mb-5">
        {x} + {y} = {x + y}
      </div>
    );
  };
  // const style = {
  //   backgroundColor:'black',
  //   padding:'16px',
  //   color:'white',
  //   fontSize:'36px'
  //   };
    
  return (
    
    <div className="container">
    {/* <h2 style={style}>Hello {msg}!</h2> */}
    <h2 className='container'>Hello {msg}!</h2>
      <hr className="dash-style" />
      {addResult(4, 3)}
      <Button />
      <MyButton />
      <ItemList />
      <Counter />
    </div>
    
  );
};

export default App;

