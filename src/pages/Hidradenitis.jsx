// src/pages/Hidradenitis.jsx
import React from "react";
import "./ServicePage.scss";
import hidradenitisImg from "../assets/hidradenitis.webp"; // side image
import bannerImg from "../assets/hidradenitis-banner.webp"; // ✅ add a wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Hidradenitis = () => {
  return (
    <div className="service-page">
      {/* ✅ Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Laser Treatment for Hidradenitis</h1>
            <p>
              Safe, effective, and minimally invasive laser procedures for treating
              painful lumps and recurrent abscesses caused by hidradenitis suppurativa.
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Main Content */}
      <section className="service-content container">
        <div className="text-box">
          <h2>What is Hidradenitis Suppurativa?</h2>
          <p>
            Hidradenitis Suppurativa (HS) is a chronic skin condition that causes
            painful lumps, abscesses, and tunnels in areas like the armpits, groin,
            buttocks, and under the breasts. It can lead to recurring infections,
            scarring, and discomfort in daily life.
          </p>

          <h3>✨ Why Choose Laser Treatment?</h3>
          <p>
            Laser treatment targets the affected sweat glands and sinus tracts,
            offering long-term relief with less pain and quicker recovery compared
            to traditional surgery. It minimizes recurrence and improves skin health.
          </p>

          <h3>Benefits of Laser Treatment for Hidradenitis:</h3>
          <ul className="styled-list">
            <li>✔️ Minimally invasive procedure</li>
            <li>✔️ Less pain and faster recovery</li>
            <li>✔️ Reduced recurrence rate</li>
            <li>✔️ No large scars or stitches</li>
            <li>✔️ Improved quality of life and comfort</li>
          </ul>

          <h3>Who Can Benefit?</h3>
          <ul className="styled-list">
            <li>Patients with recurrent painful boils and abscesses</li>
            <li>Those suffering from sinus tract formations in HS</li>
            <li>Individuals looking for minimally invasive solutions</li>
          </ul>

          <div className="cta-box">
            <h3>Book Your Consultation Today!</h3>
            <p>
              Our specialists use advanced laser technology to effectively manage
              hidradenitis and restore your comfort and confidence.
            </p>
            <Link to="/book-appointment" className="btn-primary">
  Book Appointment
</Link>
          </div>
        </div>

        {/* ✅ Side Image */}
        <div className="image-box">
          <img src={hidradenitisImg} alt="Laser Treatment for Hidradenitis" />
        </div>
      </section>

      {/* ✅ Extra Info */}
      <section className="extra-info container">
        <h2>Why Choose Crimson Clinics?</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Experienced Specialists</h4>
            <p>Our surgeons are skilled in advanced laser procedures for HS.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>Minimally Invasive Approach</h4>
            <p>We focus on reducing pain, scarring, and recurrence.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-heartbeat"></i>
            <h4>Comprehensive Care</h4>
            <p>From diagnosis to aftercare, we ensure holistic patient care.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-smile"></i>
            <h4>Improved Lifestyle</h4>
            <p>Our patients return to daily life with more comfort and confidence.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hidradenitis;
