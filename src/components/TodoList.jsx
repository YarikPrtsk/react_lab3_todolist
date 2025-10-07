import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <AddTodoForm onAdd={addTodo} />
      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => removeTodo(todo.id)}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
