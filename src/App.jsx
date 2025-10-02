import React, { useEffect } from 'react';
import { useState } from 'react';
import FilterButtons from './components/FilterButtons';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';
import ErrorMessage from './components/ErrorMessage';





const App = () => {

  const [todos, setTodos] = useLocalStorage("todos", []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  const addTodo = () => {
    if (newTask.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }
    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === newTask.trim().toLowerCase()
    );

    if (isDuplicate) {
      setError("Task already exists!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      timeStamp: new Date().toLocaleDateString("en-US", {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      })
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

    <div>
      <h1 className='font-bold p-6 text-center' style={{ fontSize: "65px", background: "linear-gradient(to right, rgb(0 37 108), rgb(206 229 234), rgb(-2, 60, 181))" }}>Todo App</h1>
      <div className='p-6 rounded-xl shadow-lg  w-full bg-blue-50 min-h-screen'>

        <div className="flex gap-2 mb-4 justify-center">
          <input
            type="text"
            value={newTask}
            onChange={(event) => { setNewTask(event.target.value); setError(null); }}
            className="border p-2 rounded bg-white w-90"
            placeholder="Enter a task"
          />

          <button
            onClick={addTodo}
            className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add
          </button>
        </div>

        <ErrorMessage message={error} />
        <FilterButtons currentFilter={filter} setFilter={setFilter} />
        <TaskList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />



      </div>
    </div>




  )
}

export default App;








