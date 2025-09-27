// Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Slider from "react-slick";

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
    {/* Main Heading */}
    <h1 className="hero-title">
      Advanced <span className="highlight">Proctology & Surgical Care</span>
    </h1>

    {/* Description */}
    <p className="hero-description">
      Specialized treatment for <strong>Piles</strong>, <strong>Fissures</strong>, <strong>Fistulas</strong>, 
      <strong>Pilonidal Sinus</strong>, <strong>Hidradenitis</strong>, and <strong>Varicose Veins</strong>, 
      along with comprehensive <strong>General</strong> and <strong>Laparoscopic Surgery</strong>.
    </p>


    {/* Badges / Highlights */}
    <div className="trust-badges">
      <span className="badge">🏥 NABH Certified Hospital</span>
      <span className="badge">⭐ 15+ Years of Expertise</span>
      <span className="badge">👨‍⚕️ Premium Healthcare Team</span>
    </div>
  </div>
</section>


      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="why-us" data-aos="fade-up">
        <h2>Why Choose Crimsoncare?</h2>
        <div className="why-grid">
          <div className="why-card">
            <i className="fas fa-stethoscope"></i>
            <h3>Expert Doctors</h3>
            <p>Highly experienced specialists in Piles, Fissures, Fistulas, Pilonidal Sinus, Hidradenitis, and Varicose Veins.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-heartbeat"></i>
            <h3>Cutting-edge Technology</h3>
            <p>Advanced laser and minimally invasive procedures.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-user-shield"></i>
            <h3>Safe & Hygienic</h3>
            <p>100% infection control & patient-first approach.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-clock"></i>
            <h3>Minimally Invasive Procedures</h3>
            <p>Faster recovery and less discomfort.</p>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <div className="services-preview" data-aos="fade-up">
        <h2>Our Key Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={laserImage} alt="Laser Surgery" />
            <h3>Laser Proctology</h3>
            <p>Advanced laser treatment for piles, fissures, fistulas Pilonidal Sinus, Hidradenitis, and Varicose Veins.</p>
          </div>
          <div className="service-card">
            <img src={surgery} alt="General & Laparoscopic Surgeries " />
            <h3>General & Laparoscopic Surgeries </h3>
            <p>Safe and minimally invasive surgical solutions.</p>
          </div>
          <div className="service-card">
            <img src={ward} alt="Laser Treatment for Hidradenitis " />
            <h3>Laser Treatment for Hidradenitis </h3>
            <p>Effective care for chronic skin infections.</p>
          </div>
          <div className="service-card">
            <img src={hospitalImage} alt="Anal Wart Removal" />
            <h3>Anal Wart Removal </h3>
            <p>Quick and precise removal with minimal discomfort.</p>
          </div>
          <div className="service-card">
            <img src={Pharmacy} alt="Varicose Veins Treatment" />
            <h3>Varicose Veins Treatment</h3>
            <p>Modern techniques for pain relief and vein health.</p>
          </div>
          <div className="service-card">
            <img src={icu} alt="Circumcision " />
            <h3>Circumcision </h3>
            <p>Safe procedures for medical and personal needs.</p>
          </div>
          <div className="service-card">
            <img src={lab} alt="Lump Excision<" />
            <h3>Lump Excision</h3>
            <p>Removal of abnormal growths with expert precision.</p>
          </div>
          <div className="service-card">
            <img src={ambulance} alt="Diabetic Foot & Varicose Ulcer Care" />
            <h3>Diabetic Foot & Varicose Ulcer Care</h3>
            <p>Specialized wound care and healing support.</p>
          </div>
        </div>
      </div>

    

      {/* ---------- ACHIEVEMENTS ---------- */}
      <section className="achievements" data-aos="fade-up">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card blue">
            <i className="fas fa-user-md"></i>
            <h3>15+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="achievement-card green">
            <i className="fas fa-calendar-check"></i>
            <h3>10K+</h3>
            <p>Patients Treated</p>
          </div>
          <div className="achievement-card orange">
            <i className="fas fa-users"></i>
            <h3>100%</h3>
            <p>Patient Satisfaction</p>
          </div>
          <div className="achievement-card pink">
            <i className="fas fa-heart"></i>
            <h3>Expert Team</h3>
            <p>Skilled doctors, nurses, and paramedical staff</p>
          </div>
        </div>
      </section>

      {/* ---------- OUR VALUES & AWARDS ---------- */}
      <section className="values-awards" data-aos="fade-up">
        <h2>Our Values & Awards</h2>
        <div className="values-awards-grid">
          <div className="card">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Compassion</h3>
            <p> Caring for every patient with empathy and respect.</p>
          </div>
          <div className="card">
            <i className="fas fa-certificate"></i>
            <h3>Excellence</h3>
            <p>Delivering top-quality healthcare with advanced technology.</p>
          </div>
          <div className="card">
            <i className="fas fa-users"></i>
            <h3>Integrity</h3>
            <p>Transparent and ethical medical practices.</p>
          </div>
          <div className="card">
            <i className="fas fa-trophy"></i>
            <h3>Clean & Hygienic Premises </h3>
            <p>Maintained with strict hygiene and sanitization for a safe and healthy environment.</p>
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
