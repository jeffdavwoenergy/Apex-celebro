import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CTABand from './CTABand';
import { services } from './ServicesData';

const Banner = ({ eyebrow, title, sub }) => (
  <section className="relative bg-ink overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div className="absolute -top-40 right-1/4 w-[700px] h-[700px] rounded-full bg-brand-600/20 blur-[140px] pointer-events-none"></div>
    <div className="absolute inset-0 opacity-[0.10] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)', backgroundSize: '42px 42px' }}></div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
        <span className="text-white/85 text-[11px] font-semibold tracking-[0.22em] uppercase">{eyebrow}</span>
      </div>
      <h1 className="font-display font-bold text-white text-4xl lg:text-6xl leading-tight max-w-4xl mx-auto">{title}</h1>
      <p className="text-white/65 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">{sub}</p>
    </div>
  </section>
);

const ServicesPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <Banner
        eyebrow="Our Services"
        title="Six ways we take work off your team's plate."
        sub="From single-workflow fixes to org-wide AI pipelines — each service is built around your tools, your data, and the bottleneck that's costing you the most."
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => navigate(`/services/${s.id}`)}
                  className="group text-left bg-white rounded-[24px] border border-black/8 overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(30,72,255,0.12)] transition-all duration-300"
                  data-testid={`service-card-${s.id}`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"></div>
                    <div className={`absolute -bottom-6 left-6 w-14 h-14 rounded-2xl ${s.tile} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="p-7 pt-10">
                    <h3 className="font-display font-bold text-xl text-ink mb-3 group-hover:text-brand-600 transition-colors">{s.title}</h3>
                    <p className="text-ink/65 leading-relaxed mb-5">{s.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-brand-600 font-bold text-sm group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={15} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default ServicesPage;
