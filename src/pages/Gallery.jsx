import React, { useState } from "react";
import "./Gallery.scss";
import Footer from "../components/Footer";

import operatingTheatre from "../assets/operating-theatre.jpeg";
import laserEquipment from "../assets/laser-equipment.jpeg";
import patientRecovery from "../assets/patient-recovery.jpg";
import ward from "../assets/ward.jpg";
import consultation from "../assets/consultation.jpg";
import waitingRoom from "../assets/waiting-room.jpg";
import canteen from "../assets/canteen.jpeg";
import nurse from "../assets/nurse.jpg";
import ambulance from "../assets/ambulance.jpg";
import cafeteria from "../assets/cafeteria.jpg";
import galleryBanner from "../assets/gallery-banner.jpg";   // <-- NEW

const Gallery = () => {
  const images = [
    { src: operatingTheatre, caption: "Modern Operation Theater" },
    { src: laserEquipment, caption: "Advanced Laser Equipment" },
    { src: patientRecovery, caption: "Patient Recovery Room" },
    { src: ward, caption: "24/7 Emergency Ward" },
    { src: consultation, caption: "Specialized Consultation Room" },
    { src: waitingRoom, caption: "Spacious Waiting Area" },
    { src: canteen, caption: "Hygienic Canteen Facility" },
    { src: nurse, caption: "Friendly Nursing Staff" },
    { src: ambulance, caption: "Emergency Ambulance Service" },
    { src: cafeteria, caption: "Comfortable Cafeteria" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      {/* --- FULL-FIT BANNER --- */}
      <section className="hero-banner">
        <img src={galleryBanner} alt="PilesCare Hospital" className="hero-img" />
        <div className="hero-overlay">
          <h1>Caring Spaces at PilesCare Hospital</h1>
          <p>State-of-the-art facilities, compassionate care.</p>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="gallery-header" data-aos="fade-down">
          <h2>Our Hospital & Facilities</h2>
          <p>
            Take a glimpse into <strong>PilesCare Hospital</strong>. We maintain a
            world-class environment with state-of-the-art facilities to ensure
            patient comfort and safety.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((item, i) => (
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              key={i}
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.src} alt={item.caption} />
              <div className="caption">{item.caption}</div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" data-aos="zoom-in">
              <img src={selectedImage.src} alt={selectedImage.caption} />
              <p>{selectedImage.caption}</p>
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                ✖
              </button>
            </div>
          </div>
        )}

        <div className="gallery-cta" data-aos="fade-up">
          <h3>Visit Our Hospital</h3>
          <p>Experience our advanced care facilities and patient-friendly environment.</p>
          <button className="btn-primary">Book a Hospital Tour</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;