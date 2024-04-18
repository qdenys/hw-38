import ToDo from "../ToDoItem";

export default function ToDoList({todos, toggleTodo}) {
    return (
        <div>
            {todos.map(todo => (
                <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </div>
    );
}

