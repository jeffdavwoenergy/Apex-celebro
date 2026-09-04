import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-navy-900 text-white pt-24 pb-12 border-t border-navy-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-2 mb-4 select-none" data-testid="footer-brand-logo">
            <span className="font-serif font-medium text-[28px] leading-none tracking-tight text-white">
              Prosperity
            </span>
            <span className="font-sans font-semibold tracking-[0.28em] text-[11px] uppercase leading-none text-white opacity-80">
              Funding
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Transparent capital funding solutions for small and medium businesses. Building financial stability through honest lending.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-medium mb-6">Funding Solutions</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><span onClick={() => navigate('/services/lines-of-credit')} className="hover:text-pink-500 transition-colors cursor-pointer">Lines of Credit</span></li>
            <li><span onClick={() => navigate('/services/bank-term-loans')} className="hover:text-pink-500 transition-colors cursor-pointer">Bank Term Loans</span></li>
            <li><span onClick={() => navigate('/services/debt-restructuring')} className="hover:text-pink-500 transition-colors cursor-pointer">Debt Restructuring</span></li>
            <li><span onClick={() => navigate('/services/sba-loans')} className="hover:text-pink-500 transition-colors cursor-pointer">SBA Loans</span></li>
            <li><span onClick={() => navigate('/services/equipment-financing')} className="hover:text-pink-500 transition-colors cursor-pointer">Equipment Financing</span></li>
            <li><span onClick={() => navigate('/services/smarter-mca')} className="hover:text-pink-500 transition-colors cursor-pointer">Smarter MCA Solution</span></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-medium mb-6">Useful links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><span onClick={() => navigate('/privacy')} className="hover:text-pink-500 transition-colors cursor-pointer">Privacy policy</span></li>
            <li><span onClick={() => navigate('/terms')} className="hover:text-pink-500 transition-colors cursor-pointer">Terms and Conditions</span></li>
            <li><span onClick={() => navigate('/sms-consent')} className="hover:text-pink-500 transition-colors cursor-pointer">SMS Consent</span></li>
            <li><span onClick={() => navigate('/qualification')} className="hover:text-pink-500 transition-colors cursor-pointer">Quick Qualification</span></li>
            <li><span onClick={() => navigate('/contact')} className="hover:text-pink-500 transition-colors cursor-pointer">Apply Now</span></li>
            <li><a href="tel:+14703332822" className="hover:text-pink-500 transition-colors">+1 470 333 2822</a></li>
            <li><a href="mailto:hello@prosperityfunding.com" className="hover:text-pink-500 transition-colors">hello@prosperityfunding.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Prosperity Funding. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built by Prosperity Funding Team</p>
      </div>
    </footer>
  );
};

export default Footer;
