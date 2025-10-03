// src/pages/About.jsx
import React, { useEffect, useRef } from 'react';
import './About.css';
import img from './images/PHACO.png'

function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. James Kariuki',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      bio: '15+ years of experience in medical equipment procurement and healthcare management.'
    },
    {
      id: 2,
      name: 'Sarah Mwende',
      role: 'Pharmaceuticals Manager',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      bio: 'Expert in pharmaceutical supply chain with a focus on quality assurance.'
    },
    {
      id: 3,
      name: 'Michael Otieno',
      role: 'Technical Support Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      bio: 'Certified biomedical engineer with expertise in medical equipment maintenance.'
    },
    {
      id: 4,
      name: 'Grace Wanjiku',
      role: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      bio: 'Dedicated to ensuring client satisfaction and building long-term partnerships.'
    }
  ];

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" ref={addToRefs}>
        <div className="container">
          <h1 className="slide-up">About Kinya Medical Systems</h1>
          <p className="slide-up delay-1">Your trusted partner in healthcare solutions for over 15 years</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission" ref={addToRefs}>
        <div className="container">
          <div className="mission-content">
            <div className="mission-text fade-in-left">
              <h2>Our Mission</h2>
              <p>At Kinya Medical, our mission is to enhance healthcare delivery across Kenya by providing high-quality medical equipment, pharmaceuticals, and support services to healthcare facilities of all sizes.</p>
              <p>We believe that every Kenyan deserves access to reliable medical care, and we work tirelessly to ensure that healthcare providers have the tools and resources they need to deliver exceptional patient care.</p>
            </div>
            <div className="mission-image fade-in-right">
              <img src={img} alt="Medical team" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values" ref={addToRefs}>
        <div className="container">
          <h2 className="fade-in">Our Values</h2>
          <div className="values-grid">
            {[
              { icon: 'fas fa-hand-holding-heart', title: 'Compassion', text: 'We care deeply about the patients who ultimately benefit from our products and services.' },
              { icon: 'fas fa-award', title: 'Excellence', text: 'We strive for the highest standards in everything we do, from product selection to customer service.' },
              { icon: 'fas fa-shield-alt', title: 'Integrity', text: 'We conduct our business with honesty, transparency, and ethical practices.' },
              { icon: 'fas fa-users', title: 'Partnership', text: 'We view our clients as partners and work collaboratively to achieve their healthcare goals.' }
            ].map((value, index) => (
              <div key={index} className="value-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="offices" ref={addToRefs}>
        <div className="container">
          <h2 className="fade-in">Our Offices</h2>
          <div className="offices-grid">
            {[
              { 
                title: 'OFFICE & MANUFACTURING', 
                address: 'No 46 Ranga Rice Mill, Rani Anna Nagar, Somanathapuram, Guduvancheri, Tamil Nadu, India',
                contact: 'Mr Mohapatra',
                phone: '63232323232'
              },
              { 
                title: 'DELHI OFFICE', 
                address: 'Intotech Genesis, Delhi, India',
                contact: 'Mr Mohapatra',
                phone: '63232323232'
              },
              { 
                title: 'BANGALORE OFFICE', 
                address: 'Sri Kani, Bangalore, India',
                contact: 'Mr Asholcan',
                phone: '63232323232'
              },
              { 
                title: 'MUMBAI OFFICE', 
                address: 'Kim, Mumbai, India',
                contact: 'Mr. Saravanan',
                phone: '63232323232'
              },
               { 
                title: 'HYDERABAD OFFICE', 
                address: 'Kim, Mumbai, India',
                contact: 'Mr. Saravanan',
                phone: '63232323232'
              }
            ].map((office, index) => (
              <div key={index} className="office-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3>{office.title}</h3>
                <p>{office.address}</p>
                <div className="contact-info">
                  <strong>Contact: {office.contact}</strong>
                  <span>{office.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" ref={addToRefs}>
        <div className="container">
          <h2 className="fade-in">Our Leadership Team</h2>
          <p className="team-subtitle fade-in delay-1">Meet the dedicated professionals who drive our mission forward</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-card fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" ref={addToRefs}>
        <div className="container">
          <h2 className="slide-up">Ready to Partner With Us?</h2>
          <p className="slide-up delay-1">Join hundreds of healthcare providers across Kenya who trust Kinya Medical for their equipment and pharmaceutical needs.</p>
          <a href="#contact" className="btn btn-light slide-up delay-2">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}

export default About;