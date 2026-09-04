import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { services } from '../../data/mockData';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 flex">
        {/* Sidebar Text (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center mr-16 pt-10">
          <div className="h-24 w-[1px] bg-pink-300 mb-4"></div>
          <span className="vertical-text text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">What we offer</span>
          <div className="h-full w-[1px] bg-gray-100 mt-4"></div>
        </div>

        <div className="flex-1">
          {/* Mobile Eyebrow */}
          <div className="flex items-center gap-4 mb-4 lg:hidden">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase">What we offer</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
            Funding Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mb-16 leading-relaxed">
            We offer a range of bank-backed financing products tailored to your business needs. From flexible credit lines to long-term SBA loans, our solutions are designed for sustainable growth with the lowest fees in the industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 duration-300`}>
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium text-navy-900 mb-3 flex items-center gap-2 group-hover:text-pink-500 transition-colors">
                    {service.title} <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
