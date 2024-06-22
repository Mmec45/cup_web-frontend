import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersPage from './UsersPages';
import OrdersPage from './OrdersPage';
import CoffeePage from './CoffeePage';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const isAdmin = isAuthenticated && user?.role === 'admin';

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="users" element={<UsersPage isAdmin={isAdmin} />} />
          <Route path="orders" element={<OrdersPage isAdmin={isAdmin} />} />
          <Route path="coffee" element={<CoffeePage isAdmin={isAdmin} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
