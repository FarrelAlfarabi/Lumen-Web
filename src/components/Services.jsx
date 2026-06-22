import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';
import { TrendingUp, Users, Activity, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const icons = { 
    'paid-ads': TrendingUp, 
    'content-plan': Users, 
    'accelerators': Activity 
  };

  return (
    <section id="services" className="py-32 px-6 border-b border-[#222222] bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Core Capabilities.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LUMENIFY_DATA.services.map((svc) => {
            const Icon = icons[svc.id];
            return (
              <div key={svc.id} className="bg-[#161616] border border-[#222222] p-8 hover:border-[#C1FF00] transition-colors group">
                <div className="flex justify-between items-start mb-12">
                  <Icon className="w-8 h-8 text-[#555555] group-hover:text-[#C1FF00] transition-colors" />
                  <span className="text-xs font-bold text-[#888888] uppercase tracking-widest">{svc.badge}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
                <p className="text-[#888888] mb-8 leading-relaxed text-sm">{svc.description}</p>
                
                <ul className="space-y-4">
                  {svc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#F0F0EE]">
                      <CheckCircle2 className="w-4 h-4 text-[#C1FF00] mr-3 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
