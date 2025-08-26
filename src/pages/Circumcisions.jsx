// src/pages/Circumcisions.jsx
import React from "react";
import "./ServicePage.scss";
import circumcisionImg from "../assets/circumcision.jpg"; // ✅ side image
import bannerImg from "../assets/circumcision-banner.jpg"; // ✅ wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Circumcisions = () => {
  return (
    <div className="service-page">
      {/* ✅ Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Circumcisions</h1>
            <p>
              Safe, hygienic, and painless circumcision procedures for children and 
              adults using advanced laser and stapler techniques.
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Content Section */}
      <section className="service-content container">
        <div className="text-box">
          <h2>What is Circumcision?</h2>
          <p>
            Circumcision is the surgical removal of the foreskin covering the head 
            of the penis. It is performed for medical, cultural, or religious 
            reasons. Modern techniques like laser and stapler circumcision ensure 
            quick healing, minimal pain, and excellent cosmetic results.
          </p>

          <h3>✨ Why Choose Laser or Stapler Circumcision?</h3>
          <p>
            Compared to traditional methods, advanced circumcision techniques 
            provide faster recovery, less bleeding, and reduced risk of 
            complications. These procedures are safe for both children and adults.
          </p>

          <h3>Benefits of Advanced Circumcision:</h3>
          <ul className="styled-list">
            <li>✔️ Painless and scar-free procedure</li>
            <li>✔️ Minimal bleeding and reduced infection risk</li>
            <li>✔️ Faster recovery and return to routine</li>
            <li>✔️ Same-day discharge in most cases</li>
            <li>✔️ Excellent cosmetic outcomes</li>
          </ul>

          <h3>Who Should Consider Circumcision?</h3>
          <ul className="styled-list">
            <li>Children with phimosis (tight foreskin)</li>
            <li>Adults facing recurrent infections or difficulty in hygiene</li>
            <li>Individuals opting for cultural or religious reasons</li>
          </ul>

          <div className="cta-box">
            <h3>Book Your Consultation Today!</h3>
            <p>
              At Crimson Clinics, we provide safe and modern circumcision 
              procedures ensuring comfort, hygiene, and faster healing.
            </p>
            <Link to="/book-appointment" className="btn-primary">
  Book Appointment
</Link>
          </div>
        </div>

        {/* ✅ Side Image */}
        <div className="image-box">
          <img src={circumcisionImg} alt="Circumcision Procedure" />
        </div>
      </section>

      {/* ✅ Extra Info */}
      <section className="extra-info container">
        <h2>Why Choose Crimson Clinics?</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Expert Surgeons</h4>
            <p>Our specialists ensure a safe and comfortable procedure.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>Modern Techniques</h4>
            <p>We use laser and stapler methods for minimal pain and quick recovery.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-heartbeat"></i>
            <h4>Patient-Centered Care</h4>
            <p>Personalized care for children, adults, and special medical cases.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-smile"></i>
            <h4>Hygienic Environment</h4>
            <p>High-standard facilities to ensure safety and comfort.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Circumcisions;
