import React from "react";
import ListItem from "./ListItem.js";

const List = ({itemsArr, handleDelete, handleEdit}) => {
  return (
    <ol>
      {itemsArr.map(
        (ele)=>(<ListItem item={ele} handleDelete={handleDelete} handleEdit={handleEdit}/>)
      )}
    </ol>
  );
};

export default List;