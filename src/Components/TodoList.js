// import { MdOutlineDeleteForever } from "react-icons/md";
import TodoItem from "./TodoItem";

function TodoList({ itemList, updateItemList }) {
  const deleteItemList = (id) => {
    const newList = itemList.filter((itemObj) => itemObj.id !== id);
    updateItemList(newList);
  };

  return (
    <div>
      {itemList.map((itemObj) => {
        return <TodoItem itemObj={itemObj} deleteItemList={deleteItemList} />;
      })}
    </div>
  );
}

export default TodoList;
