// Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Slider from "react-slick";

import heroImage from "../assets/doctors.jpg";
import doctorsTeamImage from "../assets/doctors-team.jpg";
import hospitalImage from "../assets/hospital.jpg";
import laserImage from "../assets/laser.jpg";
import surgery from "../assets/surgery.jpg";
import ward from "../assets/ward.jpg";
import operatingTheatre from "../assets/operating-theatre.jpeg";
import waitingRoom from "../assets/waiting-room.jpg";
import nurse from "../assets/nurse.jpg";
import icu from "../assets/icu.jpg";
import Pharmacy from "../assets/pharmacy.jpg";
import lab from "../assets/lab.jpg";
import ambulance from "../assets/ambulance.jpg";
import cafeteria from "../assets/cafeteria.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Slider settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="home-page">
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up">
          <h1>
            Advanced <span>Piles & Fissure</span> Treatments
          </h1>
          <p>
            Premium healthcare with the latest technology, compassionate doctors,
            and painless procedures. Trusted by 10,000+ patients.
          </p>
          <div className="hero-buttons">
            <Link to="/book-appointment">
              <button className="btn-primary">Book Appointment</button>
            </Link>
            <button className="btn-secondary">Watch Video</button>
          </div>
          <div className="trust-badges">
            <span>⭐ 20+ Years Expertise</span>
            <span>🏥 NABH Certified</span>
            <span>❤️ 10,000+ Success Stories</span>
          </div>
        </div>
        <div className="hero-image" data-aos="zoom-in">
          <img src={heroImage} alt="Doctors" />
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="why-us" data-aos="fade-up">
        <h2>Why Choose Crimsoncare?</h2>
        <div className="why-grid">
          <div className="why-card">
            <i className="fas fa-stethoscope"></i>
            <h3>Expert Doctors</h3>
            <p>Highly experienced specialists for piles, fissures, and fistula.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-heartbeat"></i>
            <h3>Cutting-edge Tech</h3>
            <p>Advanced laser & minimally invasive procedures.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-user-shield"></i>
            <h3>Safe & Hygienic</h3>
            <p>100% infection control & patient-first approach.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-clock"></i>
            <h3>24/7 Support</h3>
            <p>Round-the-clock emergency & helpline service.</p>
          </div>
        </div>
      </section>

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
    <div className="service-card">
      <img src={hospitalImage} alt="Consultation" />
      <h3>Expert Consultation</h3>
      <p>Specialized doctors for accurate diagnosis & guidance.</p>
    </div>
    <div className="service-card">
      <img src={Pharmacy} alt="Pharmacy" />
      <h3>In-House Pharmacy</h3>
      <p>Get all medicines & essentials within our hospital.</p>
    </div>
    <div className="service-card">
      <img src={icu} alt="ICU Care" />
      <h3>ICU & Recovery</h3>
      <p>World-class critical care with experienced staff.</p>
    </div>
    <div className="service-card">
  <img src={lab} alt="Diagnostics" />
  <h3>Diagnostics & Lab</h3>
  <p>On-site laboratory for quick and accurate results.</p>
</div>
<div className="service-card">
  <img src={ambulance} alt="Ambulance Service" />
  <h3>Ambulance Service</h3>
  <p>24/7 ambulance support for emergency transport.</p>
</div>
  </div>
</div>

{/* ---------- GALLERY PREVIEW ---------- */}
<div className="gallery-preview" data-aos="fade-up">
  <h2>Our Facilities</h2>
  <div className="gallery-grid">
    <img src={operatingTheatre} alt="Operating Theatre" />
    <img src={waitingRoom} alt="Waiting Room" />
    <img src={nurse} alt="Nurse" />
    <img src={hospitalImage} alt="Reception" />
    <img src={surgery} alt="ICU" />
    <img src={doctorsTeamImage} alt="Pharmacy" />
    <img src={ward} alt="Wards" />
    <img src={laserImage} alt="Diagnostics" />
    {/* New additions */}
    <img src={ambulance} alt="Ambulance" />
    <img src={cafeteria} alt="Cafeteria" />
  </div>
</div>


<section className="achievements" data-aos="fade-up">
  <h2>Our Achievements</h2>
  <div className="achievements-grid">
    <div className="achievement-card blue">
      <i className="fas fa-user-md"></i>
      <h3>10K+</h3>
      <p>Patients Treated</p>
    </div>
    <div className="achievement-card green">
      <i className="fas fa-calendar-check"></i>
      <h3>20+</h3>
      <p>Years of Experience</p>
    </div>
    <div className="achievement-card orange">
      <i className="fas fa-users"></i>
      <h3>50+</h3>
      <p>Expert Staff</p>
    </div>
    <div className="achievement-card pink">
      <i className="fas fa-heart"></i>
      <h3>100%</h3>
      <p>Patient Satisfaction</p>
    </div>
  </div>
</section>



      {/* ---------- TESTIMONIALS (SLIDER) ---------- */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Patients Say</h2>
        <Slider {...testimonialSettings} className="testimonial-slider">
          <div className="testimonial-card pink">
            <p>"The surgery was painless and recovery was fast!"</p>
            <h4>- Rajesh K.</h4>
          </div>
          <div className="testimonial-card blue">
            <p>"Very hygienic hospital with kind staff. Felt safe throughout."</p>
            <h4>- Meena S.</h4>
          </div>
          <div className="testimonial-card green">
            <p>"Highly recommend! The laser treatment was smooth and effective."</p>
            <h4>- Arun M.</h4>
          </div>
          <div className="testimonial-card purple">
            <p>"Doctors here truly care about patients. I felt very comfortable."</p>
            <h4>- Sandeep R.</h4>
          </div>
        </Slider>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta" data-aos="fade-up">
        <h2>Book Your Consultation Today</h2>
        <p>Get premium care with expert doctors and world-class facilities.</p>
        <Link to="/book-appointment">
          <button className="btn-primary">Book Now</button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
