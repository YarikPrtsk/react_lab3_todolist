import React from "react";
import TodoApp from "./components/TodoApp";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <TodoApp />
    </div>
  );
}

export default App;
