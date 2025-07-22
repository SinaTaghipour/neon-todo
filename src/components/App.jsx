import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText.trim()]);
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  }

  return (
    <div className="container">
      <header className="heading">
        <h1>NEON TO-DO</h1>
      </header>
      <InputArea onAdd={addItem} />
      <ul className="todo-list">
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
