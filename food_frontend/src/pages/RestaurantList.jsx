const restaurants = [
  { id: 1, name: 'Italian Bistro', cuisine: 'Italian', rating: 4.5, image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Sushi House', cuisine: 'Japanese', rating: 4.7, image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Taco Fiesta', cuisine: 'Mexican', rating: 4.3, image: 'https://via.placeholder.com/300x200' },
  // Add more restaurants as needed
];

const RestaurantList = () => {
  return (
    <div className="px-6 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
              <p className="text-gray-500">{restaurant.cuisine}</p>
              <p className="text-yellow-500">{restaurant.rating} ★</p>
              <a href={`/restaurant/${restaurant.id}`} className="text-orange-500 hover:text-orange-600">View Menu</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
