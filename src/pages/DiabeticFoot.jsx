// src/pages/DiabeticFoot.jsx
import React from "react";
import "./ServicePage.scss";
import diabeticFootImg from "../assets/diabetic-foot.jpg"; // ✅ side image
import bannerImg from "../assets/diabetic-foot-banner.jpg"; // ✅ wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DiabeticFoot = () => {
  return (
    <div className="service-page">
      {/* ✅ Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Diabetic Foot & Varicose Ulcers Care</h1>
            <p>
              Comprehensive and advanced care for diabetic foot problems and 
              varicose ulcers with laser, surgical, and wound management 
              techniques to prevent complications and promote healing.
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Content */}
      <section className="service-content container">
        <div className="text-box">
          <h2>What is Diabetic Foot & Varicose Ulcers Care?</h2>
          <p>
            Diabetes and varicose veins can lead to non-healing wounds, ulcers, 
            and infections in the lower limbs. Early treatment and proper wound 
            care are crucial to avoid severe complications like gangrene and 
            amputations.
          </p>

          <h3>✨ Our Treatment Approach</h3>
          <p>
            At Crimson Clinics, we provide a multi-disciplinary approach using 
            advanced laser therapy, surgical wound debridement, vascular 
            correction, and personalized wound care protocols.
          </p>

          <h3>Benefits of Our Care Program:</h3>
          <ul className="styled-list">
            <li>✔️ Prevents infection and severe complications</li>
            <li>✔️ Promotes faster wound healing</li>
            <li>✔️ Minimally invasive laser & surgical techniques</li>
            <li>✔️ Reduces risk of recurrence</li>
            <li>✔️ Improves mobility and quality of life</li>
          </ul>

          <h3>Who Needs This Care?</h3>
          <ul className="styled-list">
            <li>Patients with diabetes experiencing foot ulcers</li>
            <li>Those with varicose veins causing non-healing ulcers</li>
            <li>Individuals with chronic wounds or repeated infections</li>
          </ul>

          <div className="cta-box">
            <h3>Book Your Consultation Today!</h3>
            <p>
              Our expert surgeons and wound care specialists ensure holistic 
              treatment to restore your health, mobility, and confidence.
            </p>
            <Link to="/book-appointment" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* ✅ Side Image */}
        <div className="image-box">
          <img src={diabeticFootImg} alt="Diabetic Foot & Varicose Ulcers Care" />
        </div>
      </section>

      {/* ✅ Extra Info */}
      <section className="extra-info container">
        <h2>Why Choose Crimson Clinics?</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Expert Surgeons</h4>
            <p>Highly skilled in diabetic wound care and vascular surgery.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>Advanced Technology</h4>
            <p>Laser & minimally invasive methods for better outcomes.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-heartbeat"></i>
            <h4>Comprehensive Care</h4>
            <p>From wound healing to preventive lifestyle guidance.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-smile"></i>
            <h4>Patient-Centered Approach</h4>
            <p>Focused on comfort, healing, and preventing recurrence.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiabeticFoot;
