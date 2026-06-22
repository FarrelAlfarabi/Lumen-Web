import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';

const Methodology = () => {
  const { badge, headline, steps } = LUMENIFY_DATA.methodology;

  return (
    <section id="methodology" className="py-32 px-6 border-b border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Header Column */}
        <div>
          <span className="inline-block px-3 py-1 bg-[#C1FF00]/10 text-[#C1FF00] text-xs font-bold uppercase tracking-widest mb-6">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {headline}
          </h2>
        </div>

        {/* Steps Column */}
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 border-l border-[#222222]">
              {/* Lime Step Indicator */}
              <div className="absolute top-0 left-[-5px] w-2 h-2 bg-[#C1FF00] rounded-full"></div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[#888888] leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
