import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';

const About = () => {
  const { headline, p1, p2 } = LUMENIFY_DATA.about;
  const { headline: foundersHeadline, content: foundersContent } = LUMENIFY_DATA.foundersStory;
  const { headline: teamsHeadline, content: teamsContent } = LUMENIFY_DATA.teams;

  return (
    <section id="about" className="py-32 px-6 border-b border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {headline}
            </h2>
            <div className="w-16 h-1 bg-[#C1FF00] mb-8"></div>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl text-[#888888] leading-relaxed">
              {p1}
            </p>
            <p className="text-xl text-white leading-relaxed border-l-2 border-[#C1FF00] pl-6">
              {p2}
            </p>
          </div>
        </div>

        {/* Founders Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {foundersHeadline}
            </h2>
            <div className="w-16 h-1 bg-[#C1FF00] mb-8"></div>
          </div>
          
          <div>
            <p className="text-xl text-white leading-relaxed">
              {foundersContent}
            </p>
          </div>
        </div>

        {/* Teams Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {teamsHeadline}
            </h2>
            <div className="w-16 h-1 bg-[#C1FF00] mb-8"></div>
          </div>
          
          <div>
            <p className="text-xl text-white leading-relaxed">
              {teamsContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
