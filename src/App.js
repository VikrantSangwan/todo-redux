import React from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
