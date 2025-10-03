import React from 'react';
import './Certification.css';

function Certification() {
  const certifications = [
    {
      id: 1,
      title: "ISO 13485:2016 Certified",
      description: "Quality Management System for Medical Devices",
      issuer: "International Organization for Standardization",
      date: "2023",
      image: "/CERTIFICATE/certificate 1.jpeg"
    },
    {
      id: 2,
      title: "CE Mark Certification",
      description: "Medical Device Directive 93/42/EEC",
      issuer: "European Commission",
      date: "2023",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "FDA Registered",
      description: "US Food and Drug Administration",
      issuer: "U.S. Department of Health",
      date: "2023",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      title: "Rwanda FDA Approved",
      description: "Medical Device Regulation Compliance",
      issuer: "Rwanda Food and Drugs Authority",
      date: "2023",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="certification-page">
      {/* Simplified Hero Section */}
      <section className="certification-hero">
        <div className="container">
          <h1>Certifications & Compliance</h1>
          <p>Demonstrating our commitment to quality and regulatory excellence</p>
        </div>
      </section>

      {/* Clean Content Section */}
      <section className="certification-content">
        <div className="container">
          <div className="certification-grid">
            {certifications.map((cert) => (
              <article key={cert.id} className="certification-card">
                <div className="certification-image">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="certification-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certification;