// src/pages/Hemorrhoids.jsx
import React from "react";
import "./ServicePage.scss";
import hemorrhoidsImg from "../assets/hemorrhoids.webp";
import bannerImg from "../assets/hemorrhoids-banner.jpg"; // Add a wide banner image
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Hemorrhoids = () => {
  return (
    <div className="service-page">
      {/* Banner Section */}
      <header
        className="service-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Piles / Hemorrhoids</h1>
            <p>
              Advanced, painless laser treatment for hemorrhoids (piles) offering
              faster recovery, minimal bleeding, and a return to normal life within days.
              Get permanent relief with world-class proctology care.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="service-content container">
        <div className="text-box">
          <h2>Understanding Piles (Hemorrhoids)</h2>
          <p>
            Piles, also known as hemorrhoids, are swollen and inflamed veins
            in the lower rectum and anus. They may develop inside the rectum
            (internal hemorrhoids) or under the skin around the anus (external hemorrhoids).
            This condition is very common and often results from straining during bowel movements,
            chronic constipation, or prolonged sitting.
          </p>

          <h3>🔹 Common Symptoms:</h3>
          <ul className="styled-list">
            <li>Bleeding during or after bowel movements</li>
            <li>Itching, discomfort, or pain around the anal area</li>
            <li>Swelling or lump near the anus</li>
            <li>Mucus discharge or irritation</li>
          </ul>

          <h3>💡 Causes of Hemorrhoids:</h3>
          <ul className="styled-list">
            <li>Chronic constipation or diarrhea</li>
            <li>Prolonged sitting or straining on the toilet</li>
            <li>Low-fiber diet</li>
            <li>Obesity and sedentary lifestyle</li>
            <li>Pregnancy and childbirth</li>
          </ul>

          <h3>✨ Laser Treatment for Piles</h3>
          <p>
            Laser treatment for hemorrhoids is a modern, minimally invasive
            procedure that seals the affected veins without cutting or stitching.
            It provides faster healing, minimal pain, and almost no risk of infection.
          </p>

          <ul className="styled-list">
            <li>✔️ Painless and bloodless procedure</li>
            <li>✔️ No cuts, stitches, or open wounds</li>
            <li>✔️ Day-care surgery — discharge on the same day</li>
            <li>✔️ Quick recovery and early return to work</li>
            <li>✔️ Negligible recurrence rate</li>
          </ul>

          <div className="cta-box">
            <h3>Consult Our Piles Specialists Today!</h3>
            <p>
              Don’t suffer in silence — our expert proctologists can help you
              get permanent relief through advanced laser procedures.
            </p>
            <Link to="/book-appointment" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Side Image */}
        <div className="image-box">
          <img src={hemorrhoidsImg} alt="Piles Hemorrhoids Treatment" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="extra-info container">
        <h2>Why Choose Crimson Clinics?</h2>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <h4>Experienced Proctologists</h4>
            <p>
              Our specialists use advanced laser techniques to ensure safe and effective treatment.
            </p>
          </div>
          <div className="info-card">
            <i className="fas fa-heartbeat"></i>
            <h4>Minimally Invasive Approach</h4>
            <p>
              Laser surgery ensures minimal pain, quick recovery, and same-day discharge.
            </p>
          </div>
          <div className="info-card">
            <i className="fas fa-hospital"></i>
            <h4>Modern Facilities</h4>
            <p>
              Equipped with cutting-edge medical infrastructure for patient comfort and safety.
            </p>
          </div>
          <div className="info-card">
            <i className="fas fa-thumbs-up"></i>
            <h4>High Success Rate</h4>
            <p>
              Thousands of patients have trusted us for successful, pain-free recovery.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hemorrhoids;
