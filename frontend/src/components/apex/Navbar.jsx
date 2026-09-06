import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : 'unset'; }, [open]);

  const goPricing = () => {
    if (location.pathname === '/') {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 350);
    }
  };

  const links = [
    { label: 'Services', fn: () => navigate('/services') },
    { label: 'Pricing', fn: goPricing },
    { label: 'Contact', fn: () => navigate('/contact') },
  ];

  const pill = scrolled
    ? 'bg-white/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(5,10,30,0.12)] border border-black/5'
    : 'bg-transparent border border-transparent';
  const text = scrolled ? 'text-ink' : 'text-white';
  const cta = scrolled ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-ink hover:bg-brand-600 hover:text-white';

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
      <div className="container mx-auto px-4 pt-4">
        <div className={`relative flex items-center justify-between rounded-full pl-5 pr-3 lg:pl-7 py-2.5 transition-all duration-300 ${pill} ${text}`}>
          <button onClick={() => navigate('/')} className="flex items-center gap-2.5 select-none z-[110]" data-testid="brand-logo">
            <img src={scrolled ? '/apex-mark-dark.png' : '/apex-mark-white.png'} alt="APEX CEREBRO" className="h-[22px] w-auto" />
            <span className="font-display font-bold text-[17px] tracking-tight leading-none">APEX <span className="font-medium opacity-80">CEREBRO</span></span>
          </button>

          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-9 font-medium text-[15px]">
            {links.map((l) => (
              <button key={l.label} onClick={l.fn} className="transition-colors hover:text-brand-600">{l.label}</button>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button onClick={() => navigate('/contact')} className={`px-6 py-2.5 rounded-full font-bold text-[14px] flex items-center gap-2 group transition-all duration-300 ${cta}`} data-testid="nav-book-btn">
              Book a Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-300" />
            </button>
          </div>

          <button className={`lg:hidden z-[110] p-1 ${scrolled ? 'text-ink' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-ink z-[105] transition-transform duration-500 ease-in-out lg:hidden pt-28 px-8 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col">
          {links.map((l) => (
            <button key={l.label} onClick={() => { setOpen(false); setTimeout(l.fn, 60); }} className="w-full text-left py-6 text-2xl font-display font-semibold text-white border-b border-white/10 hover:text-brand-400 transition-colors">
              {l.label}
            </button>
          ))}
          <button onClick={() => { setOpen(false); setTimeout(() => navigate('/contact'), 60); }} className="mt-10 w-full bg-brand-600 text-white py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform">
            Book a Call <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
