import React, { useState } from 'react';
import { ArrowLeft, Phone, Shield, Clock, FileText, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SMSConsentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    consentSMS: false,
    consentMarketing: false,
    consentAlerts: false,
    agreedToTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^\+?1?\d{9,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.consentSMS) newErrors.consentSMS = 'You must opt-in to receive SMS messages';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to the SMS Consent Terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('SMS Consent Submitted:', formData);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white pt-20 pb-12 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <FileText size={40} className="text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-green-900 mb-4">Consent Confirmed!</h2>
            <p className="text-green-700 text-lg mb-6">
              Thank you, {formData.firstName}! Your SMS consent has been recorded. You will start receiving SMS updates at {formData.phone}.
            </p>
            <p className="text-green-600 text-sm mb-8">
              You can manage your SMS preferences anytime by replying STOP to any message or contacting us directly.
            </p>
            <p className="text-gray-500 text-sm">Redirecting to home in a few seconds...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">SMS Consent Agreement</h1>
          <p className="text-gray-600">Please opt-in to receive SMS communications from Prosperity Funding</p>
        </div>

        {/* Information Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <Phone className="text-blue-600 mb-3" size={24} />
            <h3 className="font-bold text-navy-900 mb-2">Funding Updates</h3>
            <p className="text-sm text-gray-600">Receive updates on your loan application and funding status</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <Shield className="text-green-600 mb-3" size={24} />
            <h3 className="font-bold text-navy-900 mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-600">Your phone number is encrypted and never shared with third parties</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <Clock className="text-purple-600 mb-3" size={24} />
            <h3 className="font-bold text-navy-900 mb-2">Frequency</h3>
            <p className="text-sm text-gray-600">2-4 messages per month during your funding process</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Your Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                  errors.firstName 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-200 focus:border-pink-500'
                }`}
                placeholder="John"
              />
              {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                  errors.lastName 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-200 focus:border-pink-500'
                }`}
                placeholder="Doe"
              />
              {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-navy-900 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                errors.phone 
                  ? 'border-red-500 focus:border-red-600' 
                  : 'border-gray-200 focus:border-pink-500'
              }`}
              placeholder="(123) 456-7890"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            <p className="text-gray-500 text-xs mt-2">We'll use your phone number only for funding updates and important notifications</p>
          </div>

          {/* Consent Checkboxes */}
          <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-lg font-bold text-navy-900 mb-6">Consent Preferences *</h3>
            
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border-2 ${
                errors.consentSMS ? 'border-red-500 bg-red-50' : 'border-blue-200 bg-blue-50'
              }`}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentSMS"
                    checked={formData.consentSMS}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-navy-900">Opt-in to SMS Updates</p>
                    <p className="text-sm text-gray-600 mt-1">
                      I consent to receive SMS/text messages from Prosperity Funding regarding my funding application, loan status, and account updates. Standard message and data rates may apply. This is not required to use any services, but helps us keep you informed.
                    </p>
                  </div>
                </label>
              </div>

              <div className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentMarketing"
                    checked={formData.consentMarketing}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 text-pink-500 rounded focus:ring-2 focus:ring-pink-500"
                  />
                  <div>
                    <p className="font-semibold text-navy-900">Marketing & Promotional Messages (Optional)</p>
                    <p className="text-sm text-gray-600 mt-1">
                      I consent to receive SMS messages about special offers, new funding products, and promotions from Prosperity Funding.
                    </p>
                  </div>
                </label>
              </div>

              <div className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentAlerts"
                    checked={formData.consentAlerts}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                  />
                  <div>
                    <p className="font-semibold text-navy-900">Important Account Alerts (Recommended)</p>
                    <p className="text-sm text-gray-600 mt-1">
                      I consent to receive critical SMS alerts about security, payment reminders, and account changes.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {errors.consentSMS && (
              <p className="text-red-600 text-sm mt-4 flex items-center gap-2">
                <AlertCircle size={16} />
                {errors.consentSMS}
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className={`bg-white rounded-lg p-6 border-2 mb-8 ${
            errors.agreedToTerms ? 'border-red-500 bg-red-50' : 'border-gray-200'
          }`}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="w-5 h-5 mt-1 text-navy-900 rounded focus:ring-2 focus:ring-navy-900"
              />
              <div>
                <p className="font-semibold text-navy-900">
                  I agree to the SMS Consent Terms *
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  I acknowledge that I have read and understood the SMS Consent Agreement. I understand that:
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                  <li>My phone number is encrypted and protected under GDPR and data protection laws</li>
                  <li>I can opt-out at any time by replying "STOP" to any SMS or contacting support</li>
                  <li>Prosperity Funding will not share my phone number with third-party marketers</li>
                  <li>Standard SMS rates and charges from my carrier may apply</li>
                  <li>Messages are sent for account updates, application status, and optional promotions</li>
                </ul>
              </div>
            </label>
            {errors.agreedToTerms && (
              <p className="text-red-600 text-sm mt-4 flex items-center gap-2">
                <AlertCircle size={16} />
                {errors.agreedToTerms}
              </p>
            )}
          </div>

          {/* Additional Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex gap-3">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">Important Information</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>SMS Frequency:</strong> You will receive approximately 2-4 text messages per month during your funding application process. This may vary based on your account activity.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>How to Opt-Out:</strong> Reply "STOP" to any SMS message, or contact us at +1 331 333 2159. Opt-out requests are processed immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-navy-900 text-white py-4 rounded-full font-bold text-lg hover:bg-pink-500 transition-all duration-300 shadow-lg"
          >
            I Agree & Opt-In
          </button>

          <p className="text-center text-gray-500 text-xs mt-4">
            By clicking "I Agree & Opt-In", you are providing explicit consent to receive SMS communications from Prosperity Funding
          </p>
        </form>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-navy-900 mb-2">Can I change my SMS preferences later?</h3>
              <p className="text-gray-600">Yes, you can update your preferences at any time by logging into your account or contacting our support team. You can also reply "STOP" to any message to unsubscribe immediately.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-navy-900 mb-2">Is my phone number secure?</h3>
              <p className="text-gray-600">Yes. Your phone number is encrypted using AES-256 encryption and is protected under GDPR and all applicable data protection laws. We will never sell or share your phone number with third-party marketers.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-navy-900 mb-2">Who sends these SMS messages?</h3>
              <p className="text-gray-600">SMS messages are sent by Prosperity Funding directly from our secure messaging system. All messages include "Prosperity Funding" as the sender identifier and may include a callback phone number.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-navy-900 mb-2">Do I have to opt-in?</h3>
              <p className="text-gray-600">Opting in to SMS is optional and not required to receive our funding services. However, SMS updates help us keep you informed about your application status and important account information.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-navy-900 mb-2">What if I have concerns about TCPA compliance?</h3>
              <p className="text-gray-600">Prosperity Funding is fully compliant with the Telephone Consumer Protection Act (TCPA). We only send SMS messages to numbers that have explicitly opted in, and we maintain a "Do Not Call" list. Contact us with any compliance concerns.</p>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">
            <button onClick={() => navigate('/sms-screenshot')} className="text-gray-400 hover:text-gray-600 underline transition-colors">See opt-in example</button>
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-navy-900 mb-4">Questions About SMS Consent?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our SMS consent process or your privacy, please don't hesitate to contact us:
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> <a href="mailto:privacy@prosperityfunding.com" className="text-pink-500 hover:text-pink-600">privacy@prosperityfunding.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+14703332822" className="text-pink-500 hover:text-pink-600">+1 470 333 2822</a></p>
            <p><strong>Address:</strong> Prosperity Funding, Chicago, IL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSConsentPage;
