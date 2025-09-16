import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const onAuth = () => window.location.href = '/dashboard';
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onAuth={onAuth} />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
export default App;