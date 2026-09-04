import React, { useEffect } from 'react';
import { ArrowRight, MessageSquare, Zap, Shield, Users, BarChart } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = ({ serviceData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = serviceData[id] || serviceData["lines-of-credit"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-20">
      {/* Service Hero Section */}
      <section className="bg-[#F1F4F9] py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-navy-900 leading-tight mb-8">
              {data.heroTitle}
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              {data.heroDescription}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg"
            >
              Apply Now
              <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-80">
              <div className={`absolute top-0 right-0 w-64 h-32 rounded-lg transform -rotate-12 border-2 border-navy-900 flex items-center justify-center shadow-xl ${data.layout === 'impact' ? 'bg-pink-100' : 'bg-blue-100'}`}>
                <ArrowRight size={80} className="text-navy-900 opacity-20 transform -rotate-45" />
              </div>
              <div className={`absolute bottom-0 left-10 w-64 h-32 rounded-lg transform rotate-6 border-2 border-navy-900 flex items-center justify-center shadow-2xl z-20 ${data.layout === 'impact' ? 'bg-pink-500' : 'bg-blue-500'}`}>
                <ArrowRight size={80} className="text-white opacity-40" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Experience Module */}
      <section className="bg-white py-24 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
              {data.experienceTitle}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>{data.experienceDescription}</p>
              <p>{data.experienceDescription2}</p>
            </div>
          </div>

          <div className="relative flex justify-center">
            {data.layout === 'impact' && data.stats ? (
              <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
                {data.stats.map((stat, i) => (
                  <div key={i} className="bg-[#F1F4F9] p-8 rounded-[32px] text-center border border-gray-100 shadow-sm hover:border-pink-300 transition-colors">
                    <div className="text-pink-500 font-serif text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-navy-900 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-4 max-w-sm">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`p-3 rounded-xl shadow-sm flex items-center justify-center transform transition-transform hover:scale-110 ${i % 2 === 0 ? 'translate-y-4' : ''} ${data.layout === 'feature-rows' ? 'bg-pink-50 text-pink-500' : 'bg-blue-50 text-blue-600'}`}>
                    {i % 4 === 0 ? <Zap size={20} /> : i % 3 === 0 ? <Shield size={20} /> : i % 2 === 0 ? <Users size={20} /> : <BarChart size={20} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Module (Conditional) */}
      {data.layout === 'process' && data.steps && (
        <section className="bg-[#F1F4F9] py-24 mb-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-medium text-navy-900 mb-4">Our Methodology</h2>
              <p className="text-gray-600">A structured approach to complex automation challenges.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.steps.map((step, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm relative group hover:shadow-xl transition-shadow">
                  <div className="text-pink-500 font-serif text-6xl font-bold opacity-10 absolute top-6 right-8 group-hover:opacity-20 transition-opacity">{step.number}</div>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6 relative">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Module */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {data.layout === 'feature-rows' ? (
            <div className="space-y-24">
              {data.features.map((feature, idx) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={idx} className={`flex flex-col lg:items-center gap-12 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2">
                      <div className="w-20 h-20 bg-pink-100 rounded-3xl flex items-center justify-center text-pink-500 mb-8">
                        <FeatureIcon size={36} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-serif font-medium text-navy-900 mb-6">{feature.title}</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                    <div className="lg:w-1/2 bg-[#F1F4F9] rounded-[48px] aspect-video flex items-center justify-center p-12">
                      <FeatureIcon size={120} strokeWidth={0.5} className="text-pink-500 opacity-20" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {data.features.map((feature, idx) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="mb-6 relative w-20 h-20">
                      <div className={`absolute inset-0 rounded-full transform -rotate-6 opacity-60 ${data.layout === 'impact' ? 'bg-pink-100' : 'bg-blue-100'}`}></div>
                      <div className="absolute inset-0 flex items-center justify-center text-navy-900">
                        <FeatureIcon size={36} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-navy-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Uniquely Positioned Section */}
      <section className="bg-[#F1F4F9] py-24 mx-6 lg:mx-24 rounded-[40px] mb-24 overflow-hidden">
        <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-white rounded-full opacity-50 transform rotate-12 scale-125"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${data.layout === 'impact' || data.layout === 'feature-rows' ? 'bg-pink-500' : 'bg-blue-500'} p-8 rounded-3xl shadow-2xl transform -rotate-6`}>
                  <MessageSquare size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
              {data.uniqueTitle}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>{data.uniqueDescription}</p>
              <p>{data.uniqueDescription2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-6 mb-24">
        <button onClick={() => navigate('/')} className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          <ArrowRight size={20} className="rotate-180" /> Back to all solutions
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
