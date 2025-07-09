import React, { useEffect  } from "react";
import "./Gallery.css";

const images = [
  require("../src/assets/gallery/image1.jpg"),
  require("../src/assets/gallery/image1.jpg"),
  require("../src/assets/gallery/image3.jpg"),
  require("../src/assets/gallery/image4.jpg"),
  require("../src/assets/gallery/image5.jpg"),
  require("../src/assets/gallery/image6.jpg"),
  require("../src/assets/gallery/image7.jpg"),
  require("../src/assets/gallery/image1.jpg"),
  require("../src/assets/gallery/image3.jpg"),
  require("../src/assets/gallery/image4.jpg"),
  require("../src/assets/gallery/image5.jpg"),
  require("../src/assets/gallery/image7.jpg"),

];

const Gallery: React.FC = () => {
  useEffect(() => {
    if (!CSS.supports("animation-timeline: view()")) {
      const handleScroll = () => {
        document.body.style.setProperty(
          "--scroll",
          `${window.pageYOffset / (document.body.offsetHeight - window.innerHeight)}`
        );
      };
      window.addEventListener("scroll", handleScroll, false);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="gallery-curve">
    <h2 className="gallery-heading">Our Gallery</h2>
      <ul className="curved-grid">
        {images.map((img, i) => (
          <li key={i}>
            <img src={img} alt={`gallery-${i}`} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
