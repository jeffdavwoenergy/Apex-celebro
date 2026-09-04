import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, ArrowRight, Sprout } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const toggleSection = (section) => setExpandedSection(expandedSection === section ? null : section);

  const handleMobileNav = (path) => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
    navigate(path);
  };

  // "Light" == solid white pill (scrolled or interior pages). "Over" == transparent over hero image.
  const solid = !isHome || isScrolled;

  const pillClass = solid
    ? 'bg-white/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(6,11,61,0.12)] border border-white/60'
    : 'bg-transparent border border-transparent';

  const textColor = solid ? 'text-navy-900' : 'text-white';
  const linkHover = 'hover:text-pink-500';

  const ctaClass = solid
    ? 'bg-navy-900 text-white hover:bg-pink-500'
    : 'bg-white text-navy-900 hover:bg-pink-500 hover:text-white';

  const solutionItems = [
    { label: 'Lines of Credit', path: '/services/lines-of-credit' },
    { label: 'Bank Term Loans', path: '/services/bank-term-loans' },
    { label: 'Debt Restructuring', path: '/services/debt-restructuring' },
    { label: 'SBA Loans', path: '/services/sba-loans' },
    { label: 'Equipment Financing', path: '/services/equipment-financing' },
    { label: 'Smarter MCA Solution', path: '/services/smarter-mca' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
      <div className="container mx-auto px-4 pt-4">
        <div
          className={`relative flex items-center justify-between rounded-full pl-5 pr-3 lg:pl-7 lg:pr-3 py-2.5 transition-all duration-300 ${pillClass} ${textColor}`}
        >
          {/* Logo */}
          <button
            onClick={() => handleMobileNav('/')}
            className="flex items-center gap-2.5 select-none z-[110]"
            data-testid="brand-logo"
          >
            <span className="w-8 h-8 rounded-xl bg-pink-500 flex items-center justify-center text-white shadow-sm">
              <Sprout size={18} strokeWidth={2.4} />
            </span>
            <span className="flex items-baseline gap-1.5">
              <span className="font-rounded font-semibold text-[21px] leading-none tracking-tight">Prosperity</span>
              <span className="hidden sm:inline font-sans font-semibold tracking-[0.28em] text-[9px] uppercase leading-none opacity-70">
                Funding
              </span>
            </span>
          </button>

          {/* Center links (desktop) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-9 font-medium text-[15px]">
            <div className="group relative cursor-pointer flex items-center gap-1.5 py-2 transition-colors hover:text-pink-500">
              Solutions <ChevronDown size={14} className="text-pink-500 mt-0.5" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white text-navy-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-3">
                {solutionItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="w-full text-left block px-5 py-3 hover:bg-gray-50 hover:text-pink-500 rounded-xl transition-colors text-[14px]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => navigate('/insights')} className={`transition-colors ${linkHover}`}>Success Stories</button>
            <button onClick={() => navigate('/sba-eligibility')} className={`transition-colors ${linkHover}`}>SBA Eligibility</button>
            <button onClick={() => navigate('/about')} className={`transition-colors ${linkHover}`}>About</button>
          </div>

          {/* Right actions (desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            <button onClick={() => navigate('/contact')} className={`font-medium text-[15px] transition-colors ${linkHover}`}>
              Log in
            </button>
            <button
              onClick={() => navigate('/contact')}
              className={`px-6 py-2.5 rounded-full font-bold text-[14px] flex items-center gap-2 group transition-all duration-300 ${ctaClass}`}
              data-testid="apply-now-btn"
            >
              Apply Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-300" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden z-[110] p-1 transition-colors ${solid ? 'text-navy-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-navy-900 z-[105] transition-transform duration-500 ease-in-out lg:hidden pt-24 px-8 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-2 pb-32">
          <div className="border-b border-navy-800">
            <button
              onClick={() => toggleSection('services')}
              className="w-full py-6 flex justify-between items-center text-xl font-bold text-white hover:text-pink-500 transition-colors"
            >
              Funding Solutions
              {expandedSection === 'services' ? <ChevronUp size={24} className="text-pink-500" /> : <ChevronDown size={24} className="text-pink-500" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'services' ? 'max-h-[400px] mb-4' : 'max-h-0'}`}>
              <div className="bg-navy-800/50 rounded-2xl p-2 space-y-1">
                {solutionItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleMobileNav(item.path)}
                    className="w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-navy-800 rounded-xl transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => handleMobileNav('/insights')} className="w-full text-left py-6 text-xl font-bold text-white border-b border-navy-800 hover:text-pink-500 transition-colors">
            Success Stories
          </button>
          <button onClick={() => handleMobileNav('/sba-eligibility')} className="w-full text-left py-6 text-xl font-bold text-white border-b border-navy-800 hover:text-pink-500 transition-colors">
            SBA Eligibility
          </button>
          <button onClick={() => handleMobileNav('/about')} className="w-full text-left py-6 text-xl font-bold text-white border-b border-navy-800 hover:text-pink-500 transition-colors">
            About
          </button>

          <div className="pt-10">
            <button
              onClick={() => handleMobileNav('/contact')}
              className="w-full bg-white text-navy-900 py-6 rounded-full font-extrabold text-xl flex items-center justify-center gap-4 active:scale-95 transition-transform shadow-xl"
            >
              Apply Now
              <ArrowRight size={24} className="text-pink-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
