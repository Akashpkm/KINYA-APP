import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import img from "./kinya.png";

function Navbar({ onThemeChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to body and save to localStorage
    const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = themeClass;
    localStorage.setItem('theme', themeClass);
    
    if (onThemeChange) {
      onThemeChange(isDarkTheme);
    }
  }, [isDarkTheme, onThemeChange]);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark-theme');
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Determine active section based on current route
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/products') return 'products';
    if (path === '/video') return 'video';
    if (path === '/certification') return 'certification';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home', path: '/' },
    { id: 'products', label: 'Products', icon: 'fa-solid fa-hard-drive', path: '/products' },
    { id: 'video', label: 'Video', icon: 'fas fa-video', path: '/video' },
    { id: 'certification', label: 'Certification', icon: 'fas fa-certificate', path: '/certification' },
    { id: 'about', label: 'About', icon: 'fas fa-info-circle', path: '/about' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-phone-alt', path: '/contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDarkTheme ? 'dark' : 'light'}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <div className="logo-container">
              <img src={img} alt="Kinya Medical System Logo" />
              <div className="logo-text">
                <span className="logo-main">KINYA</span>
                <span className="logo-sub">Medical Systems</span>
              </div>
            </div>
          </Link>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link 
                  to={item.path}
                  className={`nav-link ${getActiveSection() === item.id ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
            
            {/* Theme Toggle Button in Menu */}
            <li className="nav-item theme-toggle-mobile">
              <button 
                className={`theme-toggle-btn ${isDarkTheme ? 'dark' : 'light'}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <i className={isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
          
          {/* Desktop Theme Toggle */}
          <div className="nav-actions">
            <button 
              className={`theme-toggle-btn desktop ${isDarkTheme ? 'dark' : 'light'}`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </div>

          {/* Hamburger Menu */}
          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
}

export default Navbar;