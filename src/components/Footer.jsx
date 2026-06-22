import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';
import { MapPin, Mail, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { name, email, instagram, office } = LUMENIFY_DATA.company;

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
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full bg-[#0A0A0A] border border-[#222222] p-4 text-white focus:outline-none focus:border-[#C1FF00] transition-colors" />
              <input type="text" placeholder="Business URL / Instagram" className="w-full bg-[#0A0A0A] border border-[#222222] p-4 text-white focus:outline-none focus:border-[#C1FF00] transition-colors" />
              <select className="w-full bg-[#0A0A0A] border border-[#222222] p-4 text-[#888888] focus:outline-none focus:border-[#C1FF00] transition-colors appearance-none">
                <option>Monthly Ad Budget</option>
                <option>Under Rp 10M</option>
                <option>Rp 10M - 50M</option>
                <option>Over Rp 50M</option>
              </select>
              <button className="w-full bg-[#C1FF00] text-[#0A0A0A] font-bold p-4 hover:bg-white transition-colors flex justify-center items-center gap-2">
                Request Consultation <ArrowUpRight className="w-4 h-4" />
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
