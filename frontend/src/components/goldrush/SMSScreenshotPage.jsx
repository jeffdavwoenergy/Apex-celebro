import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SMSScreenshotPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <button
          onClick={() => navigate('/sms-consent')}
          className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to SMS Consent
        </button>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">SMS Opt-In Example</h1>
          <p className="text-gray-600">Here's what the SMS opt-in process looks like</p>
        </div>

        {/* Screenshot */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl max-w-lg mx-auto">
          <img 
            src="/Screenshot opt in.png" 
            alt="SMS Consent Opt-In Example" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SMSScreenshotPage;
