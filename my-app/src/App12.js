import { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // useCallback 적용하지 않으면 렌더링마다 새로운 함수가 생성됨
  /* const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, [setTodos]);*/

 
   const addTodo =() => {
     console.log("addTodo 함수가 새로 생성됨");
    setTodos((prev) => [...prev, "New Todo"]);
  };

  


  return (
    <div>
      <h2>useCallback 예제</h2>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};


export default App;