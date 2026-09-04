import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsPage = () => {
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to Prosperity Funding ("Company", "we", "our", or "us"). These Terms and Conditions ("Terms", "Agreement") 
              govern your use of our website and services. By accessing and using this website, you accept and agree to be 
              bound by and comply with these Terms and Conditions.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Prosperity Funding's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          {/* AI Messaging Protection */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. AI Messaging and Communication Protection</h2>
            <p className="mb-4">
              Our platform may utilize artificial intelligence (AI) technologies to enhance your experience and provide automated 
              responses to your inquiries. When you communicate through our AI-enabled messaging systems, please be aware of the 
              following protections and limitations:
            </p>
            
            <h3 className="text-lg font-semibold text-navy-900 mb-3">3.1 Data Encryption and Security</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>All communications through our AI messaging systems are encrypted end-to-end using industry-standard protocols</li>
              <li>Messages are transmitted securely and stored in encrypted databases</li>
              <li>Your sensitive financial information is protected with multi-layer security measures</li>
              <li>Access to message archives is restricted to authorized personnel only</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">3.2 AI System Limitations</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>AI responses are generated automatically and may contain errors or inaccuracies</li>
              <li>AI systems are not a substitute for professional financial or legal advice</li>
              <li>You should always verify critical information with our human advisors</li>
              <li>For sensitive financial decisions, human review is recommended before proceeding</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">3.3 Content Moderation</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Your AI messaging communications are monitored for compliance, security, and quality purposes</li>
              <li>We may retain AI conversation logs for up to 7 years for audit and regulatory compliance</li>
              <li>Any suspicious activity will trigger automated alerts to our security team</li>
              <li>You grant us permission to analyze conversations to improve AI model performance</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">3.4 Third-Party AI Services</h3>
            <p>
              Our AI systems may utilize third-party AI platforms (such as OpenAI, Azure OpenAI, or similar services). 
              By using our messaging features, you acknowledge and consent to data being processed through these third-party services 
              under their respective privacy policies. We have executed Data Processing Agreements with all AI service providers to 
              ensure GDPR and data protection compliance.
            </p>
          </section>

          {/* Data Protection and Privacy */}
          <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Data Protection and Privacy Standards</h2>
            <p className="mb-4">
              We are committed to protecting your data in accordance with international data protection regulations.
            </p>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">4.1 GDPR Compliance</h3>
            <p className="mb-2">
              As applicable under the General Data Protection Regulation (GDPR), we:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Process personal data only for specified, explicit, and legitimate purposes</li>
              <li>Minimize data collection to what is necessary (data minimization principle)</li>
              <li>Maintain data accuracy and promptly update when changed</li>
              <li>Implement security measures appropriate to the risk level</li>
              <li>Respect your right to access, rectification, erasure, and data portability</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">4.2 Data Storage and Location</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Personal and financial data is stored in secure, compliant data centers</li>
              <li>Data is not transferred outside the United States unless with appropriate legal safeguards</li>
              <li>International transfers comply with GDPR adequacy decisions or Standard Contractual Clauses</li>
              <li>Backup and disaster recovery systems maintain data integrity</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">4.3 Data Retention</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Financial records are retained as required by applicable law (typically 7 years)</li>
              <li>Communication logs are retained for 7 years for compliance purposes</li>
              <li>Personal data is deleted upon request when no longer needed or after the retention period</li>
              <li>You may request deletion sooner in accordance with data protection regulations</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You are responsible for maintaining the confidentiality of your login credentials</li>
              <li>You must not share your account information with unauthorized third parties</li>
              <li>You agree to use our services only for lawful purposes and in a way that does not infringe on others' rights</li>
              <li>You must not engage in any behavior that could harm the security or integrity of our systems</li>
              <li>You acknowledge that AI-generated communications may contain errors and should be verified</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Limitation of Liability</h2>
            <p>
              The materials on Prosperity Funding's website are provided on an "as is" basis. Prosperity Funding makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Termination</h2>
            <p>
              These Terms are effective unless and until terminated by either you or Prosperity Funding. We reserve the right to 
              restrict, suspend, or terminate your access to our services, with or without cause, without liability to you.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-6 rounded">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, including regarding data protection and AI messaging security, 
              please contact us at:
            </p>
            <div className="space-y-2">
              <p><strong>Prosperity Funding</strong></p>
              <p>Email: <a href="mailto:hello@prosperityfunding.com" className="text-pink-500 hover:text-pink-600">hello@prosperityfunding.com</a></p>
              <p>Phone: <a href="tel:+14703332822" className="text-pink-500 hover:text-pink-600">+1 470 333 2822</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
