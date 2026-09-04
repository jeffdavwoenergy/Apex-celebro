import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, Building2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Post-submission "Thank You" experience.
 * Displays a confirmation summary and lets the user return home or visit insights.
 * (Replaces the previous third-party booking integration.)
 */
const BookingFlow = ({ qualificationData, answers, preFillData, onBack }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = qualificationData || {};
  const a = answers || {};

  const yearsInBusiness = data.yearsInBusiness || a.years || 'Not specified';
  const annualRevenue = data.annualRevenue || a.revenue || 'Not specified';
  const creditScore = data.creditScore || a.credit || 'Not specified';
  const fundingAmount = data.fundingAmount;

  return (
    <div className="pt-20" data-testid="thank-you-flow">
      <section className="bg-gradient-to-b from-[#F1F4F9] to-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-4">
                <CheckCircle2 size={48} className="text-white" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-12 bg-pink-300"></div>
              <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Submission Received</span>
              <div className="h-[1px] w-12 bg-pink-300"></div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 leading-tight mb-4">
              Thank you — we've got it.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A funding specialist from Prosperity Funding will review your details and reach out within
              one business day to discuss your options. No credit pull, no obligation.
            </p>
          </div>

          {/* Summary Card */}
          <div className="bg-white rounded-[32px] shadow-lg p-8 lg:p-12 space-y-8" data-testid="submission-summary">
            {/* Contact Information */}
            {(preFillData?.email || preFillData?.phone || preFillData?.businessName) && (
              <div>
                <h3 className="font-bold text-gray-600 mb-4 text-sm uppercase">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {preFillData?.businessName && (
                    <div className="flex items-start gap-3">
                      <Building2 size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase">Company</p>
                        <p className="text-sm font-bold text-navy-900">{preFillData.businessName}</p>
                      </div>
                    </div>
                  )}
                  {preFillData?.email && (
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase">Email</p>
                        <p className="text-sm font-bold text-navy-900 break-all">{preFillData.email}</p>
                      </div>
                    </div>
                  )}
                  {preFillData?.phone && (
                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase">Phone</p>
                        <p className="text-sm font-bold text-navy-900">{preFillData.phone}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Application Details */}
            <div>
              <h3 className="font-bold text-gray-600 mb-4 text-sm uppercase">Application Snapshot</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Years in Business</p>
                  <p className="text-sm font-bold text-navy-900">{yearsInBusiness}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Annual Revenue</p>
                  <p className="text-sm font-bold text-navy-900">{annualRevenue}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Credit Score</p>
                  <p className="text-sm font-bold text-navy-900">{creditScore}</p>
                </div>
              </div>
              {fundingAmount && (
                <div className="mt-4 bg-pink-50 border-l-4 border-pink-500 p-4 rounded-lg">
                  <p className="text-xs font-bold text-pink-700 uppercase mb-1">Desired Funding</p>
                  <p className="text-base font-bold text-navy-900">{fundingAmount}</p>
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={18} className="text-blue-700" />
                <p className="text-sm font-bold text-blue-900">What happens next</p>
              </div>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>1. A senior advisor reviews your profile against current SBA & alternative-funding programs.</li>
                <li>2. We email a tailored funding outline within one business day.</li>
                <li>3. You decide whether to move forward — no commitment required.</li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 font-bold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg bg-navy-900 text-white hover:bg-pink-500"
              data-testid="thank-you-home-btn"
            >
              <ArrowRight size={20} className="rotate-180" />
              Return to Home
            </button>
            <button
              onClick={() => navigate('/insights')}
              className="inline-flex items-center gap-2 font-bold rounded-full px-8 py-3.5 transition-all duration-300 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
              data-testid="thank-you-insights-btn"
            >
              Read funding insights
              <ArrowRight size={18} />
            </button>
            {onBack && (
              <button
                onClick={onBack}
                className="text-pink-500 font-bold hover:underline"
                data-testid="thank-you-back-btn"
              >
                Edit my answers
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingFlow;
