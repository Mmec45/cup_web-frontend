import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersPage from './UsersPages';
import OrdersPage from './OrdersPage';
import CoffeePage from './CoffeePage';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="users" element={<UsersPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="coffee" element={<CoffeePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
