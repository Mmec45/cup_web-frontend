import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrders,
  fetchOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../redux/order/orderActions';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  const [orderId, setOrderId] = useState('');
  const [newOrder, setNewOrder] = useState({ coffeeId: '', quantity: '' });

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleFetchOrder = () => {
    dispatch(fetchOrderById(orderId));
  };

  const handleCreateOrder = () => {
    dispatch(createOrder(newOrder));
    setNewOrder({ coffeeId: '', quantity: '' });
  };

  const handleUpdateOrder = () => {
    dispatch(updateOrder(orderId, newOrder));
    setOrderId('');
    setNewOrder({ coffeeId: '', quantity: '' });
  };

  const handleDeleteOrder = () => {
    dispatch(deleteOrder(orderId));
    setOrderId('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Enter order ID"
        className="border p-2 mb-4"
      />
      <button onClick={handleFetchOrder} className="bg-blue-500 text-white px-4 py-2 mb-4">
        Fetch Order by ID
      </button>
      {selectedOrder && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Selected Order</h2>
          <p>Coffee ID: {selectedOrder.coffeeId}</p>
          <p>Quantity: {selectedOrder.quantity}</p>
        </div>
      )}
      <div className="mb-4">
        <input
          type="text"
          value={newOrder.coffeeId}
          onChange={(e) => setNewOrder({ ...newOrder, coffeeId: e.target.value })}
          placeholder="Enter coffee ID"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={newOrder.quantity}
          onChange={(e) => setNewOrder({ ...newOrder, quantity: e.target.value })}
          placeholder="Enter quantity"
          className="border p-2"
        />
      </div>
      <button onClick={handleCreateOrder} className="bg-green-500 text-white px-4 py-2 mb-4">
        Create Order
      </button>
      <button onClick={handleUpdateOrder} className="bg-yellow-500 text-white px-4 py-2 mb-4">
        Update Order
      </button>
      <button onClick={handleDeleteOrder} className="bg-red-500 text-white px-4 py-2 mb-4">
        Delete Order
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Order ID: {order.id}</h2>
            <p className="text-gray-600">Coffee ID: {order.coffeeId}</p>
            <p className="text-gray-600">Quantity: {order.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
