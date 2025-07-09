import React from "react";
import "./AboutUs.css";
import teamImage from "../src/assets/gallery/image7.jpg"; // Add your actual image here

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-image" style={{ backgroundImage: `url(${teamImage})` }}></div>

      <div className="about-content">
        <h2 className="about-title">About One Look</h2>
        <p className="about-subtitle">Moments Captured. Memories Crafted.</p>
        <p className="about-description">
          With over a decade of experience, One Look Photography transforms ordinary moments
          into extraordinary stories. Our team blends creativity, technology, and passion
          to deliver timeless imagery. We believe every smile, every glance, and every detail
          deserves to be immortalized with perfection.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
