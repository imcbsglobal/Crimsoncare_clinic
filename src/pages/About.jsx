import React from "react";
import "./About.scss";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import bannerBg from "../assets/about-banner.jpg";

const About = () => {
  return (
    <>
      {/* --------------  FULL-WIDTH BANNER  -------------- */}
      <section
        className="about-hero-banner"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="hero-content" data-aos="fade-up">
          <div className="pre-title">Excellence in Proctology Care</div>
          <h1>About Crimson Health care</h1>
          <p>
            Crimson Health care having its operations in the district of Calicut is functional near Medical College, Calicut.
            Located at the centre of the The centre aims to provide the quality of life of the patients through
            advanced laser treatment and other minimally invasive procedures which cause very less pain and bleed.
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
            <strong>Crimson Health care </strong>having its operations in the district of Calicut is functional near Medical College, Calicut.
            Located at the centre of the The centre aims to provide the quality of life of the patients through
            advanced laser treatment and other minimally invasive procedures which cause very less pain and bleed.
            Unlike other clinics, Crimson Health care serves as a second opinion centre for all proctology anr colorectal diseases.
            The highly experienced team of doctors, nurses and other paramedical professionals provide exceptional care, counselling and followup for enhancing better and quality life.
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

        {/* Why Patient Trust Us Card */}
        <div className="trust-card-wrapper" data-aos="fade-up">
          <div className="trust-card">
            <div className="trust-card-icon">🤝</div>
            <h2>Why Patients Trust Us</h2>
            <div className="trust-card-divider"></div>
            <ul className="trust-features">
              <li>
                <span className="icon">✓</span>
                <span>Patient centered approach</span>
              </li>
              <li>
                <span className="icon">✓</span>
                <span>Regular followup over phone</span>
              </li>
              <li>
                <span className="icon">✓</span>
                <span>Queries answered by experts over phone</span>
              </li>
              <li>
                <span className="icon">✓</span>
                <span>Availability of multidisciplinary team whenever needed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission / Vision / Trust Cards */}
        <div className="about-cards" data-aos="fade-up">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <div className="card-divider"></div>
            <p>
              To provide hassle free treatment for all the needy with proper guidance and support.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <div className="card-divider"></div>
            <p>
              To establish as centre for excellence in minimally invasive and laser surgeries with patient centered approach
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🤝</div>
            <h3>Why Patients Trust Us</h3>
            <div className="card-divider"></div>
            <ul>
              <li>15+ Years Experience</li>
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
            <div className="stat-number">15+</div>
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