import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffees, createCoffee, updateCoffee, deleteCoffee } from '../redux/coffee/coffeeActions';

const CoffeePage = () => {
  const dispatch = useDispatch();
  const coffees = useSelector((state) => state.coffees.coffees);
  const [coffeeId, setCoffeeId] = useState('');
  const [newCoffee, setNewCoffee] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  const handleCreateCoffee = () => {
    dispatch(createCoffee(newCoffee));
    setNewCoffee({ name: '', description: '', price: '' });
  };

  const handleUpdateCoffee = () => {
    dispatch(updateCoffee(coffeeId, newCoffee));
    setCoffeeId('');
    setNewCoffee({ name: '', description: '', price: '' });
  };

  const handleDeleteCoffee = () => {
    dispatch(deleteCoffee(coffeeId));
    setCoffeeId('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Coffees</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newCoffee.name}
          onChange={(e) => setNewCoffee({ ...newCoffee, name: e.target.value })}
          placeholder="Enter coffee name"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={newCoffee.description}
          onChange={(e) => setNewCoffee({ ...newCoffee, description: e.target.value })}
          placeholder="Enter description"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={newCoffee.price}
          onChange={(e) => setNewCoffee({ ...newCoffee, price: e.target.value })}
          placeholder="Enter price"
          className="border p-2"
        />
      </div>
      <button onClick={handleCreateCoffee} className="bg-green-500 text-white px-4 py-2 mb-4">
        Create Coffee
      </button>
      <input
        type="text"
        value={coffeeId}
        onChange={(e) => setCoffeeId(e.target.value)}
        placeholder="Enter coffee ID"
        className="border p-2 mb-4"
      />
      <button onClick={handleUpdateCoffee} className="bg-yellow-500 text-white px-4 py-2 mb-4">
        Update Coffee
      </button>
      <button onClick={handleDeleteCoffee} className="bg-red-500 text-white px-4 py-2 mb-4">
        Delete Coffee
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{coffee.name}</h2>
            <p className="text-gray-600">{coffee.description}</p>
            <p className="text-gray-600">${coffee.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeePage;
