import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white font-black text-2xl tracking-tight bg-transparent border-none cursor-pointer">
          Lumenify<span className="text-[#C1FF00]">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#888888] hover:text-white text-sm font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-block bg-[#C1FF00] text-[#0A0A0A] px-6 py-3 font-bold text-sm hover:bg-white transition-colors"
          >
            Discuss Project ↗
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#888888] hover:text-white focus:outline-none text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#222222] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-[#888888] hover:text-white text-base font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#C1FF00] text-[#0A0A0A] px-6 py-3 font-bold text-sm hover:bg-white transition-colors"
            >
              Discuss Project ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
