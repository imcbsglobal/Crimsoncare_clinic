// Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import heroImage from "../assets/doctors.jpg";  
import doctorsTeamImage from "../assets/doctors-team.jpg";  
import hospitalImage from "../assets/hospital.jpg";  
import laserImage from "../assets/laser.jpg";      
import surgery from "../assets/surgery.jpg";
import ward from "../assets/ward.jpg";
import operatingTheatre from "../assets/operating-theatre.jpeg";      
import waitingRoom from "../assets/waiting-room.jpg";
import nurse from "../assets/nurse.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="home-page">   {/* ✅ Wrapper added for full background */}

      {/* ---------- TOP BANNER ---------- */}
      <section className="top-banner">
        <div className="banner-overlay">
          <h1>Welcome to <span>Crimsoncare Clinics</span></h1>
        </div>
      </section>

      {/* ---------- HERO ---------- */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up">
            <h1>
              Compassionate Care for <span>Piles Treatment</span>
            </h1>
            <p>
              Your trusted partner for safe, advanced, and painless treatment of
              piles, fissures, and fistula. Get world-class care with a
              personalized approach.
            </p>
            <div className="hero-buttons">
              <Link to="/book-appointment">
                <button className="btn-primary">Book Appointment</button>
              </Link>
              <button className="btn-secondary">Call Now</button>
            </div>
            <div className="trust-badges">
              <span>✔ 10,000+ Patients Treated</span>
              <span>✔ 20+ Years Experience</span>
              <span>✔ 24/7 Emergency Care</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hero-image" data-aos="fade-left">
            <img src={heroImage} alt="Hospital Doctors" />
          </div>
        </div>
      </section>

      {/* ---------- MINI ABOUT ---------- */}
      <div className="mini-about">
        <div className="mini-text" data-aos="fade-right">
          <h2>Why Choose PilesCare Hospital?</h2>
          <p>
            At <strong>PilesCare Hospital</strong>, we combine expertise,
            compassion, and technology to deliver the best outcomes for our
            patients. From diagnosis to recovery, we are with you at every step.
          </p>
          <ul>
            <li>✅ Advanced Laser & Minimally Invasive Procedures</li>
            <li>✅ 100% Hygienic & Safe Environment</li>
            <li>✅ Highly Skilled & Experienced Surgeons</li>
            <li>✅ 24/7 Patient Support</li>
          </ul>
        </div>

        {/* MINI IMAGE */}
        <div className="mini-image" data-aos="fade-left">
          <img src={doctorsTeamImage} alt="Our Doctors" />
        </div>
      </div>

      {/* ---------- SMALL ABOUT ---------- */}
      <div className="small-about" data-aos="fade-up">
        <div className="about-content">
          <img src={hospitalImage} alt="Our Hospital" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              PilesCare Hospital is committed to delivering high-quality
              healthcare with modern facilities, expert doctors, and
              patient-centered care. Our mission is to provide safe,
              compassionate, and affordable treatment for all.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <div className="services-preview" data-aos="fade-up">
        <h2>Our Key Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={laserImage} alt="Laser Surgery" />
            <h3>Laser Surgery</h3>
            <p>Painless & advanced treatments for piles and fissures.</p>
          </div>
          <div className="service-card">
            <img src={surgery} alt="Laparoscopic Care" />
            <h3>Laparoscopic Care</h3>
            <p>Minimal invasive procedures with quick recovery.</p>
          </div>
          <div className="service-card">
            <img src={ward} alt="24/7 Emergency" />
            <h3>24/7 Emergency</h3>
            <p>Round-the-clock support for urgent medical needs.</p>
          </div>
        </div>
      </div>

      {/* ---------- GALLERY PREVIEW ---------- */}
      <div className="gallery-preview" data-aos="fade-up">
        <h2>Our Facilities</h2>
        <div className="gallery-grid">
          <img src={operatingTheatre} alt="Gallery 1" />
          <img src={waitingRoom} alt="Gallery 2" />
          <img src={nurse} alt="Gallery 3" />
        </div>
      </div>

      {/* ---------- TESTIMONIALS ---------- */}
      <div className="testimonials" data-aos="fade-up">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"The doctors here are very professional and caring. My surgery was painless and recovery was fast!"</p>
            <h4>- Rajesh K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"A very hygienic hospital with kind staff. I felt safe and well taken care of during my treatment."</p>
            <h4>- Meena S.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend PilesCare Hospital! The laser treatment was smooth and recovery was quick."</p>
            <h4>- Arun M.</h4>
          </div>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </div>
  );
};

export default Home;
