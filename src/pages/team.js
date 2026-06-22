// src/pages/Team.jsx
import React from 'react';
import '../App.css';
import { LUMENIFY_DATA } from '../data/lumenifyData';
import Contact from '../components/Contact';

export default function Team() {
  const handleImageError = (e) => {
    // Hide the image if it fails to load (prevents alt text from appearing inside the circle)
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Meet</p>
            <h1 className="hero-name">
              Our Team
              <div className="name-underline"></div>
            </h1>
            <h2 className="hero-title">
              Strategists, Creatives, and Analysts<br />
              behind your growth
            </h2>
            <p className="hero-description">
              We are a cross-disciplinary team—combining creativity, paid media execution,
              and performance analytics to deliver measurable results.
            </p>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-wrapper">
                <img
                  src="/logo-square.jpg"
                  alt=""
                  className="profile-image"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">Team</p>
            <h3 className="section-title">People who ship results</h3>
            <p className="services-description">
              Every member brings unique expertise to ensure holistic strategies and maximum ROI.
            </p>
          </div>

          <div className="services-grid">
            {LUMENIFY_DATA.team.map((m) => (
              <div className="service-card" key={m.name}>
                <div className="image-container" style={{ marginBottom: 16 }}>
                  <img
                    src={m.image}
                    alt=""
                    className="profile-image"
                    style={{ objectFit: 'cover' }}
                    onError={handleImageError}
                  />
                </div>
                <h4 className="service-title">{m.name}</h4>
                <p className="service-description">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact">
        <div className="container">
          <div className="contact-header">
            <h3 className="section-title white">Work with us</h3>
            <p className="contact-description">
              Interested in collaborating? Let’s discuss how we can drive your growth.
            </p>
          </div>
          <Contact />

        </div>
      </section>
    </div>
  );
}
