import React, { useState } from "react";
import "./BookAppointment.scss";
import Footer from "../components/Footer"; // adjust path if needed
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ WhatsApp number in full international format (without +)
    const whatsappNumber = "917510700085"; 
 
    // ✅ Construct WhatsApp message
    const text = `📅 New Appointment Request
-------------------------
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || "N/A"}
🗓 Preferred Date: ${formData.date}
💬 Message: ${formData.message || "N/A"}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // ✅ Open WhatsApp
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="book-appointment-wrapper">
      <div className="book-appointment-page">
        <h2 className="page-title">Book an Appointment</h2>

        <div className="appointment-container">
          {/* Left: Form */}
          <form className="appointment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="submit-btn">
              Submit via WhatsApp
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className="contact-info-section">
            <h3>Get in Touch</h3>
            <ul className="contact-list">
              <li><FaMapMarkerAlt /> Near Medical College Kozhikode</li>
              <li><FaPhoneAlt /> +91 7510700085</li>
              <li><FaEnvelope /> crimsonscare@gmail.com</li>
            </ul>

            <h3>Opening Hours</h3>
            <ul className="opening-hours">
              <li><FaClock /> Mon - Sat: 9:00 AM - 7:00 PM</li>
              <li><FaClock /> Sunday: 9:00 AM - 7:00 PM</li>
            
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Full-width footer at bottom */}
      <Footer />
    </div>
  );
};

export default BookAppointment;
