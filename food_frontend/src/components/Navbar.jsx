import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:bg-gray-800 dark:text-white">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Left: Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" aria-label="Home">
          <img src="/images/logo.jpg" className="h-20" alt="Food Delivery Logo" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-900 dark:text-white"
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Center: Menu Items (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="font-medium flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Link */}
        <Link
          to="/contact"
          className="text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu (Show when menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 p-4">
            <li><Link to="/" className="block text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700">Home</Link></li>
            <li><Link to="/about" className="block text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700">About</Link></li>
            <li><Link to="/services" className="block text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700">Services</Link></li>
            <li><Link to="/pricing" className="block text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700">Pricing</Link></li>
            <li><Link to="/contact" className="block text-blue-900 py-2 px-3 rounded hover:bg-blue-300 dark:text-white dark:hover:bg-blue-700">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
