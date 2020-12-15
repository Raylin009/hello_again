import React,  { useState } from "react";

const ListItem = ({item, handleDelete}) => {
  const [inputMode, setMode] = useState(false);

  const toggleInputMode = () => {
      setMode(!inputMode)
  }
  return (
    <li>
      <h6 hidden={inputMode}>{item.text}</h6>
      <h6 hidden={!inputMode}>Change Me</h6>
      <button onClick={()=>handleDelete(item.id)}>Delete to do </button>
      <button onClick={toggleInputMode}>Edit to do </button>
    </li>
  );
};

export default ListItem;