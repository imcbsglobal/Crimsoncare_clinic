import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";   // run:  npm i react-icons
import { Link } from "react-router-dom";       // ✅ using React Router for internal navigation
import "./Footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signing up with email:", email);
    setEmail("");
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Company Info */}
            <div className="footer__section">
              <h3 className="footer__title">Crimson Care</h3>
              <p className="footer__description">Crimson Health care solutions</p>
              <p className="footer__specialization">Specialized in protology care</p>

              <form className="footer__newsletter" onSubmit={handleSignUp}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
                <button type="submit">Sign Up</button>
              </form>
            </div>

            {/* Services */}
            <div className="footer__section">
              <h3 className="footer__title">Our Services</h3>
              <ul>
                <li>Laser Proctology</li>
                <li>Laparoscopic Surgeries</li>
                <li>Laser Hidradenitis</li>
                <li>Anal Wart Removal</li>
                <li>Varicose Veins</li>
                <li>Circumcision</li>
                <li>Lump Excision</li>
              </ul>
            </div>

            {/* Schedule */}
            <div className="footer__section">
              <h3 className="footer__title">Schedule</h3>
              <p>Mon - Sat: 09:00 am – 07:00 pm</p>
              <p>Sunday: 09:00 am – 07:00 pm</p>
              <h4 className="footer__subtitle">Address</h4>
              <p>📍 Near Medical College Kozhikode</p>
            </div>

            {/* Contact */}
            <div className="footer__section">
              <h3 className="footer__title">Contact</h3>
              <p>✉ crimsonscare@gmail.com</p>
              <p>📞 +91 7510700085</p>
              <div className="footer__socials">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p>© Crimson Care, All rights reserved.</p>
            <span>
              Designed by <a href="#">IMC</a> | Distributed by <a href="#">Team IMC</a>
            </span>
          </div>
        </div>
      </footer>

      {/* ✅ Fixed WhatsApp icon → Book Appointment page */}
      <Link
        to="/book-appointment"
        className="whatsapp-float"
        aria-label="Go to Book Appointment"
      >
        <FaWhatsapp />
      </Link>
    </>
  );
};

export default Footer;
