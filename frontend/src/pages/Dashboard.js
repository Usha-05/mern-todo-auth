import React from 'react';
import TodoList from '../components/TodoList';

export default function Dashboard() {
  const logout = () => { localStorage.removeItem('token'); window.location.href = '/'; };
  return (
    <div>
      <h2>Your Todos</h2>
      <button onClick={logout}>Logout</button>
      <TodoList />
    </div>
  );
}