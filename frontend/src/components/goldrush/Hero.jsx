import React from 'react';
import { ArrowRight, Calendar, Phone, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Full-bleed hero image (business owner / entrepreneur) styled like the reference design
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="bg-[#F1F4F9] px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3 lg:pt-4" data-testid="hero-section">
      <div className="relative overflow-hidden rounded-[26px] sm:rounded-[36px] lg:rounded-[46px] min-h-[92vh] flex flex-col justify-end">
        {/* Background image */}
        <img
          src={HERO_IMAGE}
          alt="Business owner securing capital funding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Legibility gradient (darkens top for the nav + bottom for the headline) */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/55 via-navy-900/10 to-navy-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/45 via-transparent to-transparent"></div>

        {/* Content anchored bottom-left */}
        <div className="relative z-10 container mx-auto px-6 lg:px-10 pb-14 lg:pb-20 pt-40">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-4 py-1.5 mb-7">
            <ShieldCheck size={15} className="text-pink-300" />
            <span className="text-white/90 text-xs font-semibold tracking-wide">Bank-backed. Transparent. Trusted.</span>
          </div>

          <h1
            className="font-rounded font-semibold text-white text-[3.1rem] leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight max-w-4xl"
            data-testid="hero-headline"
          >
            Capital funding that fuels growth.
          </h1>

          <p className="text-lg lg:text-xl text-white/85 mt-7 mb-9 leading-relaxed max-w-xl" data-testid="hero-subhead">
            Smart bank financing and transparent funding solutions, built for the small and medium
            businesses that drive the real economy forward.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary pill with dark circular arrow */}
            <button
              onClick={() => navigate('/contact')}
              className="group flex items-center gap-3 bg-white text-navy-900 rounded-full pl-7 pr-2 py-2 font-bold text-[15px] shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="hero-cta-apply-btn"
            >
              Get funded today
              <span className="w-9 h-9 rounded-full bg-navy-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </button>

            {/* Frosted secondary */}
            <button
              onClick={() => navigate('/qualification')}
              className="flex items-center gap-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/40 text-white px-6 py-3.5 font-semibold text-[15px] hover:bg-white/25 transition-all duration-300"
              data-testid="hero-cta-book-btn"
            >
              <Calendar size={18} className="text-white" />
              Book a consultation
            </button>

            {/* Frosted call */}
            <a
              href="tel:+14703332822"
              className="flex items-center gap-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/40 text-white px-6 py-3.5 font-semibold text-[15px] hover:bg-white/25 transition-all duration-300"
              data-testid="hero-cta-call-btn"
            >
              <Phone size={18} className="text-white" />
              Call us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
