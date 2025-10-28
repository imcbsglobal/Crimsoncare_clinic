import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';
import metroLogo from '../assets/metro_logo.png';

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

  // ✅ Services dropdown items with paths
  const servicesItems = [
    { label: "LASER PROCTOLOGY", path: "/laser-proctology" },
    { label: "PILES / HEMORRHOIDS", path: "/hemorrhoids" },
    { label: "GENERAL & LAPAROSCOPIC SURGERIES", path: "/general-surgeries" },
    { label: "LASER TREATMENT FOR HIDRADENITIS", path: "/hidradentitis" },
    { label: "ANAL WART REMOVAL", path: "/anal-wart-removal" },
    { label: "VARICOSE VEINS", path: "/varicose-veins" },
    { label: "CIRCUMCISIONS", path: "/circumcisions" },
    { label: "LUMP EXCISIONS", path: "/lump-excisions" },
    { label: "DIABETIC FOOT & VARICOSE ULCERS CARE", path: "/diabetic-foot" }
  ];

  return (
    <div className="min-h-screen">
      <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top-bar */}
        <div className="topbar">
          <div className="topbar-content">
            <div className="contact-info">
              <div className="contact-item">
                <Link to="/book-appointment">Book Appointment</Link>
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
              <Link to="/">
                <img src={metroLogo} alt="Metro Logo" className="logo-img" / >
              </Link>
            </div>

            {/* Desktop menu */}
            <ul className="nav-menu">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
              ].map(({ label, path }) => (
                <li key={label} className="nav-item">
                  <NavLink 
                    to={path}  
                    className={({ isActive }) => 
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {label}
                  </NavLink>
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
                      <NavLink 
                        key={index} 
                        to={service.path}  
                        className={({ isActive }) =>
                          isActive ? "dropdown-item active" : "dropdown-item"
                        }
                      >
                        {service.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
              
              {[
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={label} className="nav-item">
                  <NavLink 
                    to={path} 
                    className={({ isActive }) => 
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="navbar-actions">
              {/* <button className="search-btn" aria-label="Search">
                <i className="fas fa-search" />
              </button> */}
              <Link to="/book-appointment" className="appointment-btn">
                Book Appointment
              </Link>
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
                          <NavLink 
                            key={index} 
                            to={service.path}
                            onClick={toggleMobileMenu}
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            {service.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink 
                      to={item.path} 
                      onClick={toggleMobileMenu}
                      className={({ isActive }) => 
                        isActive ? "active" : ""
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mobile-actions">
              <Link to="/book-appointment" onClick={toggleMobileMenu} className="mobile-appointment-btn">
                Book Appointment
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
