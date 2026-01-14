import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  // ADD TASK
  const addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), completed: false }
    ]);

    setNewTodo("");
  };

  // DELETE TASK
  const deleteToDo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  // UPPERCASE ONE TASK
  const upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task.toUpperCase() }
          : todo
      )
    );
  };

  // TOGGLE COMPLETE
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
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
            {/* CHECKBOX */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />

            {/* TASK TEXT */}
            <span className="todo-text">{todo.task}</span>

            {/* ACTION BUTTONS */}
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
