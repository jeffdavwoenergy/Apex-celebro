import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import Pricing from './Pricing';
import WhyUs from './WhyUs';
import IntakeForm from './IntakeForm';
import Footer from './Footer';

const Landing = () => {
  const [selectedPackage, setSelectedPackage] = useState('');

  const scrollToIntake = () => {
    const el = document.getElementById('intake');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const choose = (val) => {
    setSelectedPackage(val);
    setTimeout(scrollToIntake, 60);
  };

  return (
    <div className="bg-white">
      <Navbar onBook={scrollToIntake} />
      <Hero onBook={scrollToIntake} />
      <Problem />
      <Pricing onChoose={choose} />
      <WhyUs />
      <IntakeForm selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
      <Footer onBook={scrollToIntake} />
    </div>
  );
};

export default Landing;
