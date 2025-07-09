import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="video-hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      >
        <source
          src="https://res.cloudinary.com/dul4of1bo/video/upload/q_auto:best,f_auto/v1752066337/They_knew_it_.._Nature_time_and_distance_nothing_could_separate_them_%EF%B8%8F_it_was_Real_one_ubhcmg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay-content">
        <h1 className="brand-title">One Look Photography</h1>
        <p className="tagline">Capturing Moments. Creating Memories</p>
      </div>
    </div>
  );
};

export default Home;
