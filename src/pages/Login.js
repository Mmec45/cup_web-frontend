import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/authActions';
import { Navigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authError = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  if (isAuthenticated && user?.role === 'admin') {
    localStorage.setItem('token', user.token);
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {authError && <p className="text-red-500 mb-4">{authError}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 mb-4 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <Link to="/" className="block mt-4 text-blue-500 hover:underline text-center">
          Retour à la page shop
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
