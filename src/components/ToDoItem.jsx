import React from "react";

function ToDoItem({ text, id, onChecked }) {
  return (
    <li
      className="todo-item"
      onClick={() => onChecked(id)}
      title="Click to remove"
    >
      {text}
    </li>
  );
}

export default ToDoItem;
