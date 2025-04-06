import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import Component2 from './Component2';
import UserContext from './UserContext';


function Component1() {
  const [user, setUser] = useState("Korea, Seoul");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default Component1;