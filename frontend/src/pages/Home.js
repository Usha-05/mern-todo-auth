import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function Home({ onAuth }) {
  const [mode, setMode] = useState('login');
  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'Switch to Sign up' : 'Switch to Login'}</button>
      <AuthForm mode={mode} onAuth={onAuth} />
    </div>
  );
}