import React from "react";
import MyButon from "./UI/button/MyButon";

const TableItem = (props) => {
  // console.log(props);
  return (
    <div className="d-flex justify-content-between border p-2 my-2">
      <p>{props.number}</p> 
      <p>{props.post.title}</p>
      <p>{props.post.stack}</p>
      <p>
        <MyButon
          className="btn btn-outline-danger w-100"
          onClick={() => props.remove(props.post)}
        >
          Delete
        </MyButon>
      </p>
    </div>
  );
};

export default TableItem;
