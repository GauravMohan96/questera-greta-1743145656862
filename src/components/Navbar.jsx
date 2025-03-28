import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiAward } from 'react-icons/fi';
import { useLoyalty } from '../context/LoyaltyContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useLoyalty();

  return (
    <nav className="bg-warm-gray text-cream py-4 px-6 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl">Brew & Gather</Link>
        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className="hidden md:flex items-center space-x-8 font-poppins">
          <Link to="/" className="hover:text-cafe-brown transition-colors">Home</Link>
          <Link to="/menu" className="hover:text-cafe-brown transition-colors">Menu</Link>
          <Link to="/coworking" className="hover:text-cafe-brown transition-colors">Coworking</Link>
          <Link to="/events" className="hover:text-cafe-brown transition-colors">Events</Link>
          <Link to="/about" className="hover:text-cafe-brown transition-colors">About</Link>
          <Link to="/contact" className="hover:text-cafe-brown transition-colors">Contact</Link>
          <Link 
            to="/rewards" 
            className="flex items-center hover:text-cafe-brown transition-colors"
          >
            <FiAward className="mr-1" />
            <span>{state.points} pts</span>
          </Link>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-warm-gray md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link to="/" className="hover:text-cafe-brown transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/menu" className="hover:text-cafe-brown transition-colors" onClick={() => setIsOpen(false)}>Menu</Link>
              <Link to="/coworking" className="hover:text-cafe-brown transition-colors" onClick={() => setIsOpen(false)}>Coworking</Link>
              <Link to="/events" className="hover:text-cafe-brown transition-colors" onClick={() => setIsOpen(false)}>Events</Link>
              <Link to="/about" className="hover:text-cafe-brown transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-cafe-brown transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link 
                to="/rewards" 
                className="flex items-center hover:text-cafe-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FiAward className="mr-1" />
                <span>{state.points} pts</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;