
function TaskItem({ todo, onToggle, onDelete }) {
    return (
        <li className="flex justify-between items-center mb-2 p-2 border rounded bg-amber-300">

            <span
                className={
                    todo.completed ? "line-through text-gray-500" : "text-gray-900"
                }
            >
                {todo.text}
            </span>


            <div className="flex gap-2">
                <button
                    onClick={() => onToggle(todo.id)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                >
                    {todo.completed ? "Undo" : "Done"}
                </button>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TaskItem;
