import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffees } from '../redux/coffee/coffeeActions';
import { createOrder } from '../redux/order/orderActions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const coffees = useSelector((state) => state.coffees.coffees);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderDetails, setOrderDetails] = useState({ coffeeId: '', quantity: 1, totalPrice: 0 });

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCoffees = coffees.filter((coffee) =>
    coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrder = () => {
    dispatch(createOrder({ coffeeId: orderDetails.coffeeId, quantity: orderDetails.quantity, totalPrice: orderDetails.totalPrice }));
    setOrderDetails({ coffeeId: '', quantity: 1, totalPrice: 0 });
  };

  const handleCoffeeSelect = (coffee) => {
    setOrderDetails({
      coffeeId: coffee.id,
      quantity: orderDetails.quantity,
      totalPrice: coffee.price * orderDetails.quantity
    });
  };

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    const selectedCoffee = coffees.find(coffee => coffee.id === orderDetails.coffeeId);
    setOrderDetails({
      ...orderDetails,
      quantity: newQuantity,
      totalPrice: selectedCoffee ? selectedCoffee.price * newQuantity : 0
    });
  };

  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Coffee Delice</h1>
          <Link to="/login" className="text-lg">Login</Link>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Coffee Menu</h1>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search coffee"
              className="border p-2 mb-4 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCoffees.map((coffee) => (
                <div key={coffee.id} className="bg-white p-4 rounded shadow-md">
                  <h2 className="text-xl font-bold mb-2">{coffee.name}</h2>
                  <p className="text-gray-600 mb-2">{coffee.description}</p>
                  <p className="text-gray-600 mb-4">${coffee.price}</p>
                  <button
                    onClick={() => handleCoffeeSelect(coffee)}
                    className="bg-blue-500 text-white px-4 py-2"
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
            {orderDetails.coffeeId ? (
              <div className="bg-white p-4 rounded shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    value={orderDetails.quantity}
                    min="1"
                    onChange={handleQuantityChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Total Price</label>
                  <p className="text-gray-600">${orderDetails.totalPrice.toFixed(2)}</p>
                </div>
                <button
                  onClick={handleOrder}
                  className="bg-green-500 text-white px-4 py-2"
                >
                  Order
                </button>
              </div>
            ) : (
              <p className="text-gray-600">Select a coffee to place an order.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
