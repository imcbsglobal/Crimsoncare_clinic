import React from "react";
import "./Services.scss";
import laserImage from "../assets/laser.jpg";
import fissureImage from "../assets/fissure.jpg";
import fistulaImage from "../assets/fistula.jpg"; 
import generalImage from "../assets/general.jpeg"; 
import surgeryImage from "../assets/surgery.jpg";
import emergencyImage from "../assets/emergency.jpg";
const Services = () => {
  const services = [
    [laserImage, "Laser Piles Treatment", "Quick, painless, and scar-free surgery with minimal downtime."],
    [fissureImage, "Fissure Treatment", "Safe and effective relief with advanced medical procedures."],
    [fistulaImage, "Fistula Care", "Advanced techniques ensuring safe and permanent cure."],
    [generalImage, "General", "Comprehensive care for various surgical needs with expert doctors."],
    [surgeryImage,"Day Care Surgery", "Advanced daycare procedures for faster recovery and minimal hospital stay."],
    [emergencyImage, "24/7 Emergency Care", "Immediate medical support for urgent and critical conditions."]
  ];

  return (
    <section id="services" className="services">
      <div className="services-header" data-aos="fade-down">
        <h2>Our Specialized Treatments</h2>
        <p>
          At <strong>PilesCare Hospital</strong>, we provide world-class treatment options
          using the latest technologies. From painless laser treatments to 24/7 emergency care,
          our services are designed to ensure comfort, safety, and quick recovery.
        </p>
      </div>

      <div className="service-cards">
        {services.map(([img, title, desc], i) => (
          <div className="card" data-aos="zoom-in" data-aos-delay={i * 100} key={i}>
            <div className="card-image">
              <img src={img} alt={title} />
            </div>
            <div className="card-content">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta" data-aos="fade-up">
        <h3>Need Help Choosing the Right Treatment?</h3>
        <p>Contact us today for a consultation and let our specialists guide you to the best care.</p>
        <button className="btn-primary">Book Your Appointment</button>
      </div>
    </section>
  );
};

export default Services;
