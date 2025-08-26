// src/pages/GeneralSurgeries.jsx
import React from "react";
import "./ServicePage.scss";
import surgeryImg from "../assets/surgery.jpg"; // side image
import bannerImg from "../assets/surgery-banner.jpg"; // ✅ add a wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const GeneralSurgeries = () => {
  return (
    <div className="service-page">
      {/* ✅ Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>General & Laparoscopic Surgeries</h1>
            <p>
              Minimally invasive and conventional surgical solutions for a wide
              range of conditions with precision, safety, and quicker recovery.
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Main Content */}
      <section className="service-content container">
        <div className="text-box">
          <h2>Why Choose Laparoscopic Surgery?</h2>
          <p>
            Laparoscopic (keyhole) surgery uses small incisions and advanced
            instruments to perform surgical procedures with minimal trauma to
            the body. This leads to reduced pain, faster recovery, and shorter
            hospital stays compared to traditional open surgeries.
          </p>

          <h3>✨ Benefits of Laparoscopic Surgery:</h3>
          <ul className="styled-list">
            <li>✔️ Smaller incisions and reduced scarring</li>
            <li>✔️ Faster recovery and return to daily activities</li>
            <li>✔️ Less pain and blood loss</li>
            <li>✔️ Lower risk of infection</li>
            <li>✔️ Shorter hospital stay</li>
          </ul>

          <h3>🔍 Surgeries We Offer:</h3>
          <ul className="styled-list">
            <li>Appendectomy (Appendix Removal)</li>
            <li>Gallbladder Removal (Cholecystectomy)</li>
            <li>Hernia Repairs (Inguinal, Umbilical, Ventral)</li>
            <li>Laparoscopic Diagnostic Procedures</li>
            <li>General Surgical Procedures (Biopsies, Cyst Removal, Abscess Drainage)</li>
          </ul>

          <div className="cta-box">
            <h3>Book Your Consultation Today!</h3>
            <p>
              Our expert surgeons specialize in both general and laparoscopic
              procedures, ensuring safe, effective, and patient-focused care.
            </p>
            <Link to="/book-appointment" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* ✅ Side Image */}
        <div className="image-box">
          <img src={surgeryImg} alt="General and Laparoscopic Surgeries" />
        </div>
      </section>

      {/* ✅ Extra Info */}
      <section className="extra-info container">
        <h2>Why Patients Trust Crimson Clinics</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Skilled Surgeons</h4>
            <p>Our doctors are highly trained in both open and laparoscopic techniques.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-stethoscope"></i>
            <h4>Comprehensive Care</h4>
            <p>From diagnosis to recovery, we provide complete surgical care.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>Advanced Equipment</h4>
            <p>Modern operating theaters equipped with the latest laparoscopic tools.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-smile"></i>
            <h4>Faster Recovery</h4>
            <p>Minimally invasive techniques mean quicker return to normal life.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralSurgeries;
