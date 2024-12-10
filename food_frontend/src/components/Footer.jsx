export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900 py-6">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About Us</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                We are a leading food delivery company, committed to delivering high-quality, sustainable food products.
                With years of experience in the industry, we bring innovation and care to every product we create.
              </p>
            </div>
  
            {/* Product Categories Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Products</h2>
              <ul className="text-gray-500 dark:text-gray-400 text-sm">
                <li className="mb-2"><a href="#" className="hover:text-gray-900 dark:hover:text-white">Fresh Produce</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 dark:hover:text-white">Packaged Foods</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 dark:hover:text-white">Frozen Foods</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 dark:hover:text-white">Organic Options</a></li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 text-sm">
                <li className="mb-2"><a href="tel:+1234567890" className="hover:text-gray-900 dark:hover:text-white">+ (237) 670-95-15-50</a></li>
                <li className="mb-2"><a href="mailto:info@foodcompany.com" className="hover:text-gray-900 dark:hover:text-white">info@foodcompany.com</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 dark:hover:text-white">Visit Our Office</a></li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-6 border-t pt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-300">&copy; 2024 Food Delivery, All Rights Reserved.</p>
  
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-label="Facebook">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm4.686 6.75l-3.5 2a2 2 0 0 1-2 0l-3.5-2a1 1 0 1 1 1-1.732L8 7.693l2.5-1.444a1 1 0 1 1 1 1.732z"/>
                </svg>
              </a>
  
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-label="Twitter">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a7 7 0 1 0 7 7A7 7 0 0 0 8 1zm0 1A6 6 0 1 1 2 8a6 6 0 0 1 6-6z"/>
                </svg>
              </a>
  
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-label="Instagram">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                </svg>
              </a>
  
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-label="LinkedIn">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm4.686 6.75l-3.5 2a2 2 0 0 1-2 0l-3.5-2a1 1 0 1 1 1-1.732L8 7.693l2.5-1.444a1 1 0 1 1 1 1.732z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  