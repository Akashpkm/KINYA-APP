// src/components/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sales@kinya.in';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919789041308';
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="company-info">
            <div className="footer-brand">
              <h3 className="footer-logo">Kinya Medical Systems</h3>
              <div className="footer-badge">Trusted Since 2015</div>
            </div>
            <p className="company-description">
              Providing quality healthcare solutions for over 10 years. Trusted by medical professionals nationwide with cutting-edge medical equipment and exceptional service.
            </p>
            <div className="social-icons">
              <a 
                href="https://www.facebook.com/kinyamed/" 
                aria-label="Facebook" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://youtube.com/@kinyamedicals7828?si=KAHt47NJlJ7dyUQJ" 
                aria-label="Youtube" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-brands fa-youtube"></i>
              </a>
              <a 
                href="https://www.instagram.com/kinyamedicalsystems/" 
                aria-label="Instagram" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://in.linkedin.com/company/kinya-medical-systems-&-solution" 
                aria-label="LinkedIn" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><button onClick={() => handleNavigation('/')} className="footer-link">Home</button></li>
            <li><button onClick={() => handleNavigation('/products')} className="footer-link">Products</button></li>
            <li><button onClick={() => handleNavigation('/video')} className="footer-link">Video Gallery</button></li>
            <li><button onClick={() => handleNavigation('/certification')} className="footer-link">Certifications</button></li>
            <li><button onClick={() => handleNavigation('/about')} className="footer-link">About Us</button></li>
            <li><button onClick={() => handleNavigation('/contact')} className="footer-link">Contact Us</button></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Our Products</h4>
          <ul className="footer-links">
            <li><button onClick={() => handleNavigation('/products')} className="footer-link">Posterior Vitrectomy and Phaco Emulsification</button></li>
            <li><button onClick={() => handleNavigation('/products')} className="footer-link">Diagnostic A/B/P Scan</button></li>
            <li><button onClick={() => handleNavigation('/products')} className="footer-link">Sterilizer & Autoclave</button></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Contact Information</h4>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <i className="fas fa-map-marker-alt contact-icon"></i>
              </div>
              <span className="contact-text">
                No 46 Ranga Rice Mill, Rani Anna Nagar,<br />
                Somanathapuram, Guduvancheri,<br />
                Tamil Nadu, India - 603202
              </span>
            </div>
            <div className="contact-item clickable" onClick={handlePhoneClick}>
              <div className="contact-icon-wrapper">
                <i className="fas fa-phone contact-icon"></i>
              </div>
              <span className="contact-text">+91 9789041308</span>
            </div>
            <div className="contact-item clickable" onClick={handleEmailClick}>
              <div className="contact-icon-wrapper">
                <i className="fas fa-envelope contact-icon"></i>
              </div>
              <span className="contact-text">sales@kinya.in</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <i className="fas fa-clock contact-icon"></i>
              </div>
              <div className="contact-text">
                <div>Mon - Fri: 8:00 AM – 8:00 PM</div>
                <div>Sat - Sun: 8:00 AM – 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <p className="copyright">&copy; 2025 Kinya Medical Systems & Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <button className="legal-link">Privacy Policy</button>
            <span className="legal-separator">|</span>
            <button className="legal-link">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;