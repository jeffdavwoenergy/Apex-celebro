import React from 'react';
import { partners } from '../../data/mockData';

const Partners = () => {
  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Content (Mobile: 1st, Desktop: 3rd/Right) */}
        <div className="lg:col-span-6 order-1 lg:order-3">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-4 mb-4 lg:hidden">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase">Trusted partners</span>
          </div>

          <h2 className="text-4xl font-serif font-medium text-navy-900 mb-6">
            Trusted Lending Partners
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Prosperity Funding works with a network of banks, credit unions, and government-backed lending institutions to deliver the most competitive rates and terms for your business.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our partnerships with SBA-approved lenders, CDFI-certified institutions, and national banks give us access to financing options that most brokers simply cannot offer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We advocate for transparency and long-term success over quick profits — ensuring every funding solution we recommend is genuinely in your best interest.
          </p>
        </div>

        {/* Separator / Vertical Text (Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-1 lg:order-2 justify-center relative">
          <div className="h-full w-[1px] bg-pink-200 absolute left-1/2"></div>
          <span className="bg-gray-50 py-4 vertical-text text-pink-500 font-bold tracking-[0.2em] text-xs uppercase z-10">Best in solutions</span>
        </div>

        {/* Logos Area */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-8 items-center justify-items-center opacity-70 order-2 lg:order-1">
          {partners.map((partner, i) => (
            <div key={i} className="font-bold text-2xl text-gray-400 hover:text-navy-900 transition-colors cursor-default">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
