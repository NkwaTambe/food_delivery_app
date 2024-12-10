// About.js or About Section in Home.js
const About = () => {
    return (
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-screen-lg mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            We are a leading food delivery company, committed to delivering high-quality, sustainable food products. With years of experience in the industry, we bring innovation and care to every product we create.
          </p>
          <img
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  };
  
  export default About;
  