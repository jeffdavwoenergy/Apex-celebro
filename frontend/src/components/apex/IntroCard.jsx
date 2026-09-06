import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IntroCard = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F4F6FB] px-4 sm:px-6 py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="glossy-border relative rounded-[36px] max-w-5xl mx-auto">
          <div className="gloss-top relative rounded-[35px] bg-ink overflow-hidden px-8 py-14 lg:px-16 lg:py-20 text-center">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full bg-brand-600/25 blur-[130px] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Say hello to APEX CEREBRO.
                <span className="block text-brand-300 mt-2">Let&rsquo;s automate the busywork.</span>
              </h2>
              <p className="text-white/70 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
                Tell us where your team is stuck. We&rsquo;ll map it, scope it, and hand you a system that runs itself.
              </p>

              <div className="mt-10 flex flex-col items-center gap-6">
                <div>
                  <p className="text-white/45 text-sm font-semibold tracking-wide uppercase mb-1">Our direct line</p>
                  <a href="tel:+15550123456" className="font-display font-bold text-white text-2xl sm:text-3xl tracking-wide hover:text-brand-300 transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button onClick={() => navigate('/contact')} className="group flex items-center gap-3 bg-brand-600 text-white rounded-full pl-7 pr-2 py-2 font-bold text-[15px] hover:bg-brand-700 transition-all duration-300">
                    Book a Call
                    <span className="w-9 h-9 rounded-full bg-white text-ink flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5"><ArrowRight size={18} /></span>
                  </button>
                  <a href="tel:+15550123456" className="flex items-center gap-2.5 rounded-full bg-white/10 border border-white/25 text-white px-6 py-3.5 font-semibold text-[15px] hover:bg-white/20 transition-all duration-300">
                    <PhoneCall size={17} /> Call now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
