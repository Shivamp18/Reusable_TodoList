import TaskItem from "./TaskItem";

function TaskList({ todos, onToggle, onDelete }) {
    return (
        <ul className="space-y-2">
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
            ) : (
                todos.map((todo) => (
                    <TaskItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))
            )}
        </ul>
    );
}

export default TaskList;
