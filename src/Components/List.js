import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import delete_icon from "../images/Vector.png";

function List({ itemList, updateItemList }) {
  const deleteItemList = (key) => {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  };

  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <div key={itemObj.key} className="item">
            {" "}
            <p>{itemObj.item}</p>
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
        );
      })}
    </div>
  );
}

export default List;
