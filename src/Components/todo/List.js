import React from "react";

const List = ({itemsArr}) => {
  return (
    <ol>
      {itemsArr.map(
        (ele)=>(<p>{ele}</p>)
      )}
    </ol>
  );
};

export default List;