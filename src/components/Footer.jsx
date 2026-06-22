import React, { useState } from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';
import { MapPin, Mail, Instagram, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { name, email, instagram, website, office } = LUMENIFY_DATA.company;
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    budget: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('business', formData.business);
      formDataToSend.append('budget', formData.budget);

      const response = await fetch('https://formspree.io/f/mgojevko', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', business: '', budget: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="py-32 px-6 bg-[#0A0A0A] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* CTA Text Column */}
          <div>
            <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">
              Stop guessing.<br/>Start scaling.
            </h2>
            <p className="text-[#888888] text-xl mb-8">
              Book a strategy call to discuss how we can engineer a predictable revenue engine for your brand.
            </p>
          </div>

          {/* Lead Capture Form */}
          <div className="bg-[#161616] border border-[#222222] p-8">
            {status === 'success' && (
              <div className="bg-green-900 text-white p-4 mb-6 rounded">
                Thank you! We'll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-900 text-white p-4 mb-6 rounded">
                Something went wrong. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0A0A0A] border border-[#222222] p-4 text-white focus:outline-none focus:border-[#C1FF00] transition-colors"
              />
              <input
                type="text"
                name="business"
                placeholder="Business URL / Instagram / Email"
                value={formData.business}
                onChange={handleChange}
                required
                className="w-full bg-[#0A0A0A] border border-[#222222] p-4 text-white focus:outline-none focus:border-[#C1FF00] transition-colors"
              />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-[#0A0A0A] border border-[#222222] p-4 text-[#888888] focus:outline-none focus:border-[#C1FF00] transition-colors appearance-none"
              >
                <option value="">Monthly Ad Budget</option>
                <option value="Under Rp 10M">Under Rp 10M</option>
                <option value="Rp 10M - 50M">Rp 10M - 50M</option>
                <option value="Over Rp 50M">Over Rp 50M</option>
              </select>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C1FF00] text-[#0A0A0A] font-bold p-4 hover:bg-white transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Request Consultation'} <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-[#222222] gap-8">
          <div className="text-white font-black text-xl tracking-tight">
            {name}<span className="text-[#C1FF00]">.</span>
          </div>
          <div className="flex flex-wrap gap-8 text-[#888888] text-sm font-medium">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {office}</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> {email}</span>
            <span className="flex items-center gap-2"><Instagram className="w-4 h-4" /> {instagram}</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> {website}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
