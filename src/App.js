// src/App.js
import React from 'react';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import { Linkedin } from 'lucide-react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <div className="logo-icon"><span>L</span></div>
          <span className="logo-text">Portfolio</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <a href="/#about" className="nav-link">About</a>
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#contact" className="nav-link">Contact</a>
          <NavLink to="/team" className="nav-link">Our Team</NavLink>
        </nav>
        <div className="theme-toggle">
          <div className="theme-icon"></div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Lumenify. All rights reserved.</p>
        <a href="https://www.linkedin.com/company/lumenify" className="social-link" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="portfolio">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </div>
  );
}
