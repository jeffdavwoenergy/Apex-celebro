import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    eyebrow: 'AI Workflow Automation',
    title: 'Stop drowning in documents, emails, and calls.',
    accent: 'We build autonomous AI workflows.',
    sub: 'We deploy custom AI agents that handle your high-volume document processing, customer communications, and data intake—so your team can focus on actual growth.',
    image: 'https://images.unsplash.com/photo-1618544976420-1f213fcf2052?auto=format&fit=crop&q=80&w=2200',
  },
  {
    eyebrow: 'Connect Everything',
    title: 'Connect every app.',
    accent: 'Kill the busywork.',
    sub: 'End-to-end automation with Make, Zapier and n8n — wiring your entire stack together so the repetitive work simply runs itself.',
    image: 'https://images.unsplash.com/photo-1517181875630-f72350452109?auto=format&fit=crop&q=80&w=2200',
  },
  {
    eyebrow: 'Always On',
    title: 'AI that reads, replies, and routes.',
    accent: 'Working 24/7.',
    sub: 'Custom AI agents and document intelligence built around your operation — answering, extracting and routing the moment work arrives.',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=2200',
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const n = slides.length;

  const next = useCallback(() => setI((p) => (p + 1) % n), [n]);
  const prev = () => setI((p) => (p - 1 + n) % n);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="bg-white px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3 lg:pt-4" data-testid="hero-section">
      <div className="relative overflow-hidden rounded-[26px] sm:rounded-[36px] lg:rounded-[44px] bg-ink min-h-[92vh]">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[900ms] ${idx === i ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            {/* Blue brand wash + darkening for legibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/75 to-brand-800/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40"></div>
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '42px 42px' }}
            ></div>

            <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-24 ${idx === i ? 'animate-fade-up' : ''}`}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                <span className="text-white/85 text-[11px] font-semibold tracking-[0.22em] uppercase">{s.eyebrow}</span>
              </div>
              <h1 className="font-display font-bold text-white leading-[1.03] tracking-tight text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4.4rem]" data-testid="hero-headline">
                {s.title}
                <span className="block text-brand-300 mt-3">{s.accent}</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/70 mt-8 mb-10 leading-relaxed max-w-2xl mx-auto">{s.sub}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-3 bg-brand-600 text-white rounded-full pl-8 pr-2 py-2 font-bold text-base shadow-[0_10px_34px_rgba(30,72,255,0.5)] hover:bg-brand-700 transition-all duration-300"
                  data-testid="hero-book-btn"
                >
                  Book a Call
                  <span className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={19} />
                  </span>
                </button>
                <button onClick={() => navigate('/services')} className="rounded-full border border-white/30 text-white px-7 py-3.5 font-semibold text-[15px] hover:bg-white/10 transition-colors">
                  Explore services
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button onClick={prev} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Previous">
          <ChevronLeft size={22} />
        </button>
        <button onClick={next} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Next">
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === i ? 'w-8 bg-brand-400' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
