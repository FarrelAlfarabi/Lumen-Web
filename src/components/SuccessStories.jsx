import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';
import { TrendingUp, Quote } from 'lucide-react';

const SuccessStories = () => {
  const { headline, description, testimonial } = LUMENIFY_DATA.successStories;

  return (
    <section id="success-stories" className="py-32 px-6 border-b border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {headline}
            </h2>
            <div className="w-16 h-1 bg-[#C1FF00] mb-8"></div>
            <p className="text-xl text-[#888888] leading-relaxed">
              {description}
            </p>
          </div>

          <div className="bg-[#161616] border border-[#222222] p-8 relative">
            <Quote className="w-12 h-12 text-[#C1FF00] mb-6 opacity-50" />
            <p className="text-2xl text-white leading-relaxed italic mb-6">
              {testimonial}
            </p>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#222222]">
              <div className="w-12 h-12 bg-[#C1FF00] rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#0A0A0A]" />
              </div>
              <div>
                <p className="text-white font-bold">6x ROAS Increase</p>
                <p className="text-[#888888] text-sm">In 3 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
