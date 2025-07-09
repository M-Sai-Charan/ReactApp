import React from "react";
import { motion } from "framer-motion";
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
          <motion.div
            className="service-card"
            key={index}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
