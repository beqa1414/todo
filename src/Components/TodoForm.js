import rect from "../images/Rectangle 2.png";
import TodoList from "./TodoList";
import rect1 from "../images/Rectangle1.jpg";

function TodoForm({ inputText, itemList, updateItemList, setInputText }) {
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const addItemsList = () => {
    updateItemList([...itemList, { item: inputText, key: Date.now() }]);
    setInputText("");
  };
  console.log(onChangeHandler);
  return (
    <div className="App">
      <div className="todo-header">
        <img
          src={rect1}
          style={{
            width: "430px",
            height: "202px",
            borderRadius: "10px 10px 0px 0px",
          }}
          alt=""
          className="img_rect"
        />
        <div className="thur">
          <p className="thru_text">Thur 9</p>
          <h1 className="am">6:23 AM</h1>
        </div>
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input_frame"
          placeholder="Note"
          value={inputText}
          onChange={onChangeHandler}
        />
        <button onClick={addItemsList}>+</button>
      </div>
      <TodoList itemList={itemList} updateItemList={updateItemList} />
    </div>
  );
}

export default TodoForm;
