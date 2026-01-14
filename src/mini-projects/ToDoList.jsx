import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function ToDoList() {
  const [todos, setTodos] = useState([{task:"sample-task",id:uuidv4()}]);
  const [newTodo, setNewTodo] = useState("");

 let addNewTask = () => {
  setTodos((prevTodos) => {
    return [...prevTodos,{task: newTodo,id: uuidv4()}]
  });
  setNewTodo("");
};

let updateToDoValue = (event)=>{
  setNewTodo(event.target.value);
}

let upperCaseAll=()=>{
  setTodos((prevTodos)=>
    prevTodos.map((todo)=>({
        ...todo,
        task:todo.task.toUpperCase(),

      }))
  );
};

let deleteToDo = (id) => {
  setTodos((prevTodos) =>
    prevTodos.filter((todo) => todo.id !== id)
  );
};

let upperCaseOne = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? { ...todo, task: todo.task.toUpperCase() }
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
    <li key={todo.id} className="todo-item">
      <span className="todo-text">{todo.task}</span>

      <div className="todo-actions">
        <button onClick={() => upperCaseOne(todo.id)}>Uppercase</button>
        <button onClick={() => deleteToDo(todo.id)}>Delete</button>
      </div>
    </li>
  ))}
</ul>


      <button onClick={upperCaseAll}>SETUPPERCASE</button>
    </div>
  );
}
