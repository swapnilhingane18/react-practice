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

let deleteToDo = (id) => {
 setTodos((prevTodos) => 
    prevTodos.filter((todo) => todo.id !== id)
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

      <ul>
        {todos.map((todo, index) => (

          <li key={todo.id}>
           <span>{todo.task}</span>
           &nbsp;&nbsp;
           <button onClick={() => deleteToDo(todo.id)}>Delete</button>
            </li>

        ))}
      </ul>
    </div>
  );
}
 