import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/authActions';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authError = useSelector((state) => state.auth.error);

  const handleRegister = () => {
    dispatch(register(username, password));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
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
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
