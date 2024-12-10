// Contact.js or Contact Section in Home.js
const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-screen-lg mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">we love to hear from you! Reach out to us for any inquiries.</p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
              <ul className="text-gray-600 mt-4">
                <li className="mb-2">
                  <strong>Email:</strong> <a href="mailto:info@foodcompany.com" className="text-blue-500">info@foodcompany.com</a>
                </li>
                <li className="mb-2">
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500">+ (237) 670-95-15-50</a>
                </li>
                <li className="mb-2">
                  <strong>Address:</strong> Cameron-bonaberi, douala
                </li>
              </ul>
            </div>
  
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Send Us a Message</h3>
              <form className="mt-4">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  