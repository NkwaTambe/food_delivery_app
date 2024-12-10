import  { useState } from 'react';
// Example restaurant menu data
const menuItems = [
  { id: 1, name: 'Spaghetti Bolognese', category: 'Pasta', price: 12.99 },
  { id: 2, name: 'Cheese Burger', category: 'Burgers', price: 9.99 },
  { id: 3, name: 'Margherita Pizza', category: 'Pizza', price: 11.50 },
  // Add more menu items
];

const categories = ['All', 'Pasta', 'Burgers', 'Pizza', 'Salads'];

const RestaurantMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredMenu = selectedCategory === 'All' ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="px-6 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Restaurant Menu</h1>
      {/* Category Filters */}
      <div className="flex justify-center mb-8">
        {categories.map(category => (
          <button
            key={category}
            className={`py-2 px-4 mx-2 rounded-lg ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMenu.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 mt-2">Category: {item.category}</p>
              <p className="text-lg font-bold text-orange-500 mt-4">${item.price.toFixed(2)}</p>
              <a href="#" className="mt-4 inline-block text-orange-500 hover:text-orange-600">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
