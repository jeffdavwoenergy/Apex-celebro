import React, { useEffect } from 'react';
import { ArrowRight, Users, MessageSquare, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#F1F4F9] py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="relative inline-block">
              <span className="absolute -top-10 -right-8 text-pink-500 font-serif italic text-xl transform -rotate-12 select-none animate-pulse">
                *Trusted Partner
                <svg className="absolute -bottom-2 -left-4 w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12C4 12 10 12 14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h1 className="text-5xl lg:text-8xl font-serif font-medium text-navy-900 leading-tight mb-8">
                About Prosperity Funding
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              We are specialists in business capital funding, helping small and medium enterprises access affordable bank financing, SBA loans, and working capital solutions with integrity and transparency.
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
            <div className="relative w-full max-w-md h-80 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-20 -left-10 w-24 h-32 bg-pink-300 rounded-t-full transform -rotate-12 shadow-xl opacity-80"></div>
                <div className="absolute -bottom-10 -right-10 w-24 h-32 bg-indigo-300 rounded-t-full transform rotate-12 shadow-xl opacity-80"></div>
                <div className="w-24 h-32 bg-blue-400 rounded-t-full shadow-2xl z-10 relative"></div>
                <div className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-navy-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-1 h-1 bg-navy-900 rounded-full"></div>
                </div>
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

      {/* Our Mission */}
      <section className="bg-white py-24 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-serif font-medium text-navy-900 mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At Prosperity Funding, we believe every business deserves access to honest, affordable capital. Too many small business owners are trapped in cycles of high-cost merchant cash advances and predatory lending — and we are here to change that.
              </p>
              <p>
                Our team of experienced funding specialists works directly with banks, SBA-approved lenders, and credit institutions to find the most competitive rates and terms for your business. We prioritize your long-term success over short-term profits.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-navy-900 rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" alt="Business Meeting" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-6 text-white font-medium">
                Welcome to Prosperity Funding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-pink-300"></div>
              <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Our Values</span>
              <div className="h-[1px] w-12 bg-pink-300"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif font-medium text-navy-900">
              What sets us apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-6 w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 transform transition-transform group-hover:scale-110">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Transparency First</h3>
              <p className="text-gray-500">No hidden fees, no surprises. We show you every term before you sign.</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6 w-20 h-20 mx-auto bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 transform transition-transform group-hover:scale-110">
                <MessageSquare size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-500">A personal funding consultant guides you from application to funding.</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6 w-20 h-20 mx-auto bg-green-100 rounded-2xl flex items-center justify-center text-green-600 transform transition-transform group-hover:scale-110">
                <ArrowRight size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Fast Processing</h3>
              <p className="text-gray-500">Get approved in as little as 72 hours with the fastest processing in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F1F4F9] py-24 mx-6 lg:mx-24 rounded-[40px] mb-24 overflow-hidden">
        <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-white rounded-full opacity-50 transform rotate-12 scale-125"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-pink-500 p-8 rounded-3xl shadow-2xl transform -rotate-6">
                  <MessageSquare size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-8">
              Ready to grow your business?
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>Whether you need working capital, equipment financing, or help restructuring existing debt, Prosperity Funding is here to provide the funding solutions your business deserves.</p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg"
              >
                Get started today
                <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-6 mb-24">
        <button onClick={() => navigate('/')} className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          <ArrowRight size={20} className="rotate-180" /> Back to home
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
