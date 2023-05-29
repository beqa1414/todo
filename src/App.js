import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";

function App() {
  const [inputText, setInputText] = useState("");
  const [itemList, updateItemList] = useState([
    { id: 1, title: "Dinner", day: "Today at 8:00 PM" },
    { id: 2, title: "Walk with Coby", day: "Today at 3:30 PM" },
    { id: 3, title: "Buy Groceries", day: "Today at 10:00 AM" },
    { id: 4, title: "Go to repair shop", day: "Today at 9:00 PM" },
  ]);

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="main-card">
      <TodoForm
        inputText={inputText}
        itemList={itemList}
        updateItemList={updateItemList}
        setInputText={setInputText}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
}

export default App;
