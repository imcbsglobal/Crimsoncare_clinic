// src/pages/VaricoseVeins.jsx
import React from "react";
import "./ServicePage.scss";
import varicoseImg from "../assets/varicose.jpg"; // ✅ side image
import bannerImg from "../assets/varicose-banner.jpeg"; // ✅ wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const VaricoseVeins = () => {
  return (
    <div className="service-page">
      {/* ✅ Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Varicose Veins Treatment</h1>
            <p>
              Advanced, minimally invasive laser and surgical treatments for painful, 
              swollen, and twisted veins — restoring healthy blood flow and confidence.
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Content Section */}
      <section className="service-content container">
        <div className="text-box">
          <h2>What are Varicose Veins?</h2>
          <p>
            Varicose veins are enlarged, swollen, and twisted veins often seen in 
            the legs due to faulty valves. They can cause pain, heaviness, cramps, 
            and cosmetic concerns if untreated.
          </p>

          <h3>✨ Why Choose Laser Treatment?</h3>
          <p>
            Laser treatment for varicose veins seals the faulty veins using heat 
            energy, allowing blood to reroute through healthy veins. It’s a 
            minimally invasive, scar-free, and highly effective procedure.
          </p>

          <h3>Benefits of Varicose Veins Laser Treatment:</h3>
          <ul className="styled-list">
            <li>✔️ Minimally invasive with no major cuts</li>
            <li>✔️ Quick recovery and return to routine</li>
            <li>✔️ Relief from pain, swelling, and heaviness</li>
            <li>✔️ No visible scars</li>
            <li>✔️ Improved circulation and appearance</li>
          </ul>

          <h3>Who Should Consider Treatment?</h3>
          <ul className="styled-list">
            <li>Individuals with painful, swollen, or twisted veins</li>
            <li>Patients with skin changes or ulcers caused by poor circulation</li>
            <li>Those experiencing heaviness, cramps, or restless legs</li>
          </ul>

          <div className="cta-box">
            <h3>Book Your Consultation Today!</h3>
            <p>
              Our expert surgeons at Crimson Clinics specialize in painless, 
              minimally invasive varicose vein treatments to restore your health 
              and confidence.
            </p>
            <Link to="/book-appointment" className="btn-primary">
  Book Appointment
</Link>
          </div>
        </div>

        {/* ✅ Side Image */}
        <div className="image-box">
          <img src={varicoseImg} alt="Varicose Veins Treatment" />
        </div>
      </section>

      {/* ✅ Extra Info */}
      <section className="extra-info container">
        <h2>Why Choose Crimson Clinics?</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-stethoscope"></i>
            <h4>Advanced Laser Technology</h4>
            <p>State-of-the-art equipment ensures precise and effective treatment.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Expert Specialists</h4>
            <p>Experienced surgeons with proven expertise in vein care.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>Minimally Invasive Care</h4>
            <p>Day-care procedures with minimal downtime and no large scars.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-smile"></i>
            <h4>Improved Lifestyle</h4>
            <p>Get back to your daily routine without pain or discomfort.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VaricoseVeins;
