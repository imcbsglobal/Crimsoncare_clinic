// src/pages/LumpExcisions.jsx
import React from "react";
import "./ServicePage.scss";
import lumpImg from "../assets/lump.jpg"; // ✅ side image
import bannerImg from "../assets/lump-banner.jpg"; // ✅ wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LumpExcisions = () => {
  return (
    <div className="service-page">
      {/* ✅ Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Lump Excisions</h1>
            <p>
              Safe and precise surgical removal of abnormal lumps, cysts, or 
              swellings with advanced minimally invasive techniques.
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Content Section */}
      <section className="service-content container">
        <div className="text-box">
          <h2>What is a Lump Excision?</h2>
          <p>
            Lump excision is a minor surgical procedure performed to remove 
            abnormal swellings, cysts, lipomas (fatty lumps), or suspicious 
            growths under the skin. This helps in both cosmetic improvement 
            and prevention of possible complications.
          </p>

          <h3>✨ Why is Lump Excision Needed?</h3>
          <p>
            While many lumps are harmless, some may cause pain, discomfort, 
            or have a risk of becoming cancerous. Excision allows proper 
            diagnosis and ensures peace of mind.
          </p>

          <h3>Benefits of Lump Excision:</h3>
          <ul className="styled-list">
            <li>✔️ Safe and minimally invasive procedure</li>
            <li>✔️ Quick recovery with minimal scarring</li>
            <li>✔️ Permanent removal of unwanted lumps</li>
            <li>✔️ Improved appearance and confidence</li>
            <li>✔️ Helps detect and prevent health risks</li>
          </ul>

          <h3>Types of Lumps Removed:</h3>
          <ul className="styled-list">
            <li>Lipomas (fatty lumps)</li>
            <li>Sebaceous cysts</li>
            <li>Fibromas</li>
            <li>Dermoid cysts</li>
            <li>Other benign growths</li>
          </ul>

          <div className="cta-box">
            <h3>Book Your Consultation Today!</h3>
            <p>
              Our specialists use advanced techniques for safe and scar-free 
              lump excisions, ensuring faster recovery and cosmetic results.
            </p>
            <Link to="/book-appointment" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* ✅ Side Image */}
        <div className="image-box">
          <img src={lumpImg} alt="Lump Excision Surgery" />
        </div>
      </section>

      {/* ✅ Extra Info */}
      <section className="extra-info container">
        <h2>Why Choose Crimson Clinics?</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Experienced Surgeons</h4>
            <p>Our team specializes in minor and major surgical procedures.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>Minimally Invasive Approach</h4>
            <p>We ensure small incisions, faster healing, and reduced scarring.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-heartbeat"></i>
            <h4>Safe & Hygienic Environment</h4>
            <p>All procedures are performed in a sterile and modern setup.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-smile"></i>
            <h4>Patient Comfort</h4>
            <p>We focus on ensuring a painless experience and quick recovery.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LumpExcisions;
