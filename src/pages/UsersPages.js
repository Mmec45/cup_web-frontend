import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchUserById, createUser } from '../redux/user/userActions';

const UsersPage = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const [userId, setUserId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({ username: '', password: '', role: '' });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFetchUser = () => {
    dispatch(fetchUserById(userId));
  };

  const handleCreateUser = () => {
    dispatch(createUser(newUser));
    setNewUser({ username: '', password: '', role: '' });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAdmin) {
    return <p>Vous n'êtes pas autorisé à accéder à cette page.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Users Management</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Users List */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">User List</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search users"
            className="border p-2 mb-4 w-full"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded shadow-md">
                <h2 className="text-xl font-bold mb-2">{user.username}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="mt-2 text-gray-500">Role: {user.role}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter user ID"
            className="border p-2 mb-4 w-full"
          />
          <button
            onClick={handleFetchUser}
            className="bg-blue-500 text-white px-4 py-2 mb-4 w-full"
          >
            Fetch User by ID
          </button>
          {selectedUser && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Selected User</h2>
              <p>{selectedUser.username}</p>
            </div>
          )}
        </div>

        {/* Create User Form */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Create User</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                placeholder="Enter username"
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                placeholder="Enter password"
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Role</label>
              <input
                type="text"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                placeholder="Enter role"
                className="border p-2 w-full"
              />
            </div>
            <button
              onClick={handleCreateUser}
              className="bg-green-500 text-white px-4 py-2 w-full"
            >
              Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
