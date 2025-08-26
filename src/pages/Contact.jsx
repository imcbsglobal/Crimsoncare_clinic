import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.scss";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle WhatsApp send
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917510700085"; // ✅ International format (no +)

    const text = `📩 New Contact Request
-------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "N/A"}
💬 Message: ${formData.message}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappLink, "_blank"); // ✅ Open WhatsApp
  };

  return (
    <div className="contact-page">
      <section id="contact-us" className="contact">
        <div className="contact-header" data-aos="fade-down">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! Whether you have questions, need more
            details about treatments, or want to book an appointment, feel free
            to get in touch.
          </p>
        </div>

        {/* Contact Section Grid */}
        <div className="contact-container">
          {/* Left: Contact Info */}
          <div className="contact-info" data-aos="fade-right">
            <div className="info-card">
              <i className="fas fa-phone"></i>
              <h4>Call Us</h4>
              <p>+91 7510700085</p>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <h4>Email Us</h4>
              <p>crimsonclinics@gmail.com</p>
            </div>
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Visit Us</h4>
              <p>123 Health Street, Kochi, Kerala</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn-primary">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="map" data-aos="zoom-in">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2950283543!2d76.2673!3d9.9312"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Social Media */}
        <div className="social-media" data-aos="fade-up">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* CTA */}
        <div className="contact-cta" data-aos="zoom-in">
          <h3>Need Immediate Help?</h3>
          <p>Call us directly and our support team will assist you right away.</p>
          <a href="tel:+917510700085" className="btn-secondary">📞 Call Now</a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
