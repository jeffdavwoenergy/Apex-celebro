import React, { useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const InsightDetail = ({ insightData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = insightData[id] || insightData["restaurant-expansion"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-20">
      {/* Article Hero */}
      <section className="bg-[#F1F4F9] py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-pink-500 text-white font-bold text-xs uppercase tracking-wider">
                {data.category}
              </span>
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <Calendar size={16} />
                {data.date}
              </div>
            </div>

            <h1 className="text-4xl lg:text-7xl font-serif font-medium text-navy-900 leading-tight mb-12">
              {data.title}
            </h1>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Main Featured Image */}
            <div className="rounded-[40px] overflow-hidden mb-16 shadow-2xl aspect-video">
              <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
              <p className="text-xl text-navy-900 font-medium italic border-l-4 border-pink-500 pl-6 py-2">
                {data.content.introduction}
              </p>

              {data.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">
                    {section.heading}
                  </h2>
                  <p className="text-lg">
                    {section.body}
                  </p>
                </div>
              ))}

              <div className="mt-16 pt-12 border-t border-gray-100 italic font-serif text-lg">
                {data.content.conclusion}
              </div>
            </div>

            <div className="mt-20 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigate('/insights')}
                className="flex items-center gap-2 text-pink-500 font-bold hover:translate-x-[-4px] transition-transform"
              >
                <ArrowRight size={20} className="rotate-180" /> Back to all stories
              </button>

              <div className="ml-auto flex gap-4">
                <span className="text-gray-400 font-medium">Share:</span>
                <button className="text-navy-900 hover:text-pink-500 transition-colors font-bold">LinkedIn</button>
                <button className="text-navy-900 hover:text-pink-500 transition-colors font-bold">Twitter</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Section CTA */}
      <section className="bg-[#F1F4F9] py-20 mx-6 lg:mx-24 rounded-[40px] mb-24 overflow-hidden">
        <div className="container mx-auto px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-medium text-navy-900 mb-8">
            Ready to write your own success story?
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg"
          >
            Talk to a funding specialist
            <ArrowRight size={20} className="text-pink-500 group-hover:text-white transition-colors" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InsightDetail;
