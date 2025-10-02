import { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import ConfirmDelete from './ConfirmDelete';
function TaskItem({ todo, onToggle, onDelete }) {


    const [isOpenConfirm, setIsOpenConfirm] = useState(false);

    return (
        <li className="flex justify-between items-center mb-2 p-2 border border-gray-300 rounded bg-white h-25">

            <span
                className={
                    todo.completed ? "line-through text-gray-500 font-medium text-xl px-8" : "text-gray-900 font-medium text-xl px-8"
                }
            >
                {todo.text}
            </span>

            <span className='flex gap-1 align-items-center'>
                {todo.timeStamp ? (<>
                    <FaClock className="text-gray-500 mt-1" />
                    {todo.timeStamp}
                </>) : ("")}

            </span>


            <div className="flex gap-2">
                <button
                    onClick={() => onToggle(todo.id)}
                    className="px-2 py-1 text-green-500 rounded font-bold text-lg cursor-pointer"
                >
                    {todo.completed ? "Undo" : <FaCheck />}
                </button>
                <button
                    onClick={() => setIsOpenConfirm(true)}
                    className="px-2 py-1 text-red-500 rounded text-lg cursor-pointer"
                >
                    <FaTrash  />
                </button>

                <ConfirmDelete
        openConfirm={isOpenConfirm}
        deleteTask={() => {
          onDelete(todo.id);
          setIsOpenConfirm(false);
        }}
        cancelDelete={() => setIsOpenConfirm(false)}
      />

            </div>
        </li>
    );
}

export default TaskItem;
