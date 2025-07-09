import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Title */}
        <h2 className="footer-logo">One Look Photography</h2>

        {/* Links */}
        <div className="footer-links">
          <a href="https://m-sai-charan.github.io/olp-deploy/#/enquiry-form" target="_blank" rel="noreferrer">Contact Form</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} One Look Photography. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
