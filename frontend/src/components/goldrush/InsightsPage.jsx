import React, { useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InsightsPage = ({ insightData }) => {
  const navigate = useNavigate();
  const insights = Object.values(insightData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="bg-[#F1F4F9] py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Real Results</span>
            <div className="h-[1px] w-12 bg-pink-300"></div>
          </div>
          <h1 className="text-5xl lg:text-8xl font-serif font-medium text-navy-900 leading-tight mb-8">
            Success Stories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real businesses, real results. See how Prosperity Funding has helped small and medium enterprises secure the capital they need to grow, stabilize, and thrive.
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {insights.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => navigate(`/insights/${item.id}`)}
              >
                <div className="overflow-hidden rounded-[32px] mb-6 shadow-sm bg-white aspect-[4/3] relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-1.5 rounded-full font-bold text-white tracking-wide text-[10px] uppercase shadow-lg ${item.category === 'Technology' ? 'bg-pink-500' : 'bg-navy-900'}`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow px-2">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 leading-tight group-hover:text-pink-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-6">
                    {item.content.introduction}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-pink-500 font-bold group-hover:translate-x-2 transition-transform">
                    Read more <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-gray-100 pt-12 flex justify-center">
            <button onClick={() => navigate('/')} className="text-navy-900 font-bold flex items-center gap-2 hover:text-pink-500 transition-colors">
              <ArrowRight size={20} className="rotate-180" /> Back to home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
