// Services.js or Services Section in Home.js
const Services = () => {
    return (
      <section id="services" className="py-16 bg-white">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 mb-6">We offer a variety of services to cater to your food delivery needs.</p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
              <p className="text-gray-500 mt-2">We deliver your food quickly and fresh, ensuring satisfaction.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Wide Selection</h3>
              <p className="text-gray-500 mt-2">Choose from a wide range of dishes, restaurants, and cuisines.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Secure Payments</h3>
              <p className="text-gray-500 mt-2">Your payment is secure with multiple payment options to choose from.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  