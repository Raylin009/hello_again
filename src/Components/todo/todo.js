import React, { useState } from "react";

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
      <p>thing {item}</p>
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