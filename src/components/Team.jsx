import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';

const Team = () => {
  return (
    <section id="team" className="py-32 px-6 border-b border-[#222222] bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">The Architecture Team.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LUMENIFY_DATA.team.map((member, i) => (
            <div key={i} className="group">
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-[#161616] mb-6 border border-[#222222]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-[#C1FF00] text-sm mt-1 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
