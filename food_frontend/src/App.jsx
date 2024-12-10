import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RestaurantList from "./pages/RestaurantList"; 
import RestaurantMenu from "./pages/RestaurantMenu"; 
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
           <Route path="/contact" element={<Contact />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
