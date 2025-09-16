import React, { useEffect, useState } from 'react';
import API from '../api';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const load = async () => {
    const res = await API.get('/todos');
    setTodos(res.data);
  };
  useEffect(() => { load(); }, []);

  const add = async () => {
    if (!text.trim()) return;
    const res = await API.post('/todos', { text });
    setTodos(prev => [res.data, ...prev]);
    setText('');
  };

  const toggle = async (id, completed) => {
    const res = await API.put(`/todos/${id}`, { completed: !completed });
    setTodos(prev => prev.map(t => t._id === id ? res.data : t));
  };

  const remove = async (id) => {
    await API.delete(`/todos/${id}`);
    setTodos(prev => prev.filter(t => t._id !== id));
  };

  return (
    <div>
      <div>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo" />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {todos.map(t => (
          <li key={t._id}>
            <label>
              <input type="checkbox" checked={t.completed} onChange={() => toggle(t._id, t.completed)} />
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.text}</span>
            </label>
            <button onClick={() => remove(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}