import {useState} from "react";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/AddNewToDo";

import './App.css';

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, task: 'Todo 1', isDone: false},
        {id: 2, task: 'Todo 2', isDone: false},
        {id: 3, task: 'Todo 3', isDone: false},
        {id: 4, task: 'Todo 4', isDone: false},
        {id: 5, task: 'Todo 5', isDone: false},
    ]);
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
            )
        );
    };

    const addTodo = (task) => {
        const newTodo = {
            id: todos.length + 1,
            task,
            isDone: false
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="wrapper">
            <h3>List</h3>
            <ToDoList todos={todos} toggleTodo={toggleTodo}/>
            <NewToDo addTodo={addTodo}/>
        </div>
    );

}
