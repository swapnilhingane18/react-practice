import { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    "Sample Task 1",
    "Sample Task 2",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>
      <div className="todo-input">
        <input
        placeholder="Add your task here"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addNewTask}>Add</button>
      </div>


      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
