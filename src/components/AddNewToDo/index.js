import {useState} from "react";

export default function NewToDo({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            addTodo(value);
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">add todo</button>
        </form>
    );
};
