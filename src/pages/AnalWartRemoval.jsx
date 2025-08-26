// src/pages/AnalWartRemoval.jsx
import React from "react";
import "./ServicePage.scss";
import analWartImg from "../assets/anal-wart.jpg"; // ✅ side image
import bannerImg from "../assets/anal-wart-banner.jpg"; // ✅ add a wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AnalWartRemoval = () => {
  return (
    <div className="service-page">
      {/* ✅ Banner Header */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Anal Wart Removal</h1>
            <p>
              Safe, precise, and minimally invasive treatments to remove anal warts,
              relieve discomfort, and reduce recurrence—performed by experienced
              proctology specialists.
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Main Content */}
      <section className="service-content container">
        <div className="text-box">
          <h2>What Are Anal Warts?</h2>
          <p>
            Anal warts (condyloma acuminata) are small growths caused by certain
            strains of the Human Papillomavirus (HPV). They can appear as single
            or multiple bumps around the anus and may cause itching, bleeding,
            discomfort while sitting, or hygiene difficulties. Early treatment
            prevents spread, growth, and recurrence.
          </p>

          <h3>Treatment Options We Offer</h3>
          <ul className="styled-list">
            <li><strong>Laser Ablation:</strong> Targets warts precisely with minimal bleeding and faster healing.</li>
            <li><strong>Electrocautery:</strong> Controlled removal using heat energy; effective for clustered lesions.</li>
            <li><strong>Cryotherapy:</strong> Freezing small lesions; quick and outpatient-friendly.</li>
            <li><strong>Excision:</strong> Surgical removal for large or resistant warts.</li>
            <li><strong>Topical Therapy (as advised):</strong> Adjunct creams for selected cases to reduce recurrence.</li>
          </ul>

          <h3>Why Choose Our Clinic?</h3>
          <ul className="styled-list">
            <li>✔️ Specialist-led procedures with stringent hygiene and privacy</li>
            <li>✔️ Minimally invasive techniques with quick recovery</li>
            <li>✔️ Comprehensive aftercare and recurrence-prevention guidance</li>
            <li>✔️ Discreet, respectful, and patient-centric environment</li>
          </ul>

          <h3>What to Expect</h3>
          <ul className="styled-list">
            <li><strong>Consultation &amp; Examination:</strong> Gentle assessment and tailored treatment plan.</li>
            <li><strong>Day-Care Procedure:</strong> Most treatments are outpatient; anesthesia as required.</li>
            <li><strong>Recovery:</strong> Typically back to routine within 24–72 hours depending on the method.</li>
            <li><strong>Follow-up:</strong> Scheduled reviews to monitor healing and reduce recurrence.</li>
          </ul>

          <div className="cta-box">
            <h3>Book a Confidential Consultation</h3>
            <p>
              Don’t let discomfort affect your daily life. Our proctology team provides
              safe, effective, and discreet care tailored to you.
            </p>
            <Link to="/book-appointment" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* ✅ Side Image */}
        <div className="image-box">
          <img src={analWartImg} alt="Anal Wart Removal" />
        </div>
      </section>

      {/* ✅ Extra Info */}
      <section className="extra-info container">
        <h2>FAQs</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-shield-alt"></i>
            <h4>Is the procedure painful?</h4>
            <p>
              We use local or short anesthesia as needed. Most patients report mild
              post-procedure discomfort that settles quickly.
            </p>
          </div>
          <div className="info-card">
            <i className="fas fa-redo-alt"></i>
            <h4>Can warts come back?</h4>
            <p>
              Recurrence can occur with HPV. We combine precise removal with guidance
              on aftercare and prevention to reduce risks.
            </p>
          </div>
          <div className="info-card">
            <i className="fas fa-user-lock"></i>
            <h4>Privacy &amp; Confidentiality</h4>
            <p>
              Your privacy is paramount. All consultations and treatments are conducted
              with utmost discretion.
            </p>
          </div>
          <div className="info-card">
            <i className="fas fa-clipboard-check"></i>
            <h4>Aftercare Tips</h4>
            <p>
              Simple hygiene, sitz baths as advised, and short activity restrictions
              help ensure smooth healing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalWartRemoval;
