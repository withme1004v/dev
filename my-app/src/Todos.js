// import { memo } from "react";

// const Todos = ({ todos, addTodo }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </>
//   );
// };

// export default memo(Todos);

import React from "react";

const Todos = React.memo(({ todos, addTodo }) => {
  console.log("Todos 컴포넌트 렌더링");

  return (
    <div>
      <h3>할 일 목록</h3>
      {todos.map((todo, idx) => (
        <p key={idx}>{todo}</p>
      ))}
      <button onClick={addTodo}>할 일 추가</button>
    </div>
  );
});

export default Todos;