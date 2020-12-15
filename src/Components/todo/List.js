import React from "react";
import ListItem from "./ListItem.js";

const List = ({itemsArr, handleDelete}) => {
  return (
    <ol>
      {itemsArr.map(
        (ele)=>(<ListItem item={ele} handleDelete={handleDelete}/>)
      )}
    </ol>
  );
};

export default List;