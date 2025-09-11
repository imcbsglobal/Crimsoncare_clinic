import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.scss";
import Footer from "../components/Footer";
import contactBanner from "../assets/contact-banner.jpg";   //  ➜  NEW

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "917510700085";
    const text = `📩 New Contact Request
-------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "N/A"}
💬 Message: ${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="contact-page">
      {/*  ➜  FULL-FIT BANNER  */}
      <section className="hero-banner">
        <img src={contactBanner} alt="Contact Us" className="hero-img" />
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section id="contact-us" className="contact">
        <div className="contact-header" data-aos="fade-down">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! Whether you have questions, need more
            details about treatments, or want to book an appointment, feel free
            to get in touch.
          </p>
        </div>

        <div className="contact-container">
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
              <p>Near Medical College Kozhikode</p>
            </div>
          </div>

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

        <div className="map" data-aos="zoom-in">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.9376119778194!2d75.81284577481247!3d11.265996488914146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b0011d46f79%3A0x1869b0abc95b8c0a!2sCRIMSON%20HEALTH%20CARE%20SOLUTUONS%2C%203RD%20FLOOR%2C%20CK%20TOWER!5e0!3m2!1sen!2sin!4v1756448266296!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="social-media" data-aos="fade-up">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="contact-cta" data-aos="zoom-in">
          <h3>Need Immediate Help?</h3>
          <p>Call us directly and our support team will assist you right away.</p>
          <a href="tel:+917510700085" className="btn-secondary">📞 Call Now</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;