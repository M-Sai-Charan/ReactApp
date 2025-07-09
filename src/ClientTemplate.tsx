import React from "react";
import "./ClientTemplate.css";
import sample1 from "../src/assets/gallery/image1.jpg";
import sample2 from "../src/assets/gallery/image2.jpg";

const ClientTemplate: React.FC = () => {
  return (
    <section className="client-template">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="names">Aarav ❤️ Meera</h1>
        <p className="subtext">You're invited to witness their special journey</p>
      </div>

      {/* About Us */}
      <div className="about-us">
        <h2>About the Couple</h2>
        <p>
          Aarav and Meera met under starlit skies and found love in laughter, music, and shared dreams.
          Join them as they embark on this magical journey of togetherness.
        </p>
      </div>

      {/* Sample Gallery */}
      <div className="gallery-scroll">
        <img src={sample1} alt="sample1" />
        <img src={sample2} alt="sample2" />
        <img src={sample1} alt="sample3" />
        <img src={sample2} alt="sample4" />
      </div>

      {/* Event Details */}
      <div className="event-cards">
        <div className="event-card">
          <h3>📅 Wedding</h3>
          <p>Date: 15 Aug 2025</p>
          <p>Venue: Taj Falaknuma Palace</p>
        </div>
        <div className="event-card">
          <h3>💃 Sangeet</h3>
          <p>Date: 14 Aug 2025</p>
          <p>Dress Code: Ethnic Glam</p>
        </div>
        <div className="event-card">
          <h3>🍽️ Reception</h3>
          <p>Date: 16 Aug 2025</p>
          <p>Theme: Black & Gold</p>
        </div>
      </div>

      {/* Cost Summary */}
      <div className="invoice-summary">
        <h2>Total Cost: ₹1,75,000</h2>
        <span className="badge paid">₹1,00,000 Paid</span>
        <span className="badge due">₹75,000 Due</span>
      </div>

      {/* Terms & Expiry */}
      <div className="terms">
        <p><strong>Note:</strong> This link will expire in 5 days.</p>
        <p>By confirming, you agree to One Look Photography’s terms and conditions.</p>
      </div>

      {/* Action Buttons */}
      <div className="actions">
        <button className="approve">Approve</button>
        <button className="reject">Reject</button>
      </div>
    </section>
  );
};

export default ClientTemplate;
