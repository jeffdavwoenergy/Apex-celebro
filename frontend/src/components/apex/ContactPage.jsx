import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import IntakeForm from './IntakeForm';

const ContactPage = () => {
  const location = useLocation();
  const initialPackage = location.state?.package || '';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white">
      <Navbar />

      <section className="relative bg-ink overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute -top-40 right-1/4 w-[700px] h-[700px] rounded-full bg-brand-600/20 blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.10] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)', backgroundSize: '42px 42px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
            <span className="text-white/85 text-[11px] font-semibold tracking-[0.22em] uppercase">Book Your Consultation</span>
          </div>
          <h1 className="font-display font-bold text-white text-4xl lg:text-6xl leading-tight max-w-3xl mx-auto">Tell us about your bottleneck.</h1>
          <p className="text-white/65 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            This is the first step — not busywork. We review every submission before scheduling a call, then reply within one business day.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F6FB] py-16 lg:py-24 -mt-10 lg:-mt-16 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[28px] border border-black/8 p-8 shadow-[0_20px_50px_rgba(5,10,30,0.06)] sticky top-28">
              <h3 className="font-display font-bold text-ink text-xl mb-6">What happens next</h3>
              <ul className="space-y-5">
                {[
                  { icon: ShieldCheck, t: 'We review your profile', d: 'A senior engineer checks your bottleneck against what we can automate.' },
                  { icon: Sparkles, t: 'You get a tailored outline', d: 'We email a scoped approach and rough investment — usually within a day.' },
                  { icon: Clock, t: 'You decide', d: 'Move forward on a fixed scope, or not. No pressure, no obligation.' },
                ].map((x, i) => {
                  const I = x.icon;
                  return (
                    <li key={i} className="flex items-start gap-3.5">
                      <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0"><I size={19} /></span>
                      <div>
                        <p className="font-bold text-ink text-[15px]">{x.t}</p>
                        <p className="text-ink/60 text-sm leading-relaxed mt-0.5">{x.d}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 pt-6 border-t border-black/8">
                <a href="mailto:hello@apexcerebro.com" className="flex items-center gap-2.5 text-ink hover:text-brand-600 transition-colors font-medium">
                  <Mail size={18} className="text-brand-600" /> hello@apexcerebro.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <IntakeForm initialPackage={initialPackage} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
