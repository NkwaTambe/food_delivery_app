import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans bg-gray-100">

  {/* Hero Section */}
  <section
         className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center text-white"
         style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/brand.jpg" 
            alt="Brand Background"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="z-20 text-center px-6 py-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Craving Something Delicious?</h1>
          <p className="text-xl mb-6">Get your favorite meals delivered fast and fresh.</p>
          <Link
            to="/restaurants"  // Link to the Restaurant List
            className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Explore Restaurants
          </Link>
        </div>
      </section>


      {/* Search Bar */}
      <section className="px-6 py-12 bg-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for dishes, restaurants, or cuisines"
              className="flex-grow py-3 px-4 text-lg placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-orange-500 text-white py-3 px-6 font-semibold hover:bg-orange-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-white" id="menu">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Popular Dishes</h2>
          <p className="text-lg text-gray-600">Order from our most popular dishes</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Example Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Dish" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Spaghetti Bolognese</h3>
              <p className="text-gray-500 mt-2">Classic Italian pasta with rich meat sauce</p>
              <p className="text-lg font-bold text-orange-500 mt-4">7,500FCFA</p>
              <a href="#" className="mt-4 inline-block text-orange-500 hover:text-orange-600">Order Now</a>
            </div>
          </div>
          {/* Example Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Dish" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Cheese Burger</h3>
              <p className="text-gray-500 mt-2">Juicy beef patty with melted cheese and fresh veggies</p>
              <p className="text-lg font-bold text-orange-500 mt-4">4,500FCFA</p>
              <a href="#" className="mt-4 inline-block text-orange-500 hover:text-orange-600">Order Now</a>
            </div>
          </div>
          {/* Example Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Dish" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Margherita Pizza</h3>
              <p className="text-gray-500 mt-2">Fresh mozzarella, basil, and tomato sauce on a thin crust</p>
              <p className="text-lg font-bold text-orange-500 mt-4">6,500FCFA</p>
              <a href="#" className="mt-4 inline-block text-orange-500 hover:text-orange-600">Order Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-12 bg-orange-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Special Offers</h2>
          <p className="text-lg text-gray-600">Get great deals on your next order!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Promotion 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">10% Off Your First Order</h3>
            <p className="text-gray-500 mt-4">Use code <strong>WELCOME10</strong> at checkout.</p>
            <a href="#" className="mt-6 inline-block text-orange-500 hover:text-orange-600">Learn More</a>
          </div>
          {/* Promotion 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Free Delivery on Orders Over 4,500FCFA</h3>
            <p className="text-gray-500 mt-4">Enjoy free delivery with your next order above 4,500FCFA.</p>
            <a href="#" className="mt-6 inline-block text-orange-500 hover:text-orange-600">Learn More</a>
          </div>
          {/* Promotion 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Family Meal Deal</h3>
            <p className="text-gray-500 mt-4">Order any 3 large pizzas for just 5,000FCFA!</p>
            <a href="#" className="mt-6 inline-block text-orange-500 hover:text-orange-600">Order Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      

    </div>
  );
};

export default Home;
