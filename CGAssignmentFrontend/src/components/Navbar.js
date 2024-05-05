// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setToken('');
    navigate('/register');
  };

  return (
    <nav className="navbar">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <Link to="/" className="navbar-logo">
          CG Meetup
        </Link>
      </motion.div>
      {token && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="navbar-link"
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      )}
    </nav>
  );
};

export default Navbar;
