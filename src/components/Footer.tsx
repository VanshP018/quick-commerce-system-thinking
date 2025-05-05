
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">SystemThink<span className="text-[#0EA5E9]">Hub</span></h3>
            <p className="text-gray-300 mt-2">
              Exploring complexity through systems thinking.
              Understanding the interconnections in the quick commerce revolution.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">Home</Link></li>
              <li><Link to="/concepts" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">Concepts</Link></li>
              <li><Link to="/case-study" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">Case Study</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Hackathon 2025</h3>
            <p className="text-gray-300">
              This website was created for the Systems Thinking Hackathon 2025.
            </p>
            <p className="text-gray-300 mt-2">
              Contact: <a href="mailto:info@systemthinkhub.org" className="text-[#0EA5E9] hover:underline">info@systemthinkhub.org</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Systems Thinking Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
