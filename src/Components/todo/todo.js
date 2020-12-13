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
    let deleteIndex = null;
    for(let i = 0; i <item.length; i +=1){
      if(item.id === id){
        deleteIndex = i;
        break;
      }
    }
    addItem([...item.slice(0,deleteIndex),...item.slice(deleteIndex+1,item.length)])
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