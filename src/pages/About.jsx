// About.jsx
import React from "react";
import "./About.scss";
import Footer from "../components/Footer";   // ⬅️ Import Footer
import { Link } from "react-router-dom";
import hospitalImage from "../assets/hospital.jpg";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        {/* Banner */}
        <div className="about-hero">
          <div className="text" data-aos="fade-right">
            <h1>About PilesCare Hospital</h1>
            <p>
              Providing advanced, compassionate treatment for piles, fissures, and fistulas — 
              trusted by over 10,000 patients across India.
            </p>
          </div>
          <div className="image" data-aos="fade-left">
            <img src={hospitalImage} alt="PilesCare Hospital" />
          </div>
        </div>

        {/* Info Section */}
        <div className="about-info" data-aos="fade-up">
          <h2>Who We Are</h2>
          <p>
            At <strong>PilesCare Hospital</strong>, we combine medical excellence with a human touch.
            Our minimally invasive procedures help patients recover faster with minimal discomfort.
            With modern laser equipment and a team of dedicated specialists, we provide safe,
            affordable, and effective treatments in a fully hygienic environment.
          </p>
          <ul className="features">
            <li>✅ Advanced Laser Surgery</li>
            <li>✅ Personalized Patient Plans</li>
            <li>✅ 24/7 Emergency & Post-care Support</li>
            <li>✅ Clean, Modern Infrastructure</li>
          </ul>
        </div>

        {/* Mission, Vision, Trust Cards */}
        <div className="about-cards" data-aos="fade-up">
          <div className="card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide safe, effective, and affordable anorectal treatments
              using the latest technology and patient-focused care.
            </p>
          </div>
          <div className="card">
            <h3>🌟 Our Vision</h3>
            <p>
              To become the most trusted and advanced piles treatment center in India,
              offering fast recovery and compassionate care.
            </p>
          </div>
          <div className="card">
            <h3>🤝 Why Patients Trust Us</h3>
            <ul>
              <li>✔ 20+ Years Experience</li>
              <li>✔ Specialized Surgeons & Experts</li>
              <li>✔ Privacy-First Treatment Plans</li>
              <li>✔ Transparent Pricing & Support</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats" data-aos="fade-up">
          <div className="stat">
            <h2>10,000+</h2>
            <p>Patients Treated</p>
          </div>
          <div className="stat">
            <h2>20+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h2>95%</h2>
            <p>Success Rate</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="about-cta" data-aos="fade-up">
          <button className="btn-primary">Meet Our Specialists</button>
          <Link to="/book-appointment">
  <button className="btn-primary">Book Appointment</button>
</Link>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </>
  );
};

export default About;
