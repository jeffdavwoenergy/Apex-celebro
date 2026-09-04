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

const ContactPage = () => {
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
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
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
    // Pass form data to BookingFlow
    // The booking flow will now handle the calendar integration
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
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold text-navy-900">How can we help? <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your funding needs..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none text-navy-900 resize-none"
              ></textarea>
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
              By submitting this form, you agree to be contacted by Prosperity Funding regarding your funding inquiry. No credit impact — this is a soft inquiry only.
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
        answers={{
          years: formData.yearsInBusiness,
          revenue: formData.annualRevenue,
          credit: formData.creditScore,
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

  if (submitted) {
    return (
      <div className="pt-20">
        <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-6xl lg:text-8xl font-serif font-medium text-navy-900 leading-tight">
              Apply Now
            </h1>
          </div>
        </section>
        <section className="bg-[#F1F4F9] py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="bg-white rounded-[40px] p-12 lg:p-16 shadow-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={44} className="text-green-500" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Application Received!</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Thank you, {formData.firstName}! Our funding specialists will review your information and reach out within 24 hours to discuss the best options for your business.
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg"
              >
                Back to home
                <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl lg:text-8xl font-serif font-medium text-navy-900 leading-tight">
            Apply Now
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F1F4F9] py-20 lg:py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-navy-900 mb-4">
              Bank Financing with Integrity
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              The lowest fees and fastest processing in the industry.
            </p>

            {/* Form Card */}
            <div className="bg-white rounded-[32px] shadow-sm overflow-hidden">
              {/* Progress Bar */}
              <div className="h-1.5 bg-gray-100">
                <div
                  className="h-full bg-pink-500 transition-all duration-500 rounded-r-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Step Icons */}
              <div className="px-8 pt-8 pb-4">
                <div className="flex items-center justify-between">
                  {steps.map((step, i) => {
                    const StepIcon = step.icon;
                    const isActive = i === currentStep;
                    const isCompleted = i < currentStep;
                    return (
                      <button
                        key={step.id}
                        onClick={() => { if (i <= currentStep) setCurrentStep(i); }}
                        className="flex flex-col items-center gap-2 group"
                        disabled={i > currentStep}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                            : isCompleted
                              ? 'bg-pink-100 text-pink-500'
                              : 'bg-gray-100 text-gray-400'
                        }`}>
                          {isCompleted ? <CheckCircle2 size={22} /> : <StepIcon size={22} />}
                        </div>
                        <span className={`text-[11px] font-bold tracking-wide transition-colors hidden sm:block ${
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
              <div className="px-8 py-8 min-h-[240px]">
                {renderStepContent()}
              </div>

              {/* Navigation */}
              <div className="px-8 pb-8 flex justify-between items-center">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 font-bold rounded-full px-5 py-2.5 transition-all text-sm ${
                    currentStep === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-navy-900 hover:text-pink-500'
                  }`}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-navy-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 transition-all duration-300 flex items-center gap-2 group shadow-lg w-full sm:w-auto justify-center"
                >
                  {currentStep === steps.length - 1 ? 'Submit Application' : 'Next'}
                  <ArrowRight size={18} className="text-pink-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Details Side */}
          <div className="lg:col-span-5">
            <div className="bg-white p-10 lg:p-12 rounded-[40px] shadow-sm space-y-10 sticky top-32">
              <div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-8">Our contact details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-pink-100 p-3 rounded-xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Call us</p>
                      <a href="tel:+14703332822" className="text-lg font-medium text-navy-900 hover:text-pink-500 transition-colors">+1 470 333 2822</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-pink-100 p-3 rounded-xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Email us</p>
                      <a href="mailto:hello@prosperityfunding.com" className="text-lg font-medium text-navy-900 hover:text-pink-500 transition-colors">hello@prosperityfunding.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-500">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Prosperity Funding </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-500">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Prosperity Funding Registered Office</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>No credit impact — soft inquiry only</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-3">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-3">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <span>100% confidential consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-16">
          <button onClick={() => navigate('/')} className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
            <ArrowRight size={20} className="rotate-180" /> Back to home
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
