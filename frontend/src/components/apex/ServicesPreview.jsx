import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { services } from './ServicesData';

const ServicesPreview = () => {
  const navigate = useNavigate();
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold tracking-[0.18em] text-xs uppercase">What we build</span>
            <h2 className="font-display font-bold text-ink text-4xl lg:text-5xl mt-4 leading-tight">
              Automation for every corner of your operation.
            </h2>
          </div>
          <button onClick={() => navigate('/services')} className="inline-flex items-center gap-2 text-ink font-bold hover:text-brand-600 transition-colors group whitespace-nowrap">
            View all services <ArrowRight size={18} className="text-brand-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => navigate(`/services/${s.id}`)}
                className="group text-left bg-white rounded-[24px] border border-black/8 p-8 hover:border-brand-300 hover:shadow-[0_20px_50px_rgba(30,72,255,0.10)] hover:-translate-y-1 transition-all duration-300"
                data-testid={`service-card-${s.id}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${s.tile} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={30} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-3 flex items-center gap-2 group-hover:text-brand-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-ink/65 leading-relaxed mb-5">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-600 font-bold text-sm group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={15} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
