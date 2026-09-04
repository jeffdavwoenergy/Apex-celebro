import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

const go = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Footer = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/apex-mark-white.png" alt="APEX CEREBRO" className="h-6 w-auto" />
              <span className="font-display font-bold text-lg tracking-tight">APEX <span className="font-medium opacity-80">CEREBRO</span></span>
            </div>
            <p className="text-white/55 max-w-sm leading-relaxed">
              We build custom AI agents that clear document, communication, and data-entry backlogs—so your team ships work, not busywork.
            </p>
            <button
              onClick={onBook}
              className="mt-7 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white rounded-full px-6 py-3 font-bold text-sm transition-colors"
            >
              Book Your Consultation <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">Explore</h4>
            <ul className="space-y-3 text-white/70">
              <li><button onClick={() => go('problem')} className="hover:text-brand-400 transition-colors">The Problem</button></li>
              <li><button onClick={() => go('pricing')} className="hover:text-brand-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => go('why')} className="hover:text-brand-400 transition-colors">Why Us</button></li>
              <li><button onClick={() => go('intake')} className="hover:text-brand-400 transition-colors">Book a Consultation</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">Contact</h4>
            <a href="mailto:hello@apexcerebro.com" className="flex items-center gap-2 text-white/70 hover:text-brand-400 transition-colors">
              <Mail size={16} /> hello@apexcerebro.com
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 gap-3">
          <p>&copy; {new Date().getFullYear()} APEX CEREBRO. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
