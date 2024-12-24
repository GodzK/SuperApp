import React, { useState } from 'react';
import Nav from './nav';
import './compo.css';

function Todolist() {
  const [todos, setTodos] = useState([]); // Store the list of todos
  const [inputValue, setInputValue] = useState(''); // Store the input value

  // Function to add a new to-do item
  const addTodo = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, inputValue]); // Add the new to-do
    setInputValue(''); // Reset the input field
  };

  // Function to remove a to-do item
  const removeTodo = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove); // Remove the selected item
    setTodos(updatedTodos); // Update the state
  };

  return (
    <>
      <Nav />
      <div className="todo">
        <div className="todo-content">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
            To Do List
          </h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What Do you Want to Do?</span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="อยากทำอะไรป่าว??"
                className="input input-bordered w-full max-w-xs"
                id="userinp"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update input value
              />
              <button className="btn btn-success" onClick={addTodo}>
                Confirm!
              </button>
            </div>
          </label>
        </div>
        <div className="todo-list">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
            List
          </h1>
          {todos.length === 0 && <p>ยังไม่มีเรื่องที่จะทำ</p>}
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <span>{todo}</span>
              <button
                className="btn btn-error ml-4 butt"
                onClick={() => removeTodo(index)} // Call the remove function
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todolist;
