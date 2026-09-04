import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-6 flex">
        {/* Sidebar Text (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center mr-16">
          <div className="h-24 w-[1px] bg-pink-300 mb-4"></div>
          <span className="vertical-text text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Who we are</span>
          <div className="h-full w-[1px] bg-gray-100 mt-4"></div>
        </div>

        <div className="max-w-3xl">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-4 mb-4 lg:hidden">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase">Who we are</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
            About Prosperity Funding
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Prosperity Funding is dedicated to empowering small and medium-sized businesses with transparent, affordable capital solutions. We replace predatory lending with bank-backed financing that supports real stability and long-term growth.
          </p>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Whether you need working capital, equipment financing, or help escaping high-cost MCA debt, our team of dedicated funding specialists is here to guide you every step of the way — from application to approval and beyond.
          </p>

          <button
            onClick={() => navigate('/about')}
            className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg"
          >
            Learn more about us
            <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
