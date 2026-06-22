import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';

const Hero = () => {
  const { kicker, h1a, h1b, h1c, subcopy, stat1, stat2, stat3 } = LUMENIFY_DATA.hero;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Kicker */}
        <p className="text-[#C1FF00] text-sm font-bold uppercase tracking-widest mb-8">
          {kicker}
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tight">
          {h1a}<br />
          <span className="text-[#888888]">{h1b}</span><br />
          {h1c}
        </h1>

        {/* Subcopy */}
        <p className="text-xl md:text-2xl text-[#888888] max-w-3xl mb-16 leading-relaxed">
          {subcopy}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#222222]">
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#C1FF00] mb-2">{stat1.val}</div>
            <div className="text-sm text-[#888888] uppercase tracking-wider">{stat1.label}</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#C1FF00] mb-2">{stat2.val}</div>
            <div className="text-sm text-[#888888] uppercase tracking-wider">{stat2.label}</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#C1FF00] mb-2">{stat3.val}</div>
            <div className="text-sm text-[#888888] uppercase tracking-wider">{stat3.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
