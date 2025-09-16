import React, { useState } from 'react';
import API from '../api';

export default function AuthForm({ mode = 'login', onAuth }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const submit = async (e) => {
    e.preventDefault();
    try {
      const url = mode === 'login' ? '/auth/login' : '/auth/register';
      const res = await API.post(url, mode === 'login' ? { email: form.email, password: form.password } : form);
      localStorage.setItem('token', res.data.token);
      onAuth();
    } catch (err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };
  return (
    <form onSubmit={submit}>
      {mode === 'register' && (
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name" required />
      )}
      <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" required />
      <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Password" required />
      <button type="submit">{mode === 'login' ? 'Login' : 'Sign up'}</button>
    </form>
  );
}