import React from "react";

const ListItem = ({item, handleDelete}) => {
  return (
    <li>
      <h6>{item.text}</h6>
      <h6>{item.id}</h6>
      <button onClick={()=>handleDelete(item.id)}>Delete to do </button>
      <button>Edit to do </button>
    </li>
  );
};

export default ListItem;