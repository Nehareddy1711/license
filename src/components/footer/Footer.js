import React from 'react';
import './Footer.css';
import { MdEmail, MdPhone } from 'react-icons/md'; // Import email and phone icons
import logo from '../../assests/logo.png'; // Import your logo for About Us section

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branches Section */}
        <div className="footer-section">
          <h4>Branches</h4>
          <ul className="branch-list">
            <li><strong>Hyderabad</strong><br /> 123 Business Street, Hitech City, Hyderabad, 500081.</li>
            <li><strong>Mumbai</strong><br /></li>
            <li><strong>Bangalore</strong><br /></li>
          </ul>
        </div>

        {/* Contact Us Section with icons */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><MdEmail className="footer-icon" /> Email: nagendra@example.com</p>
          <p><MdPhone className="footer-icon" /> Phone: +1 234 567 890</p>
        </div>

        {/* About Us Section with logo */}
        <div className="footer-section about-us">
          <h4> About Us </h4>
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>We are a leading platform offering business registration, billing software, websites, applications and job opportunities to help businesses thrive.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
