import React from "react";
import ListItem from "./ListItem.js";

const List = ({itemsArr}) => {
  return (
    <ol>
      {itemsArr.map(
        (ele)=>(<ListItem item={ele}/>)
      )}
    </ol>
  );
};

export default List;