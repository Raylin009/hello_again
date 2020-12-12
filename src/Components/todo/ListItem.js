import React from "react";

const ListItem = ({item}) => {
  return (
    <li>
      <h6>{item.text}</h6>
      <button>X</button>
    </li>
  );
};

export default ListItem;