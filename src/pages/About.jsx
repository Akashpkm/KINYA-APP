// src/pages/About.jsx
import React, { useEffect, useRef } from 'react';
import './About.css';
import img from '/ABOUT/GROUP.jpeg'

function About() {
  const teamMembers = [
  {
    id: 1,
    name: 'Dr. James Kariuki',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: '15+ years of experience in medical equipment procurement and healthcare management.',
    email: 'james.kariuki@kinyamedical.com',
    linkedin: 'https://linkedin.com/in/jameskariuki',
    twitter: 'https://twitter.com/jameskariuki'
  },
    {
      id: 2,
    name: 'Dr. James Kariuki',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: '15+ years of experience in medical equipment procurement and healthcare management.',
    email: 'james.kariuki@kinyamedical.com',
    linkedin: 'https://linkedin.com/in/jameskariuki',
    twitter: 'https://twitter.com/jameskariuki'
    },
    {
      id: 3,
    name: 'Dr. James Kariuki',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: '15+ years of experience in medical equipment procurement and healthcare management.',
    email: 'james.kariuki@kinyamedical.com',
    linkedin: 'https://linkedin.com/in/jameskariuki',
    twitter: 'https://twitter.com/jameskariuki'
    },
    {
     id: 4,
    name: 'Dr. James Kariuki',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    bio: '15+ years of experience in medical equipment procurement and healthcare management.',
    email: 'james.kariuki@kinyamedical.com',
    linkedin: 'https://linkedin.com/in/jameskariuki',
    twitter: 'https://twitter.com/jameskariuki'
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
              <p>At Kinya Medical, our mission is to Enhance Healthcare Delivery across Kinya by providing High-quality Medical Equipment and Support Services to Healthcare facilities of all sizes.</p>
              <p>We believe that every Kinya deserves access to Reliable Medical Care, and we work tirelessly to ensure that Healthcare Providers have the Tools and Resources they need to Deliver Exceptional Patient Care.</p>
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
                contact: 'Mr Tibertius Kiran Kumar Fernando',
                phone: '+91 8056805837',
                alternatePhone: ' +91 9789041308',
                email: 'sales@kinya.in'
              },
              { 
                title: 'DELHI OFFICE', 
                address: 'Innotech Genesis pvt ltd House no 5 sec 12 vasundhara ghaziabad up -201012',
                contact: 'Mr Mohapatra',
                phone: '+91 8882117448',
                alternatePhone: '+91 63232 323233',
                email: 'sales@innotechgenesis.com'
              },
              { 
                title: 'BANGALORE OFFICE', 
                address: 'SRI KANI #724, SRI KANISHKA,11TH BLOCK, BSK 6TH STAGE,BDA LAYOUT, BEHIND ARVIND TATA MOTORS,KENGERI POST,BENGALURU - 560060.KARNATAKA',
                contact: 'Mr Ashokana',
                phone: '+91 9880264118',
                alternatePhone: '+91 7795255782',
                email: ' ashokana81@gmail.com'
              },
              { 
                title: 'MUMBAI OFFICE', 
                address: 'Kim, Mumbai, India',
                contact: 'Mr. Saravanan',
                phone: '63232323232',
                alternatePhone: '+91 63232 323233',
                email: 'mohapatra@kinyamedical.com'
              },
               { 
                title: 'HYDERABAD OFFICE', 
                address: 'Plot No:46, Ganesh Nagar, West Marredpally, Secunderabad-500026',
                contact: 'Mr. Srinivas Rao',
                phone: '+91 9505018225',
                alternatePhone: '040-35849129',
                email: 'mohapatra@kinyamedical.com'
              }
            ].map((office, index) => (
              <div key={index} className="office-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3>{office.title}</h3>
                <p>{office.address}</p>
                <div className="contact-info">
                  <strong style={{color:'green'}}>Contact : {office.contact}</strong>
                  <strong>PhoneNo : <span>{office.phone}</span></strong>
                  <strong>Alter No : <span>{office.alternatePhone}</span></strong>
                  <strong style={{color:'deepskyblue'}}>Email : <span>{office.email}</span></strong>
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