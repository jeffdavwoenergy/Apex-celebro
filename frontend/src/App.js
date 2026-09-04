import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/apex/Landing';
import PrivacyPage from './components/apex/PrivacyPage';
import TermsPage from './components/apex/TermsPage';

function App() {
  return (
    <div className="antialiased text-ink bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
