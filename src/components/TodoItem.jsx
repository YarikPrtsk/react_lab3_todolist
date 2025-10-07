import React, { useState } from "react";

function TodoItem({ todo, onRemove }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => setCompleted(!completed);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none", color: completed ? "gray" : "black" }}>
        {todo.text}
      </span>
      <button onClick={onRemove}>Delete</button>
    </div>
  );
}

export default TodoItem;
