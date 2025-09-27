import React from 'react';
import { useState } from 'react';
import FilterButtons from './components/FilterButtons';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';




const App = () => {

  const [todos, setTodos] = useLocalStorage("todos",[]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (newTask.trim() === ""){ 
      alert("Task cannot be empty!");
      return;
    }
    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === newTask.trim().toLowerCase()
    );

    if (isDuplicate) {
      alert("Task already exists!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };




  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });


  return (

    <div className='flex justify-center align-center max-h-screen'>
      <div className='w-full max-w-md p-6 rounded-xl shadow-lg mt-20 bg-amber-100'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Todo App</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 flex-1 rounded bg-white"

            placeholder="Enter a task"
          />

          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>

        </div>

       
        <FilterButtons currentFilter={filter} setFilter={setFilter} />
        <TaskList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />


      </div>
    </div>

  )
}

export default App;








