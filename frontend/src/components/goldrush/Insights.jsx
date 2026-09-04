import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { insights } from '../../data/mockData';

const Insights = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-16 md:py-24" id="insights">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-navy-900">
            Success Stories
          </h2>
          <button
            onClick={() => navigate('/insights')}
            className="flex items-center gap-2 text-navy-900 font-bold hover:text-pink-500 transition-colors text-sm md:text-base mb-1"
          >
            See all stories <ArrowRight size={16} className="text-pink-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
          {insights.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => navigate(`/insights/${item.id}`)}
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl mb-4 shadow-sm bg-white aspect-[4/3]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-navy-900 mb-4 leading-snug group-hover:text-pink-500 transition-colors line-clamp-3">
                  {item.title}
                </h3>

                <div className="mt-auto flex justify-between items-center text-xs md:text-sm">
                  <span className="text-gray-500 font-medium">{item.date}</span>
                  <span className={`px-3 py-1.5 rounded-lg font-bold text-white tracking-wide text-[10px] uppercase ${item.category === 'Technology' ? 'bg-pink-500' : 'bg-navy-900'}`}>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
