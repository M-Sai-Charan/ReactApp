import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarav & Meera",
    text: "One Look Photography captured our wedding like a fairytale. Every emotion, every detail, perfectly preserved!",
    photo: require("../src/assets/gallery/image1.jpg"),
  },
  {
    name: "Neha Sharma",
    text: "The team was incredibly professional and warm. The candid shots they clicked are my favorite memories!",
    photo: require("../src/assets/gallery/image2.jpg"),
  },
  {
    name: "Rahul & Pooja",
    text: "From the pre-wedding shoot to the reception — flawless execution. Highly recommended!",
    photo: require("../src/assets/gallery/image3.jpg"),
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, i) => (
          <div className="testimonial-card fade-in" key={i}>
            <img src={item.photo} alt={item.name} className="client-photo" />
            <p className="feedback">“{item.text}”</p>
            <p className="client-name">— {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
