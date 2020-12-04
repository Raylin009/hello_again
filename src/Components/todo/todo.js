import React, { useState } from "react";
import List from "./List.js";

const Todo = () => {
  const [text, setText] = useState("");
  const [item, addItem] = useState([])

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem([...item, text])
    setText("")
  }

  return (
    <div>
      <h3>Things To Do Below:</h3>
      <List itemsArr={item}/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoInput"
          value={text}
          onChange={handleChange}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default Todo;