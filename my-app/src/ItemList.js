import React  from "react";
import {useState} from "react";


const ItemList = ()=> {
    const [items, setItems] = useState([
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Cherry" },
    ]);
  const removeItem = (id) => {           // 리스트에서 항목 제거
      setItems(items.filter((item) => item.id !== id));
    };
    return (
      <div>    <h3>Fruit List</h3>
        <ul>
          {items.map((item) => (
            <li  key={item.id}>
              {item.name} <button onClick={ () => removeItem(item.id) }>삭제</button>
            </li>
          ))}
        </ul>  
          
        </div>
    );
  } 

  
  export default ItemList;