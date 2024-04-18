export default function ToDo({todo, toggleTodo}) {

    const {id, task, isCompleted} = todo;

    return (
        <label
            style={{
                textDecoration: isCompleted ? 'line-through' : 'none',
            }}
            className="item"
        >
            <input onChange={() => toggleTodo(id)} type="checkbox"/>
            {task}
        </label>
    );
}