import React from "react";
function ListItems(props) {
  // can pass a callback function with the id to uniqely identify which element is needed the deletion
  return (
    <li
      onClick={() => {
        props.fun(props.id);
      }}
    >
      {" "}
      {props.text}
    </li>
  );
}
export default ListItems;
