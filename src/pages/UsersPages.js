import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchUserById } from '../redux/user/userActions';

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFetchUser = () => {
    dispatch(fetchUserById(userId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
        className="border p-2 mb-4"
      />
      <button onClick={handleFetchUser} className="bg-blue-500 text-white px-4 py-2 mb-4">
        Fetch User by ID
      </button>
      {selectedUser && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Selected User</h2>
          <p>{selectedUser.username}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="mt-2 text-gray-500">Role: {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
