import React from 'react';
import { Github, Linkedin, Globe, Download, Mail, Monitor, Palette, Code } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-icon">
              <span>L</span>
            </div>
            <span className="logo-text">Portfolio</span>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="theme-toggle">
            <div className="theme-icon"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, We Are</p>
            <h1 className="hero-name">
              Lumenify
              <div className="name-underline"></div>
            </h1>
            <h2 className="hero-title">
              Social Media Agency based on<br />
              Jakarta, Indonesia
            </h2>
            <p className="hero-description">
              Lumenify.id adalah agensi digital marketing yang 
              berfokus pada Digital Marketing Services untuk membantu bisnis tumbuh secara terukur. 
              Kami memadukan kreativitas, analitik, dan teknologi untuk memberikan hasil yang nyata dari setiap anggaran iklan. 
              Dengan pendekatan yang data-driven, kami memastikan setiap impresi, klik, 
              dan konversi memberikan nilai optimal bagi klien kami dan juga bisnis Anda.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Reach Me
              </button>
              <button className="btn btn-secondary">
                <Download size={18} />
                <span>Download Portfolio</span>
              </button>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="#" className="social-link">
                <Github size={24} />
              </a>
              <a href="#" className="social-link">
                <Globe size={24} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="image-wrapper">
                <img 
                  src="/Screenshot 2025-07-16 213831.png" 
                  alt="Profile" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-content">
          <div className="about-image">
            <div className="about-illustration">
              <div className="illustration-content">
                <svg className="check-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="status-indicator"></div>
            </div>
          </div>
          <div className="about-text">
            <p className="section-label">About</p>
            <h3 className="section-title">
              Why hire us for your business?
            </h3>
            <p className="about-description">
            Lumenify.id didirikan oleh para praktisi digital yang berpengalaman di industri periklanan daring, e-commerce, dan analitik performa. Terinspirasi oleh pentingnya transformasi digital pada pelaku usaha dan bisnis di Indonesia, serta kurangnya transparansi dan efektivitas dalam layanan digital marketing konvensional, para pendiri Lumenify berkomitmen menghadirkan pendekatan yang lebih terukur, efisien, dan ROI-oriented.  
            </p>
            {/* <p className="about-description">
              I have a principle that is "stay simple and stay humble". I believe, simplicity holds a great deal of complexity and thoughtfulness. I see every project as a process of solving a problem. Now it's time to solve your problems in detail, in depth, and of course with simplicity.
            </p> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">Services</p>
            <h3 className="section-title">
              Menawarkan rangkaian layanan digital marketing yang difokuskan pada pendekatan berbasis performa.
            </h3>
            <p className="services-description">
              Tujuan utama kami adalah membantu klien meraih hasil terbaik dari investasi digital mereka, terutama melalui strategi iklan berbayar yang terukur dan konten yang relevan dengan audiens mereka.  
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon blue">
                <Monitor size={24} />
              </div>
              <h4 className="service-title">
                Paid / Ads Performance
              </h4>
              <p className="service-description">
                Good communication skills and experienced in various technologies
              </p>
              <ul className="service-list">
                <li>• React & Next.js Development</li>
                <li>• Modern JavaScript (ES6+)</li>
                <li>• Responsive Web Design</li>
                <li>• API Integration</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon purple">
                <Palette size={24} />
              </div>
              <h4 className="service-title">
                Social Media – Awareness / Traffic
              </h4>
              <p className="service-description">
                I look at every UI design problem as a problem that needs to be solved
              </p>
              <ul className="service-list">
                <li>• User Interface Design</li>
                <li>• User Experience Research</li>
                <li>• Prototyping & Wireframing</li>
                <li>• Design Systems</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon green">
                <Code size={24} />
              </div>
              <h4 className="service-title">
                E-Commerce / Marketplace
              </h4>
              <p className="service-description">
                Complete web solutions from frontend to backend implementation
              </p>
              <ul className="service-list">
                <li>• Database Design</li>
                <li>• Backend API Development</li>
                <li>• Cloud Deployment</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-header">
            <h3 className="section-title white">Let's work together</h3>
            <p className="contact-description">
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="contact-button-container">
            <button className="btn btn-primary">
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Lumenify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;