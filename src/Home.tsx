import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="video-hero">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay-content">
        <h1 className="brand-title">One Look Photography</h1>
         <p className="tagline">Capturing Moments. Creating Memories.</p>
        {/* <button className="cta-button">Explore Gallery</button> */}
      </div>
    </div>
  );
};

export default Home;
