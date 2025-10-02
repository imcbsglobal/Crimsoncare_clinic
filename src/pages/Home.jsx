// Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Slider from "react-slick";

// slick styles (required for react-slick dots/arrows)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import doctorsTeamImage from "../assets/doctors-team.jpg";
import hospitalImage from "../assets/banner1.jpg";
import laserImage from "../assets/laser.jpg";
import surgery from "../assets/surgery.jpg";
import ward from "../assets/ward.jpg";
import operatingTheatre from "../assets/banner2.jpg";
import waitingRoom from "../assets/banner3.jpg";
import nurse from "../assets/nurse.jpg";
import icu from "../assets/icu.jpg";
import Pharmacy from "../assets/pharmacy.jpg";
import lab from "../assets/lab.jpg";
import ambulance from "../assets/ambulance1.jpeg";
import cafeteria from "../assets/cafeteria.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ---------- HERO (SLIDER) ----------
  const heroImages = [hospitalImage, operatingTheatre, waitingRoom];

  const heroSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // ---------- WHY-US-TWO (SLIDER) ----------
  const why2Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  // ---------- TESTIMONIALS (SLIDER) ----------
  const testimonialSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
  };

  return (
    <div className="home-page">
      {/* ---------- HERO ---------- */}
      <section className="hero hero--slider">
        <Slider {...heroSettings} className="hero-slick">
          {heroImages.map((src, i) => (
            <div key={i} className="hero-slide">
              <img src={src} alt={`Banner ${i + 1}`} className="hero-bg" />
              <div className="hero-overlay" />
              <div className="hero-content" data-aos="fade-up">
                <div className="hero-inner">
                  <h1 className="hero-title">
                    Advanced <span className="highlight">Proctology &amp; Surgical</span>
                    <br />
                    Care
                  </h1>

                  <p className="hero-description">
                    Specialized treatment for Piles,
                    Fissures, Fistulas, Pilonidal Sinus, Hidradenitis, and Varicose Veins, along
                    with comprehensive General and Laparoscopic Surgery.
                  </p>

                  <div className="trust-badges">
                    <span className="badge">⭐ Associated with NABH Certified Hospital</span>
                    <span className="badge">📋 15+ Years of Expertise</span>
                    <span className="badge">❤️ Premium Healthcare Team</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ---------- WHY CHOOSE US (Existing) ---------- */}
     <section className="why-us" data-aos="fade-up">
  <h2>Why Choose Crimsoncare?</h2>
  <div className="why-grid">
    <div className="why-card">
      <i className="fas fa-stethoscope"></i>
      <h3>Expert Doctors</h3>
      <p> 
        Highly experienced specialists in Piles, Fissures, Fistulas, Pilonidal Sinus.
      </p>
    </div>
    <div className="why-card">
      <i className="fas fa-heartbeat"></i>
      <h3>Cutting-edge Technology</h3>
      <p>Advanced laser and minimally invasive procedures.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-user-shield"></i>
      <h3>Safe &amp; Hygienic</h3>
      <p>100% infection control with a patient-first approach.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-clock"></i>
      <h3>Minimally Invasive Procedures</h3>
      <p>Faster recovery and less discomfort.</p>
    </div>

    {/* New Points */}
    <div className="why-card">
      <i className="fas fa-smile"></i>
      <h3>Very Less Pain</h3>
      <p>Gentle techniques ensure minimal discomfort during treatment.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-tint"></i>
      <h3>Minimum Bleeding</h3>
      <p>Precise, advanced methods reduce blood loss significantly.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-briefcase"></i>
      <h3>Easy Return to Work</h3>
      <p>Quick recovery helps you get back to routine faster.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-hospital-user"></i>
      <h3>Day Care Procedure</h3>
      <p>Same-day discharge without overnight hospital stay.</p>
    </div>
  </div>
</section>


      {/* ---------- WHY CHOOSE US (NEW – SLIDER) ---------- */}
      <section className="why-us-two" data-aos="fade-up">
        <h2>Advanced Treatment for Common Diseases</h2>
        <Slider {...why2Settings} className="why2-slider">
          <div className="why2-card">
            <i className="fas fa-hand-holding-medical"></i>
            <h3>Piles (Hemorrhoids)</h3>
            <p>
              Swollen blood vessels in the rectum or anus causing pain, bleeding, itching, and discomfort, especially during bowel movements. Early treatment and lifestyle changes can help prevent complications.
            </p>
          </div>
          <div className="why2-card">
            <i className="fas fa-rupee-sign"></i>
            <h3>Fissures</h3>
            <p>Small tears in the lining of the anus leading to severe pain, burning sensation, and occasional bleeding during bowel movements. Quick medical care ensures faster healing and relief.</p>
          </div>
          <div className="why2-card">
            <i className="fas fa-hospital-user"></i>
            <h3>Fistula</h3>
            <p>Abnormal connections between the anal canal and the skin around the anus, often resulting in discharge, pain, and recurrent infections. Surgical treatment is usually required for a permanent cure.</p>
          </div>
          <div className="why2-card">
            <i className="fas fa-headset"></i>
            <h3>Pilonidal Sinus</h3>
            <p>A small hole or tunnel in the skin, usually near the tailbone, which can fill with pus or hair, leading to pain and swelling. Early treatment prevents repeated infections.</p>
          </div>
          <div className="why2-card">
            <i className="fas fa-headset"></i>
            <h3>Hidradenitis Suppurativa</h3>
            <p>A chronic skin condition marked by painful lumps, abscesses, or pus-filled nodules in areas like armpits or groin, caused by blocked sweat glands. Needs long-term management.</p>
          </div>
          <div className="why2-card">
            <i className="fas fa-headset"></i>
            <h3>Varicose Veins</h3>
            <p> Enlarged, twisted veins — most often in the legs — leading to heaviness, swelling, and aching. Advanced treatments can provide relief and improve appearance.</p>
          </div>
        </Slider>
      </section>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <div className="services-preview" data-aos="fade-up">
        <h2>Our Key Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={laserImage} alt="Laser Surgery" />
            <h3>Laser Proctology</h3>
            <p>
             Advanced laser treatment for piles, fissures, fistulas Pilonidal Sinus.
            </p>
          </div>
          <div className="service-card">
            <img src={surgery} alt="General & Laparoscopic Surgeries" />
            <h3>General & Laparoscopic Surgeries</h3>
            <p>Safe and minimally invasive surgical solutions.</p>
          </div>
          <div className="service-card">
            <img src={waitingRoom} alt="Laser Treatment for Hidradenitis" />
            <h3>Laser Treatment for Hidradenitis</h3>
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
            <img src={icu} alt="Circumcision" />
            <h3>Circumcision</h3>
            <p>Safe procedures for medical and personal needs.</p>
          </div>
          <div className="service-card">
            <img src={lab} alt="Lump Excision" />
            <h3>Lump Excision</h3>
            <p>Removal of abnormal growths with expert precision.</p>
          </div>
          <div className="service-card">
            <img src={ambulance} alt="Diabetic Foot & Varicose Ulcer Care" />
            <h3>Diabetic Foot &amp; Varicose Ulcer Care</h3>
            <p>Specialized wound care and healing support.</p>
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
            <p>Skilled doctors, nurses, and paramedical staff</p>
          </div>
        </div>
      </section>

      {/* ---------- OUR VALUES & AWARDS ---------- */}
      <section className="values-awards" data-aos="fade-up">
        <h2>Our Values &amp; Awards</h2>
        <div className="values-awards-grid">
          <div className="card">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Compassion</h3>
            <p>Caring for every patient with empathy and respect.</p>
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
            <h3>Clean &amp; Hygienic Premises</h3>
            <p>Maintained with strict hygiene and sanitization.</p>
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
