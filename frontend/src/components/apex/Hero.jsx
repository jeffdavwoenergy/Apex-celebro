import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onBook }) => {
  return (
    <section className="bg-[#F4F4F5] px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3 lg:pt-4" data-testid="hero-section">
      <div className="relative overflow-hidden rounded-[26px] sm:rounded-[36px] lg:rounded-[44px] bg-ink min-h-[92vh] flex items-center justify-center">
        {/* Depth glows (subtle, dark hero) */}
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-brand-600/25 blur-[130px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-24 w-[560px] h-[560px] rounded-full bg-brand-500/10 blur-[130px] pointer-events-none"></div>
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)', backgroundSize: '42px 42px' }}
        ></div>
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 pb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
            <span className="text-white/80 text-[11px] font-semibold tracking-[0.22em] uppercase">AI Workflow Automation</span>
          </div>

          <h1 className="font-display font-bold text-white leading-[1.03] tracking-tight text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[4.3rem]" data-testid="hero-headline">
            Stop drowning in documents, emails, and calls.
            <span className="block text-brand-400 mt-3">We build autonomous AI workflows.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mt-8 mb-10 leading-relaxed max-w-2xl mx-auto" data-testid="hero-subhead">
            Eliminate administrative drag. We deploy custom AI agents that handle your high-volume
            document processing, customer communications, and data intake—so your team can focus on actual growth.
          </p>

          <div className="flex justify-center">
            <button
              onClick={onBook}
              className="group flex items-center gap-3 bg-brand-600 text-white rounded-full pl-8 pr-2 py-2 font-bold text-base shadow-[0_10px_30px_rgba(79,70,229,0.45)] hover:bg-brand-700 transition-all duration-300"
              data-testid="hero-book-btn"
            >
              Book Your Consultation
              <span className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={19} />
              </span>
            </button>
          </div>

          <p className="mt-8 text-white/45 text-sm font-medium tracking-wide">
            Fixed-scope projects &middot; Results in weeks &middot; No jargon, just throughput
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
