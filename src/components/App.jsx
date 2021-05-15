import React, { useState } from "react";
import ListItems from "./ListItems.jsx";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function deleteItem(id) {
    //var id =event.target.id;
    // console.log(id)
    // setItems(prevItems=>{
    //      prevItems.splice(props,1)
    // })
    setItems((prevItems) =>
      prevItems.filter((element, index) => {
        return index !== id;
      })
    );
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItems
              key={index}
              id={index}
              fun={deleteItem}
              text={todoItem}
            />
            // <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
