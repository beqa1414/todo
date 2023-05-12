import { useState } from "react";
import "./App.css";
import rect from "./images/Rectangle 2.png";
import List from "./Components/List";

function App() {
  const [itemName, setItemName] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setItemName(e.target.value);
  };
  const addItemsList = () => {
    updateItemList([...itemList, { item: itemName, key: Date.now() }]);
    setItemName("");
  };
  console.log(onChangeHandler);
  return (
    <div className="App">
      <div className="todo-header">
        <img src={rect} alt="" className="img_rect" />
        <div className="thur">
          <p className="thru_text">Thur 9</p>
          <h1 className="am">6:23 AM</h1>
        </div>
      </div>
      <div className="input-wrapper">
        <input type="text" value={itemName} onChange={onChangeHandler} />
        <button onClick={addItemsList}>+</button>
      </div>
      <List itemList={itemList} updateItemList={updateItemList} />
    </div>
  );
}

export default App;
