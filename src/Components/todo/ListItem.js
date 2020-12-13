import React from "react";

const ListItem = ({item}) => {
  return (
    <li>
      <h6>{item.text}</h6>
      <button>Delete to do </button>
      <button>Edit to do </button>
    </li>
  );
};

export default ListItem;