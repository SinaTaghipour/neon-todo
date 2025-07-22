import React, { useState } from "react";

function InputArea({ onAdd }) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleAdd() {
    onAdd(inputText);
    setInputText("");
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd} title="Add task">
        <span>➕</span>
      </button>
    </div>
  );
}

export default InputArea;
