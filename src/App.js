import { useState, useRef, useEffect } from "react";
import Todos from "./components/Todos";
import {v4 as uuidv4} from "uuid";

function App() {
  const LocalStorage_Key = "todos.list";
  const todoRef = useRef();
  const [todos, setTodos] = useState([
    { id: 1, name: "first todo", completed: false },
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LocalStorage_Key));
    setTodos(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LocalStorage_Key, JSON.stringify(todos));
  }, [todos]);

  const ToggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  };

  const AddtodoHandler = (e) => {
    if (todoRef.current.value === "") return;
    const newTodo = {
      id: uuidv4(),
      name: todoRef.current.value,
      completed: false,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    todoRef.current.value = null;
  };

  return (
    <>
      <label>press Enter to Add new todo</label>
      <br />
      <input onKeyDown={(e) => {if (e.key === "Enter") AddtodoHandler()}} type="text" ref={todoRef} placeholder="new todo ..."></input>
      <br />
      <Todos todos={todos} ToggleTodo={ToggleTodo} />
      <button onClick={() => setTodos([])}>Clear Todos</button>
      <br />
      <label>{todos.length} left todos</label>
    </>
  );
}

export default App;
