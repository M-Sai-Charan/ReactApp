import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Wedding Photography",
    description: "Capturing every emotion and detail on your big day with elegance and style.",
    icon: "💍",
  },
  {
    title: "Candid Shots",
    description: "Unscripted moments, spontaneous smiles, and real emotions beautifully framed.",
    icon: "📷",
  },
  {
    title: "Pre-Wedding",
    description: "Stylized, romantic sessions that tell your story before the big moment.",
    icon: "❤️",
  },
  {
    title: "Maternity",
    description: "Celebrating the beauty of motherhood with gentle and graceful photography.",
    icon: "🤰",
  },
  {
    title: "Baby Shoot",
    description: "Adorable memories captured during your little one's early days.",
    icon: "👶",
  },
  {
    title: "Event Coverage",
    description: "From corporate to cultural events, we’ve got every moment covered.",
    icon: "🎉",
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
