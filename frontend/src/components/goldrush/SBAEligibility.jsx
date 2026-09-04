import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, TrendingUp, FileText, Target, Clock, DollarSign, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookingFlow from './BookingFlow';

const questions = [
  {
    id: 'years',
    question: 'How long has your business been operating?',
    options: [
      { label: 'Less than 1 year', value: 0 },
      { label: '1–2 years', value: 1 },
      { label: '2–5 years', value: 2 },
      { label: '5+ years', value: 3 },
    ]
  },
  {
    id: 'revenue',
    question: 'What is your approximate annual gross revenue?',
    options: [
      { label: 'Under $100,000', value: 0 },
      { label: '$100,000 – $200,000', value: 1 },
      { label: '$200,000 – $500,000', value: 2 },
      { label: '$500,000+', value: 3 },
    ]
  },
  {
    id: 'credit',
    question: 'What is your personal FICO credit score?',
    options: [
      { label: 'Below 600', value: 0 },
      { label: '600 – 649', value: 1 },
      { label: '650 – 680', value: 2 },
      { label: '680+', value: 3 },
    ]
  },
  {
    id: 'debt',
    question: 'Do you currently have any outstanding MCA advances or high-cost debt?',
    options: [
      { label: 'Yes, multiple MCAs', value: 0 },
      { label: 'Yes, one MCA or high-cost loan', value: 1 },
      { label: 'No, but I have business loans', value: 2 },
      { label: 'No existing debt', value: 3 },
    ]
  },
  {
    id: 'bankruptcy',
    question: 'Any recent bankruptcies, foreclosures, or tax liens?',
    options: [
      { label: 'Yes, within the last 2 years', value: 0 },
      { label: 'Yes, but over 2 years ago', value: 1 },
      { label: 'Minor issues resolved', value: 2 },
      { label: 'None', value: 3 },
    ]
  },
  {
    id: 'purpose',
    question: 'What do you need the funding for?',
    options: [
      { label: 'Debt refinancing / MCA escape', value: 1 },
      { label: 'Working capital / cash flow', value: 2 },
      { label: 'Equipment purchase', value: 2 },
      { label: 'Expansion / real estate', value: 3 },
    ]
  },
];

const getReport = (score, answers) => {
  const maxScore = questions.length * 3;
  const pct = Math.round((score / maxScore) * 100);

  let level, color, icon, headline, summary, recommendations;

  if (pct >= 75) {
    level = 'Strong';
    color = 'text-green-500';
    icon = CheckCircle2;
    headline = 'You are a strong SBA candidate!';
    summary = 'Based on your responses, your business meets or exceeds most SBA eligibility requirements. You likely qualify for SBA 7(a) or 504 loan programs with competitive rates and long-term repayment.';
    recommendations = [
      'Gather your last 2 years of business tax returns',
      'Prepare 6 months of bank statements',
      'Contact Prosperity Funding for a full SBA consultation',
      'You may qualify for loans up to $5,000,000 with terms of 10-25 years'
    ];
  } else if (pct >= 50) {
    level = 'Moderate';
    color = 'text-amber-500';
    icon = AlertTriangle;
    headline = 'You have moderate SBA eligibility';
    summary = 'Your business shows promise but has some areas that need strengthening before a traditional SBA application. Our team can help you address these gaps and build a clear pathway to approval.';
    recommendations = [
      'Consider our Debt Restructuring or Smarter MCA Solution to stabilize cash flow first',
      'Work on improving your credit score toward 680+',
      'Build 2+ years of consistent operating history',
      'A Bank Term Loan may be a better immediate fit while we prepare your SBA file'
    ];
  } else {
    level = 'Needs Work';
    color = 'text-pink-500';
    icon = XCircle;
    headline = 'Not quite SBA-ready — but we can help';
    summary = 'Your business isn\'t currently positioned for SBA financing, but that doesn\'t mean you\'re out of options. Prosperity Funding specializes in creating step-by-step pathways from where you are now to SBA eligibility.';
    recommendations = [
      'Our Smarter MCA Solution can replace high-cost daily payments with fixed monthly payments in 72 hours',
      'Debt restructuring can consolidate multiple obligations and improve your credit profile',
      'Lines of Credit provide flexible working capital while you build eligibility',
      'Contact us for a free consultation — we\'ve helped businesses in your exact situation'
    ];
  }

  return { score, maxScore, pct, level, color, icon, headline, summary, recommendations };
};

