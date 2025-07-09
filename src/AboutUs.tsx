import React from "react";
import "./AboutUs.css";
import bgImage from "../src/assets/gallery/image6.jpg"; // Add your own image here

const AboutUs: React.FC = () => {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="about-overlay">
        <div className="about-content">
          <h2 className="about-title">About One Look</h2>
          <p className="about-subtitle">Moments Captured. Memories Crafted.</p>
          <p className="about-description">
            With over a decade of experience, One Look Photography transforms ordinary
            moments into extraordinary stories. Our team blends creativity, technology,
            and passion to deliver timeless imagery. Every smile, glance, and detail
            deserves to be immortalized with perfection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
