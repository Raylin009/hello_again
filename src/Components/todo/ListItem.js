import React from "react";

const ListItem = ({item}) => {
  return (
    <li>
      <h6>{item.text}</h6>
    </li>
  );
};

export default ListItem;