'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '@/lib/redux/slices/todosSlice';
import { RootState } from '@/lib/redux/store';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Date.now(),
      text,
      completed: false,
    }));
    setText('');
  };

  return (
      <div>
        <h1>Todo List</h1>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Home;
