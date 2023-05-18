import React from "react";
import delete_icon from "../images/Vector.png";

function TodoItem({ itemObj, deleteItemList }) {
  return (
    <>
      <div key={itemObj.key} className="item">
        {" "}
        <p className="text" style={{ color: "green" }}>
          {itemObj.item}
        </p>
        <h3>{itemObj.title}</h3>
        <p>{itemObj.day}</p>
        <div className="icon">
          <img
            onClick={() => deleteItemList(itemObj.key)}
            src={delete_icon}
            style={{
              width: "20px",
              height: "20px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default TodoItem;
