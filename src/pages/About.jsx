import React from "react";
import "./About.scss";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import bannerBg from "../assets/about-banner.jpg";   // ①  banner image

const About = () => {
  return (
    <>
      {/* --------------  FULL-WIDTH BANNER  -------------- */}
      <section
        className="about-hero-banner"
        style={{ backgroundImage: `url(${bannerBg})` }}  // ②  use it here
      >
        <div className="hero-content" data-aos="fade-up">
          <div className="pre-title">Excellence in Proctology Care</div>
          <h1>About PilesCare Hospital</h1>
          <p>
            Providing advanced, compassionate treatment for piles, fissures, and
            fistulas — trusted by over 10,000 patients across India. PilesCare
            Hospital is committed to delivering high-quality healthcare with
            modern facilities, expert doctors, and patient-centered care. Our
            mission is to provide safe, compassionate, and affordable treatment
            for all.
          </p>
        </div>
      </section>

      {/* --------------  REST OF PAGE  -------------- */}
      <section id="about" className="about">
        {/* Info Section */}
        <div className="about-info" data-aos="fade-up">
          <div className="section-header">
            <h2>Who We Are</h2>
            <div className="divider"></div>
          </div>
          <p>
            At <strong>PilesCare Hospital</strong>, we combine medical excellence
            with a human touch. Our minimally invasive procedures help patients
            recover faster with minimal discomfort. With modern laser equipment
            and a team of dedicated specialists, we provide safe, affordable,
            and effective treatments in a fully hygienic environment.
          </p>

          <ul className="features">
            <li>
              <span className="icon">✓</span>
              <span>Advanced Laser Surgery</span>
            </li>
            <li>
              <span className="icon">✓</span>
              <span>Personalized Patient Plans</span>
            </li>
            <li>
              <span className="icon">✓</span>
              <span>24/7 Emergency & Post-care Support</span>
            </li>
            <li>
              <span className="icon">✓</span>
              <span>Clean, Modern Infrastructure</span>
            </li>
          </ul>
        </div>

        {/* Mission / Vision / Trust Cards */}
        <div className="about-cards" data-aos="fade-up">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <div className="card-divider"></div>
            <p>
              To provide safe, effective, and affordable anorectal treatments
              using the latest technology and patient-focused care.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <div className="card-divider"></div>
            <p>
              To become the most trusted and advanced piles treatment center in
              India, offering fast recovery and compassionate care.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🤝</div>
            <h3>Why Patients Trust Us</h3>
            <div className="card-divider"></div>
            <ul>
              <li>20+ Years Experience</li>
              <li>Specialized Surgeons & Experts</li>
              <li>Privacy-First Treatment Plans</li>
              <li>Transparent Pricing & Support</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats" data-aos="fade-up">
          <div className="stat">
            <div className="stat-number">10,000+</div>
            <div className="stat-divider"></div>
            <p>Patients Treated</p>
          </div>
          <div className="stat">
            <div className="stat-number">20+</div>
            <div className="stat-divider"></div>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <div className="stat-number">95%</div>
            <div className="stat-divider"></div>
            <p>Success Rate</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="about-cta" data-aos="fade-up">
          <button className="btn-primary">Meet Our Specialists</button>
          <Link to="/book-appointment">
            <button className="btn-secondary">Book Appointment</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;