import React, { useEffect, useState } from 'react';
import { Phone, Building2, ArrowRight, ArrowLeft, User, Landmark, TrendingUp, Mail, PhoneCall, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookingFlow from './BookingFlow';

const steps = [
  { id: 'name', label: 'Name', icon: User },
  { id: 'company', label: 'Company', icon: Landmark },
  { id: 'credit', label: 'Credit Score', icon: TrendingUp },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'phone', label: 'Phone', icon: PhoneCall },
];

const QualificationPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    yearsInBusiness: '',
    annualRevenue: '',
    creditScore: '',
    email: '',
    phone: '',
    fundingAmount: '',
  });
  const [showBooking, setShowBooking] = useState(false);
  const [mockReport, setMockReport] = useState({
    pct: 65,
    level: 'Moderate',
    color: 'text-amber-500',
    headline: 'You have moderate funding eligibility'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitToBooking = () => {
    setShowBooking(true);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmitToBooking();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-bold text-navy-900">First Name <span className="text-pink-500">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-bold text-navy-900">Last Name <span className="text-pink-500">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-sm font-bold text-navy-900">Company Name <span className="text-pink-500">*</span></label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="yearsInBusiness" className="block text-sm font-bold text-navy-900">Years in Business</label>
                <select
                  id="yearsInBusiness"
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="<1">Less than 1 year</option>
                  <option value="1-2">1–2 years</option>
                  <option value="2-5">2–5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="annualRevenue" className="block text-sm font-bold text-navy-900">Monthly Revenue</label>
                <select
                  id="annualRevenue"
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="<30k">$30,000 and below</option>
                  <option value="30k-40k">$30,000 – $40,000</option>
                  <option value="40k-70k">$40,000 – $70,000</option>
                  <option value="70k-100k">$70,000 – $100,000</option>
                  <option value="100k-250k">$100,000 – $250,000</option>
                  <option value="250k-500k">$250,000 – $500,000</option>
                  <option value="500k-1m">$500,000 – $1,000,000</option>
                  <option value="1m+">$1,000,000+</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="creditScore" className="block text-sm font-bold text-navy-900">Estimated Credit Score <span className="text-pink-500">*</span></label>
              <select
                id="creditScore"
                name="creditScore"
                value={formData.creditScore}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900 appearance-none"
              >
                <option value="">Select your range</option>
                <option value="<600">Below 600</option>
                <option value="600-649">600 – 649</option>
                <option value="650-679">650 – 679</option>
                <option value="680-719">680 – 719</option>
                <option value="720+">720+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="fundingAmount" className="block text-sm font-bold text-navy-900">Desired Funding Amount</label>
              <select
                id="fundingAmount"
                name="fundingAmount"
                value={formData.fundingAmount}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900 appearance-none"
              >
                <option value="">Select</option>
                <option value="<50k">Under $50,000</option>
                <option value="50k-150k">$50,000 – $150,000</option>
                <option value="150k-500k">$150,000 – $500,000</option>
                <option value="500k-1m">$500,000 – $1,000,000</option>
                <option value="1m+">$1,000,000+</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-navy-900">Email Address <span className="text-pink-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-bold text-navy-900">Phone Number <span className="text-pink-500">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              By proceeding, you authorize Prosperity Funding to contact you regarding your qualification. No credit impact — this is a soft inquiry only.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  if (showBooking) {
    return (
      <BookingFlow
        qualificationData={{
          yearsInBusiness: formData.yearsInBusiness,
          annualRevenue: formData.annualRevenue,
          creditScore: formData.creditScore,
          fundingAmount: formData.fundingAmount,
        }}
        report={mockReport}
        onBack={() => setShowBooking(false)}
        onSkip={() => setShowBooking(false)}
        preFillData={{
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.companyName,
          businessIndustry: '',
        }}
      />
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F1F4F9] flex flex-col">
      {/* Back Button */}
      <div className="pt-4 px-6 pb-2">
        <button 
          onClick={() => navigate('/')} 
          className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform text-sm"
        >
          <ArrowRight size={16} className="rotate-180" /> Back
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 lg:px-6">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-medium text-navy-900 mb-3">
              Get Qualified
            </h1>
            <p className="text-base lg:text-lg text-gray-600">
              Answer a few quick questions to see your funding eligibility.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            {/* Progress Bar */}
            <div className="h-1 bg-gray-100">
              <div
                className="h-full bg-pink-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Step Icons */}
            <div className="px-6 lg:px-8 pt-6 pb-3">
              <div className="flex items-center justify-between gap-2">
                {steps.map((step, i) => {
                  const StepIcon = step.icon;
                  const isActive = i === currentStep;
                  const isCompleted = i < currentStep;
                  return (
                    <button
                      key={step.id}
                      onClick={() => { if (i <= currentStep) setCurrentStep(i); }}
                      className="flex flex-col items-center gap-1.5 flex-1 group"
                      disabled={i > currentStep}
                    >
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                          : isCompleted
                            ? 'bg-pink-100 text-pink-500'
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        {isCompleted ? <CheckCircle2 size={20} /> : <StepIcon size={20} />}
                      </div>
                      <span className={`text-[10px] lg:text-xs font-bold tracking-wide transition-colors hidden sm:block text-center ${
                        isActive ? 'text-pink-500' : isCompleted ? 'text-pink-400' : 'text-gray-400'
                      }`}>
                        {step.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 lg:px-8 py-8 lg:py-10 min-h-[300px] lg:min-h-[350px]">
              {renderStepContent()}
            </div>

            {/* Navigation */}
            <div className="px-6 lg:px-8 pb-8 flex justify-between items-center gap-3 border-t border-gray-100 pt-6">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-1.5 font-bold rounded-full px-4 lg:px-5 py-2.5 transition-all text-sm ${
                  currentStep === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-navy-900 hover:text-pink-500'
                }`}
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button
                onClick={handleNext}
                className="bg-navy-900 text-white px-6 lg:px-8 py-3 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg flex-1 lg:flex-none justify-center"
              >
                <span>{currentStep === steps.length - 1 ? 'See My Eligibility' : 'Next'}</span>
                <ArrowRight size={16} className="text-pink-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationPage;
