import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPage = () => {
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
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
            <p>
              Prosperity Funding ("we", "us", "our", or "Company") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website and use our services. 
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-navy-900 mb-3">2.1 Information You Provide Directly</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Account Information:</strong> Name, email address, phone number, business name, and address</li>
              <li><strong>Financial Information:</strong> Business income, credit information, banking details, and loan requirements</li>
              <li><strong>Communication Records:</strong> Messages, inquiries, and conversations through our AI-enabled messaging system</li>
              <li><strong>Application Data:</strong> Information submitted through our loan application forms</li>
              <li><strong>Support Requests:</strong> Content and attachments related to customer service inquiries</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Browsing Activity:</strong> Pages visited, time spent, cookies, and usage patterns</li>
              <li><strong>Location Data:</strong> Approximate geographic location based on IP address (not precise location)</li>
              <li><strong>AI Interaction Data:</strong> Interaction patterns with AI systems for model improvement and security</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">2.3 Information from Third Parties</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Credit bureaus and financial institutions</li>
              <li>Data providers and analytics services</li>
              <li>Public records and government agencies</li>
              <li>Business partners and affiliates</li>
            </ul>
          </section>

          {/* Use of Information */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>To process loan applications and provide funding services</li>
              <li>To communicate with you about your account and services</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To prevent fraud and enhance security</li>
              <li>To improve and personalize your experience</li>
              <li>To conduct credit and risk assessments</li>
              <li>To train and improve our AI messaging systems (with anonymized data)</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To analyze usage patterns and website performance</li>
            </ul>
          </section>

          {/* AI Messaging Data Protection */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. AI Messaging Data Protection</h2>
            <p className="mb-4">
              Our platform uses artificial intelligence to provide enhanced customer service and automated responses. 
              We take special care to protect your data when you communicate through our AI systems.
            </p>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">4.1 Data Processing and Security</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>All AI messaging data is encrypted using AES-256 encryption standards</li>
              <li>Sensitive financial information is masked and anonymized when possible</li>
              <li>Messages are processed on secure, isolated servers with restricted access</li>
              <li>No personally identifiable information is shared with AI training datasets</li>
              <li>All third-party AI providers have executed Data Processing Agreements (DPA)</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">4.2 Data Retention for AI Purposes</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Messages are retained for 7 years to comply with regulatory requirements</li>
              <li>Anonymized conversation samples may be retained longer for AI model improvement</li>
              <li>You may request deletion of your conversation history at any time</li>
              <li>We do not use your data to train commercial AI models without explicit consent</li>
              <li>AI system logs are protected under the same security standards as other customer data</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">4.3 Third-Party AI Vendors</h3>
            <p className="mb-2">
              We may use third-party AI services such as Azure OpenAI, OpenAI, or similar providers. When your data is processed through these services:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Data is processed under strict Data Processing Agreements (DPA)</li>
              <li>Vendors are prohibited from using your data for their own model training</li>
              <li>Your information is treated as confidential business information</li>
              <li>Security standards are maintained across all processing</li>
              <li>You have the right to opt-out of AI processing if desired</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">4.4 Your Rights Regarding AI Data</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Right to know when AI systems are processing your data</li>
              <li>Right to request deletion of AI conversation data</li>
              <li>Right to opt-out of AI-powered features (human support alternatives available)</li>
              <li>Right to access your complete AI conversation history</li>
              <li>Right to dispute AI decisions that affect you</li>
            </ul>
          </section>

          {/* GDPR and Data Protection Compliance */}
          <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Data Protection Compliance (GDPR and Regulations)</h2>
            
            <h3 className="text-lg font-semibold text-navy-900 mb-3">5.1 General Data Protection Regulation (GDPR)</h3>
            <p className="mb-4">
              For individuals in the European Union and other jurisdictions with similar regulations, we comply with GDPR requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>We collect personal data only with your explicit consent or for legitimate business purposes</li>
              <li>We maintain records of processing activities and data protection impact assessments</li>
              <li>We ensure data minimization by collecting only necessary information</li>
              <li>We implement data protection by design and default principles</li>
              <li>We have appointed a Data Protection Officer (DPO) for compliance oversight</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">5.2 Your GDPR Rights</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Right of Access:</strong> You can request a copy of all data we hold about you</li>
              <li><strong>Right to Rectification:</strong> You can correct inaccurate personal data</li>
              <li><strong>Right to Erasure:</strong> You can request deletion of your data (right to be forgotten)</li>
              <li><strong>Right to Restrict Processing:</strong> You can limit how we process your data</li>
              <li><strong>Right to Data Portability:</strong> You can receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> You can object to certain types of data processing</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">5.3 Data Processing Agreements</h3>
            <p>
              We have executed comprehensive Data Processing Agreements (DPA) with all third-party service providers, partners, 
              and AI vendors. These agreements ensure GDPR compliance and adequate data protection standards.
            </p>

            <h3 className="text-lg font-semibold text-navy-900 mb-3">5.4 International Data Transfers</h3>
            <p className="mb-2">
              When your data is transferred internationally:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Transfers to the US are governed by adequacy decisions or contractual safeguards</li>
              <li>We use Standard Contractual Clauses (SCCs) for transfers outside the EEA</li>
              <li>Data is stored in compliant facilities with appropriate security measures</li>
              <li>You are notified of any international transfers at the time of collection</li>
            </ul>
          </section>

          {/* Disclosure of Information */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. How We Share Your Information</h2>
            <p className="mb-4">We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Service Providers:</strong> With vendors who assist in our operations (under confidentiality agreements)</li>
              <li><strong>Legal Compliance:</strong> When required by law, court order, or government request</li>
              <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or sale of assets</li>
              <li><strong>Credit Bureaus:</strong> To report loan information (standard lending practice)</li>
              <li><strong>Fraud Prevention:</strong> To prevent fraud and protect against financial crimes</li>
              <li><strong>Your Consent:</strong> When you explicitly authorize sharing with third parties</li>
            </ul>
          </section>

          {/* Security Measures */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Security of Your Information</h2>
            <p className="mb-4">We implement comprehensive security measures to protect your data:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>End-to-end encryption (AES-256) for data in transit and at rest</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Intrusion detection and prevention systems</li>
              <li>Access controls restricting data to authorized personnel</li>
              <li>Employee training on data protection and privacy practices</li>
              <li>Incident response procedures for potential breaches</li>
              <li>Two-year breach notification requirements</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and recognize returning visitors. 
              You can manage cookie preferences through your browser settings. Please note that disabling cookies may limit certain 
              website functionality.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Financial records: 7 years (regulatory requirement)</li>
              <li>Account information: Duration of business relationship plus 7 years</li>
              <li>Communication logs: 7 years for compliance purposes</li>
              <li>Deleted data: Securely wiped after retention period expires</li>
              <li>Earlier deletion: Available upon request in accordance with regulations</li>
            </ul>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Your Privacy Rights and Choices</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Opt-out of marketing communications via email or phone</li>
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of inaccurate data</li>
              <li>Restrict processing of your information</li>
              <li>Lodge a complaint with your local data protection authority</li>
              <li>Submit a Data Subject Access Request (DSAR)</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect or retain personal 
              information from children. If we become aware that we have collected data from a minor, we will promptly delete such information.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable regulations. 
              We will notify you of significant changes by posting the updated policy on our website with an updated "Last Updated" date. 
              Your continued use of our services following such notification constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-6 rounded">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, our data protection practices, or wish to exercise your privacy rights, 
              please contact us at:
            </p>
            <div className="space-y-2 mb-6">
              <p><strong>Prosperity Funding - Privacy Team</strong></p>
              <p>Email: <a href="mailto:hello@prosperityfunding.com" className="text-pink-500 hover:text-pink-600">hello@prosperityfunding.com</a></p>
              <p>Phone: <a href="tel:+14703332822" className="text-pink-500 hover:text-pink-600">+1 470 333 2822</a></p>
              <p>Address: Prosperity Funding, Chicago, IL</p>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Data Protection Officer (DPO):</strong> You may also contact our DPO at 
              <a href="mailto:privacy@prosperityfunding.com" className="text-pink-500 hover:text-pink-600"> privacy@prosperityfunding.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
