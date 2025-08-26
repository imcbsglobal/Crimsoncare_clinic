// src/pages/LaserProctology.jsx
import React from "react";
import "./ServicePage.scss";
import laserImg from "../assets/laser.jpg";
import bannerImg from "../assets/laser-banner.jpg"; // ✅ add a wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const LaserProctology = () => {
  return (
    <div className="service-page">
      {/* Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Laser Proctology</h1>
            <p>
              Advanced, painless, and scar-free treatment for piles, fissures, 
              and fistulas with faster recovery and minimal downtime. 
              Experience world-class care with our expert surgeons.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="service-content container">
        <div className="text-box">
          <h2>Why Choose Laser Proctology?</h2>
          <p>
            Laser Proctology is a cutting-edge, minimally invasive procedure 
            that uses advanced laser technology to treat anorectal conditions 
            like piles, fissures, and fistulas. Unlike conventional surgeries, 
            laser treatment offers a painless experience with quicker healing, 
            negligible bleeding, and a shorter hospital stay.
          </p>

          <h3>✨ Benefits of Laser Proctology:</h3>
          <ul className="styled-list">
            <li>✔️ Painless procedure with faster recovery</li>
            <li>✔️ Minimal blood loss during surgery</li>
            <li>✔️ Same-day discharge in most cases</li>
            <li>✔️ No external scars or stitches</li>
            <li>✔️ Reduced chances of recurrence</li>
            <li>✔️ Quick return to normal lifestyle & work</li>
          </ul>

          <h3>🔍 Conditions Treated:</h3>
          <ul className="styled-list">
            <li>Piles (Hemorrhoids)</li>
            <li>Anal Fissures</li>
            <li>Anal Fistulas</li>
            <li>Chronic constipation-related anorectal issues</li>
          </ul>

          <div className="cta-box">
            <h3>Book Your Consultation Today!</h3>
            <p>
              Our specialists will guide you with the right treatment plan for 
              a faster and more comfortable recovery. Take the first step 
              towards a pain-free life.
            </p>
            <Link to="/book-appointment" className="btn-primary">
  Book Appointment
</Link>
          </div>
        </div>

        {/* Side Image */}
        <div className="image-box">
          <img src={laserImg} alt="Laser Proctology" />
        </div>
      </section>

      {/* Extra Info */}
      <section className="extra-info container">
        <h2>Why Patients Trust Crimson Clinics</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Expert Surgeons</h4>
            <p>Our team of experienced proctologists ensure world-class care.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>State-of-the-Art Facilities</h4>
            <p>Equipped with the latest laser technology for effective treatment.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-heartbeat"></i>
            <h4>Personalized Care</h4>
            <p>Every patient receives tailored treatment for their condition.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-clock"></i>
            <h4>Faster Recovery</h4>
            <p>Most patients are discharged the same day with minimal downtime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaserProctology;
