import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import backgroundVideo from "./images/vi.mp4";

function Home() {
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const testimonialsTrackRef = useRef(null);
  const [theme, setTheme] = useState('light');

  
const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };


  // Auto-scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Testimonials data with actual images
  const testimonialsData = [
    {
      name: 'Dr Deventra Venkatramani',
      role: 'VR SURGEON',
      hospital: 'Laxmi Eye Institute, Panvel',
      text: 'An excellent value-for-money machine. Comparable to all others in its class And great service support too!',
      avatar:'./DOCTOR/Deventra Venkatramani.jpg' ,
      rating: 5
    },
    {
      name: 'Dr.Venkatesh Ambarkar',
      role: 'VR SURGEON',
      hospital: 'Prathan Eye Hospital, Solapur.',
      text: ' I am thrilled to share that I ve been using the HOPE Posterior Vitrectomy machine since February 2023. making me one of its earliest adopters. It s been my go-to equipment for over 250 procedures, from routine. cases to some really challenging vitrectomies. I am genuinely impressed with how reliable and effective it s been love working with it!',
      avatar: './DOCTOR/Venkatesh Ambarkar.png',
      rating: 5
    },
    {
      name: 'Dr. Sriram Gopal',
      role: 'VR SURGEON',
      hospital: ' Athreya Eye Hospital, Trichy',
      text: 'I ve been part of the HOPE Vitrectomy journey since its inception and performing its debut surgery It s exhilarating to see its remarkable progress. My recent experience with the 25G ALCON cutter was truly impressive, during a combined procedure involving phaco and TRD surgery. What stood out to me was the cutters exceptional precision and the seamless fluid management, which made the entire process incredibly smooth.',
      avatar: './DOCTOR/Sriram.png',
      rating: 5
    },
    {
      name: 'Dr.Abhishek Kothari',
      role: 'VR SURGEON',
      hospital: 'Pink City Eye Hospital, Jaipur',
      text: 'We have been using thr Kinya HOPE platform since its very inception, till its latest iteration and very happy with its performance and reliability. The constant improvements in the interface and the fluidics indicates the ongoing commitment of the companys engineering team to respond to user feedback. It is now a great product capable of use in a wide variety of surgical situations. The versatility to use consumables from multiple vendors also makes the system very attractive. We highly recommend the platform for anyone looking to buy a posterior segment surgical platform.',
     avatar: './DOCTOR/Abhishek Kothari.jpg',
      rating: 5
    },
    {
      name: 'Dr. Anand Bhosle',
      role: 'VR SURGEON',
      hospital: 'Aster Hospital,Kholapur',
      text: 'I tested the HOPE Vitrectomy from Kinya Medical System across three cases. The 16,000-cut speed was flawless, and globe stability at 600mmHg vacuum was excellent. I suggest trying a demo first.',
      avatar: './DOCTOR/Anand Bhosle.jpeg',
      rating: 5
    },
  ];

  // Detect theme change from navbar
  useEffect(() => {
    const detectTheme = () => {
      const body = document.body;
      if (body.classList.contains('dark-theme')) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    detectTheme();

    const observer = new MutationObserver(detectTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Improved Testimonials auto-scroll with seamless loop
  useEffect(() => {
    if (testimonialsTrackRef.current) {
      const track = testimonialsTrackRef.current;
      const container = testimonialsRef.current;
      
      // Duplicate testimonials for seamless loop
      const testimonials = Array.from(track.children);
      testimonials.forEach(testimonial => {
        const clone = testimonial.cloneNode(true);
        track.appendChild(clone);
      });

      const scrollTestimonials = () => {
        if (container) {
          const scrollLeft = container.scrollLeft;
          const scrollWidth = track.scrollWidth / 2; // Since we duplicated
          
          if (scrollLeft >= scrollWidth) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 1;
          }
        }
      };

      const scrollInterval = setInterval(scrollTestimonials, 30); // Faster speed
      return () => clearInterval(scrollInterval);
    }
  }, []);

  // Fixed WhatsApp button handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "918056805837"; // Your WhatsApp number
    const message = "Hello! I'm interested in Kinya Medical products and services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Stats counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat) => {
              const target = parseInt(stat.getAttribute('data-target'));
              const duration = 2000;
              const steps = 60;
              const stepValue = target / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                  stat.textContent = target;
                  clearInterval(timer);
                } else {
                  stat.textContent = Math.floor(current);
                }
              }, duration / steps);
            });
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`home ${theme}-theme`} id="home">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>Trusted Healthcare Solutions</span>
              </div>
              <h1 className="hero-title">
                 <span className="title-line accent">KINYA</span>
                <span className="title-line">Key Innovation in</span>
                <span className="title-line">Your Access</span>
              </h1>
              <p className="hero-subtitle">
                Providing Cutting-Edge Medical Equipment, and Devices
                to Hospitals across India and Overseas with Excellence and Reliability.
              </p>
              <div className="hero-buttons">
                <a onClick={() => handleNavigation('/products')}  className="btn btn-primary">
                  <span>Explore Products</span>
                  <i className="k fas fa-arrow-right"></i>
                </a>
                <a href="tel:+91 80568 05837" className="btn btn-secondary">
                  <span>Call Now</span>
                  <i className="k fas fa-phone"></i>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">24+</span>
                  <span className="stat-label">Years of Experties</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Healthcare Partners</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3000+</span>
                  <span className="stat-label">No of Surgeries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to Explore</div>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Kinya Medical Systems ?</h2>
            <p className="section-subtitle">
              Excellence in Healthcare Delivery through Innovation, Quality and Dedicated Support
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: 'fas fa-award',
                title: 'Quality Certified',
                description: 'All Products meet International Quality Standards with Proper Certifications and Compliance.',
                color: '#4CAF50'
              },
              {
                icon: 'fas fa-truck-fast',
                title: 'Nationwide Coverage',
                description: 'Efficient Distributor Partner Network Ensuring Timely Delivery and Support all regions across India.',
                color: '#2196F3'
              },
              {
                icon: 'fas fa-user-md',
                title: 'Expert Support',
                description: 'Certified Medical Professionals Providing Technical Support and Comprehensive Training.',
                color: '#FF9800'
              },
              {
                icon: 'fas fa-headset',
                title: '24/7 Service',
                description: 'Round-the-clock customer Support for Emergencies and Urgent Equipment Needs.',
                color: '#9C27B0'
              },
              {
                icon: 'fas fa-shield-heart',
                title: 'Patient Safety',
                description: 'Equipment designed with Predictablity and Patient Safety as top Priorities.',
                color: '#E91E63'
              },
              {
                icon: 'fas fa-handshake',
                title: 'Partnership',
                description: 'Long-term partnerships with Surgeons for continuous improvement.',
                color: '#673AB7'
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ color: feature.color }}>
                  <i className={`${feature.icon} fa-3x`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-hover" style={{ background: feature.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '24', label: 'Years of Experties', suffix: '+' },
              { number: '250', label: 'Healthcare Partners', suffix: '+' },
              { number: '170', label: 'Products Delivered', suffix: '+' },
              { number: '3000', label: 'No of surgeries', suffix: '+' }
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-content">
                  <div className="stat-number" data-target={stat.number}>
                    0
                  </div>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
                <div className="stat-bar">
                  <div className="stat-progress"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Healthcare Professionals</h2>
            <p className="section-subtitle">What our partners say about our services and support</p>
          </div>
          <div className="testimonials-container" ref={testimonialsRef}>
            <div className="testimonials-track" ref={testimonialsTrackRef}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p>{testimonial.text}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <span>{testimonial.hospital}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Enhance Your Healthcare Services?</h2>
            <p>Contact us today for a personalized consultation and discover how our solutions can transform your medical practice.</p>
            <div className="cta-buttons">
              <a href="tel:80568058370" className="btn btn-light">
                <span>Call Now</span>
                <i className="k fas fa-phone"></i>
              </a>
              <a onClick={() => handleNavigation('/contact')} className="btn btn-outline-light">
                <span>Contact Us</span>
                <i className="k fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button 
        className="whatsapp-float"
        onClick={handleWhatsAppClick}
        aria-label="Chat with us on WhatsApp"
      >
        <div className="whatsapp-icon">
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="whatsapp-tooltip">
          Chat with us on WhatsApp!
        </div>
        <div className="pulse-animation"></div>
      </button>
    </div>
  );
}


export default Home;