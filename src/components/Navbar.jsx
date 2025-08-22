import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(prev => !prev);

  // Services dropdown items
  const servicesItems = [
    "LASER PROCTOLOGY",
    "GENERAL&LAPROSCOPIC SURGERIES", 
    "LASER TREATMENT FOR HIDRADENTITIS",
    "ANAL WART REMOVAL",
    "VARICOSE VEINS",
    "CIRCUMCISIONS",
    "LUMP EXCISIONS",
    "DIABEIC FOOT& VARICOSE ULCERS CARE"
  ];

  return (
    <div className="min-h-screen">
      <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top-bar */}
        <div className="topbar">
          <div className="topbar-content">
            <div className="contact-info">
              <div className="contact-item">
                <span>Book Appointment</span>
              </div>
              <div className="contact-item">
                <span>+91 7510700085</span>
              </div>
              <div className="contact-item">
                <span>crimsonclinics@gmail.com</span>
              </div>
            </div>

            <div className="social-links">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(s => (
                <a key={s} href="#" aria-label={s} className={`social-link ${s}`}>
                  <i className={`fab fa-${s}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main bar */}
        <nav className="main-navbar">
          <div className="navbar-content">
            {/* Logo */}
            <div className="logo-container">
              <img src="/logo.svg" alt="Crimson Clinics" className="logo-img" />
            </div>

            {/* Desktop menu */}
            <ul className="nav-menu">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
              ].map(({ label, path }) => (
                <li key={label} className="nav-item">
                  <Link to={path} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
              
              {/* Services with dropdown */}
              <li 
                className="nav-item services-dropdown-trigger" 
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <div className="nav-link with-dropdown">
                  Services <i className="fas fa-chevron-down"></i>
                </div>
                
                {isServicesDropdownOpen && (
                  <div className="services-dropdown">
                    {servicesItems.map((service, index) => (
                      <Link 
                        key={index} 
                        to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="dropdown-item"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              
              {[
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={label} className="nav-item">
                  <Link to={path} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="navbar-actions">
              <button className="search-btn" aria-label="Search">
                <i className="fas fa-search" />
              </button>
              <button className="appointment-btn">Book Appointment</button>
            </div>

            {/* Hamburger */}
            <button
              className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-menu">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { 
                  label: 'Services', 
                  path: '/services',
                  isDropdown: true,
                  items: servicesItems
                },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  {item.isDropdown ? (
                    <div className="mobile-dropdown">
                      <div 
                        className="mobile-dropdown-trigger"
                        onClick={() => {
                          const dropdown = document.querySelector(`.mobile-dropdown-content-${item.label.toLowerCase()}`);
                          dropdown.classList.toggle('active');
                        }}
                      >
                        {item.label} <i className="fas fa-chevron-down"></i>
                      </div>
                      <div className={`mobile-dropdown-content mobile-dropdown-content-${item.label.toLowerCase()}`}>
                        {item.items.map((service, index) => (
                          <Link 
                            key={index} 
                            to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={toggleMobileMenu}
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={item.path} onClick={toggleMobileMenu}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mobile-actions">
              <button className="mobile-appointment-btn">Book Appointment</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;