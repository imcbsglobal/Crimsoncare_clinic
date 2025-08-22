import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact-us" className="contact">
      <div className="contact-header" data-aos="fade-down">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have questions, need more
          details about treatments, or want to book an appointment, feel free
          to get in touch.
        </p>
      </div>

      {/* Contact Info */}
      <div className="contact-info" data-aos="fade-up">
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <span>+91 7510700085</span>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <span>crimsonclinics@gmail.com</span>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>123 Health Street, Kochi, Kerala</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form" data-aos="fade-up">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>

      {/* Map */}
      <div className="map" data-aos="zoom-in">
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2950283543!2d76.2673!3d9.9312"
          width="100%"
          height="300"
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
        <button className="btn-secondary">Call Now</button>
      </div>
    </section>
  );
};

export default Contact;
