import React,  { useState } from "react";

const ListItem = ({item, handleDelete, handleEdit}) => {
  const [inputMode, setMode] = useState(false);
  const [curText, changeText] = useState(item.text);

  const toggleInputMode = () => {
    setMode(!inputMode)
  }
  const handleChange= (e) => {
    changeText(e.target.value);
  }
  const submitEdit = (e) => {
    e.preventDefault();
    handleEdit(item.id, curText);
    toggleInputMode();
  }

  if(inputMode){
    return (
      <li>
        <form onSubmit={(e)=>{submitEdit(e)}}>
          <input type="text" name="edit" value={curText} onChange={handleChange}
          ></input>
          <input type="submit" value="submit"></input>
        </form>
      </li>
    )
  }else{
    return(
      <li>
        <h6>{item.text}</h6>
        <button onClick={()=>handleDelete(item.id)}>Delete to do </button>
        <button onClick={()=>{toggleInputMode()}}>Edit to do </button>
      </li>
    )
  }
};

export default ListItem;