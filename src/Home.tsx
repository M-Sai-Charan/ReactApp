import React, { useEffect, useState } from "react";
import "./Home.css";

import img1 from "../src/assets/gallery/image3.jpg";
import img2 from "../src/assets/gallery/image4.jpg";
import img3 from "../src/assets/gallery/image6.jpg";

const images = [img1, img2, img3];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
<div className="multi-image-hero">
      <div className="hero-image " style={{ backgroundImage: `url(${img1})` }} />
      <div className="hero-image" style={{ backgroundImage: `url(${img2})` }} />
      <div className="hero-image " style={{ backgroundImage: `url(${img3})` }} />
      
      <div className="hero-overlay-content">
        <h1 className="brand-title">One Look Photography</h1>
        <p className="tagline">Every Frame a Story</p>
        {/* <button className="cta-button">Explore Gallery</button> */}
      </div>
    </div>
  );
};

export default Home;
