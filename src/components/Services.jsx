import React from 'react';
import { LUMENIFY_DATA } from '../data/lumenifyData';
import { TrendingUp, Users, Activity, ChevronRight, Target, BarChart3, ShoppingCart, FileText, Calendar, Search, Video } from 'lucide-react';

const Services = () => {
  const icons = { 
    'paid-ads': TrendingUp, 
    'content-plan': Users, 
    'additional-services': Activity 
  };

  const subServiceIcons = {
    'Social Media – Awareness / Traffic': Target,
    'Social Media – Conversions': BarChart3,
    'E-Commerce / Marketplace': ShoppingCart,
    'Content Brief': FileText,
    'Social Media Posting and Report': Calendar,
    'Search Engine Optimization (SEO)': Search,
    'Content Creation': Video
  };

  return (
    <section id="services" className="py-32 px-6 border-b border-[#222222] bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Services.</h2>
        
        <div className="space-y-12">
          {LUMENIFY_DATA.services.map((svc) => {
            const Icon = icons[svc.id];
            return (
              <div key={svc.id} className="bg-[#161616] border border-[#222222] p-8 hover:border-[#C1FF00] transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <Icon className="w-8 h-8 text-[#555555] group-hover:text-[#C1FF00] transition-colors" />
                  <span className="text-xs font-bold text-[#888888] uppercase tracking-widest">{svc.badge}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
                <p className="text-[#888888] mb-8 leading-relaxed">{svc.description}</p>
                
                {svc.subServices && (
                  <div className="space-y-6 mt-8 pt-8 border-t border-[#222222]">
                    {svc.subServices.map((subSvc, idx) => {
                      const SubIcon = subServiceIcons[subSvc.title];
                      return (
                        <div key={idx} className="bg-[#0A0A0A] border border-[#222222] p-6">
                          <div className="flex items-start gap-4 mb-4">
                            {SubIcon && <SubIcon className="w-5 h-5 text-[#C1FF00] shrink-0 mt-1" />}
                            <h4 className="text-lg font-bold text-white">{subSvc.title}</h4>
                          </div>
                          <p className="text-[#888888] leading-relaxed mb-4">{subSvc.description}</p>
                          {subSvc.kpi && (
                            <p className="text-sm text-[#C1FF00] mb-2">{subSvc.kpi}</p>
                          )}
                          {subSvc.tools && (
                            <p className="text-sm text-[#888888]">{subSvc.tools}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
