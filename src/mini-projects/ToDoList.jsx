import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      { task: newTodo, id: uuidv4(), completed: false }
    ]);
    
    setNewTodo("");
  };

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const upperCaseOne = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task.toUpperCase() }
          : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
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

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />

            <span className="todo-text">{todo.task}</span>

            <div className="todo-actions">
              <button onClick={() => upperCaseOne(todo.id)}>
                Uppercase
              </button>
              <button onClick={() => deleteToDo(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