const SBAEligibility = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowReport(true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const report = getReport(totalScore, answers);
  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQ = questions[currentStep];
  const canProceed = answers[currentQ?.id] !== undefined;

  if (showBooking) {
    return (
      <BookingFlow
        answers={answers}
        report={getReport(totalScore, answers)}
        onBack={() => setShowBooking(false)}
        onSkip={() => {
          setShowBooking(false);
          setShowReport(true);
        }}
      />
    );
  }

  if (showReport) {
    const ReportIcon = report.icon;
    return (
      <div className="pt-20">
        {/* Report Hero */}
        <section className="bg-[#F1F4F9] py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-pink-300"></div>
              <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Your Results</span>
              <div className="h-[1px] w-12 bg-pink-300"></div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-medium text-navy-900 leading-tight mb-6">
              SBA Eligibility Report
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based on your responses, here is your personalized SBA readiness assessment.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* Score Card */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Main Score */}
            <div className="bg-[#F1F4F9] rounded-[40px] p-10 lg:p-16 mb-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg mb-6 ${report.color}`}>
                  <ReportIcon size={48} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-2">
                  {report.headline}
                </h2>
                <div className="flex items-center justify-center gap-6 mt-6 mb-4">
                  <div className="text-center">
                    <div className={`text-5xl font-serif font-bold ${report.color}`}>{report.pct}%</div>
                    <div className="text-sm text-gray-500 font-medium mt-1">Readiness Score</div>
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200"></div>
                  <div className="text-center">
                    <div className={`text-3xl font-serif font-bold ${report.color}`}>{report.level}</div>
                    <div className="text-sm text-gray-500 font-medium mt-1">Eligibility Level</div>
                  </div>
                </div>
                {/* Score Bar */}
                <div className="max-w-md mx-auto mt-6">
                  <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${report.pct >= 75 ? 'bg-green-500' : report.pct >= 50 ? 'bg-amber-500' : 'bg-pink-500'}`}
                      style={{ width: `${report.pct}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-12">
              <p className="text-xl text-navy-900 font-medium italic border-l-4 border-pink-500 pl-6 py-2">
                {report.summary}
              </p>
            </div>

            {/* Key Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#F1F4F9] p-8 rounded-[24px] group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Cash Flow & DSCR</h3>
                <p className="text-gray-600 text-sm">Your revenue and debt service coverage ratio affect your loan capacity and repayment terms.</p>
              </div>
              <div className="bg-[#F1F4F9] p-8 rounded-[24px] group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Credit & Debt Profile</h3>
                <p className="text-gray-600 text-sm">Your credit score and existing debt structure are key factors in SBA approval decisions.</p>
              </div>
              <div className="bg-[#F1F4F9] p-8 rounded-[24px] group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Business Maturity</h3>
                <p className="text-gray-600 text-sm">Time in business and operating history demonstrate stability that lenders require.</p>
              </div>
              <div className="bg-[#F1F4F9] p-8 rounded-[24px] group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Funding Purpose</h3>
                <p className="text-gray-600 text-sm">Strategic use of capital signals growth intent and supports stronger loan applications.</p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-navy-900 rounded-[40px] p-10 lg:p-16 text-white mb-12">
              <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                <FileText size={28} className="text-pink-500" /> Recommended Next Steps
              </h3>
              <div className="space-y-5">
                {report.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#F1F4F9] rounded-[40px] p-10 lg:p-16 text-center">
              <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">Ready to take the next step?</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">Get a personalized funding consultation with one of our experts. No obligation, no credit impact.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-pink-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-navy-900 transition-all duration-300 flex items-center gap-2 group shadow-lg"
                  data-testid="sba-talk-specialist-btn"
                >
                  Talk to a specialist
                  <ArrowRight size={18} className="text-white group-hover:text-pink-500 transition-colors" />
                </button>
                <button
                  onClick={() => { setShowReport(false); setCurrentStep(0); setAnswers({}); window.scrollTo(0,0); }}
                  className="px-8 py-3.5 rounded-full font-bold border border-gray-300 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 text-navy-900"
                >
                  Retake assessment
                </button>
              </div>
            </div>

            <div className="mt-12">
              <button onClick={() => navigate('/')} className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <ArrowRight size={20} className="rotate-180" /> Back to home
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Questionnaire Hero */}
      <section className="bg-[#F1F4F9] py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-pink-300"></div>
              <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Free Assessment</span>
              <div className="h-[1px] w-12 bg-pink-300"></div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-medium text-navy-900 leading-tight mb-6">
              SBA Eligibility Check
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Understand your borrowing eligibility in minutes, not months. Get instant insights into your SBA readiness without affecting your credit score.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Question Card */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-navy-900">Question {currentStep + 1} of {questions.length}</span>
              <span className="text-sm font-bold text-pink-500">{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
              <ShieldCheck size={14} className="text-green-500" /> No credit impact
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
              <Clock size={14} className="text-blue-500" /> Takes 2 minutes
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
              <DollarSign size={14} className="text-pink-500" /> 100% free
            </div>
          </div>

          {/* Question */}
          <div className="bg-[#F1F4F9] rounded-[32px] p-8 lg:p-12 mb-8">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 mb-8">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option, i) => {
                const isSelected = answers[currentQ.id] === option.value;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(currentQ.id, option.value)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 group ${
                      isSelected
                        ? 'border-pink-500 bg-white shadow-md'
                        : 'border-transparent bg-white hover:border-gray-200 hover:shadow-sm'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? 'border-pink-500 bg-pink-500' : 'border-gray-300 group-hover:border-gray-400'
                    }`}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span className={`text-lg font-medium transition-colors ${isSelected ? 'text-navy-900' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 font-bold rounded-full px-6 py-3 transition-all ${
                currentStep === 0
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-navy-900 hover:text-pink-500'
              }`}
            >
              <ArrowLeft size={18} /> Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`flex items-center gap-2 font-bold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg ${
                canProceed
                  ? 'bg-navy-900 text-white hover:bg-pink-500'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep === questions.length - 1 ? 'See my report' : 'Next'}
              <ArrowRight size={18} className={canProceed ? 'text-pink-500' : ''} />
            </button>
          </div>

          <div className="mt-12">
            <button onClick={() => navigate('/')} className="text-pink-500 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
              <ArrowRight size={20} className="rotate-180" /> Back to home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBAEligibility;
