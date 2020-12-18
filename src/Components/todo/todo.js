import React, { useState } from "react";
import List from "./List.js";
import todoItem from "./itemObject.js";

const Todo = () => {
  const [text, setText] = useState("");
  const [item, addItem] = useState([])

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem([...item, new todoItem(text)])
    setText("")
  }
  const handleDelete = (id) => {
    addItem(item.filter((ele) => (ele.id !== id)))
  }
  const handleEdit = (id, curText) => {
    addItem(item.map((ele)=>(
      ele.id === id ? {...ele, text: curText} : ele
    )))
  }

  return (
    <div>
      <h3>Things To Do Below:</h3>
      <List itemsArr={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
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