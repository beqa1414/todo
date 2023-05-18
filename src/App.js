import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";

function App() {
  const [inputText, setInputText] = useState("");
  const [itemList, updateItemList] = useState([
    { title: "Dinner", day: "Today at 8:00 PM" },
    { title: "Walk with Coby", day: "Today at 3:30 PM" },
    { title: "Buy Groceries", day: "Today at 100 PM" },
    { title: "Go to repair shop", day: "Today at 9:00 PM" },
  ]);
  return (
    <div className="App">
      <TodoForm
        inputText={inputText}
        itemList={itemList}
        updateItemList={updateItemList}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;
