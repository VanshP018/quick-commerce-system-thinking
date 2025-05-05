
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1A1F2C] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SystemThink<span className="text-[#0EA5E9]">Hub</span></Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#0EA5E9] transition-colors">Home</Link>
          <Link to="/concepts" className="hover:text-[#0EA5E9] transition-colors">Concepts</Link>
          <Link to="/case-study" className="hover:text-[#0EA5E9] transition-colors">Case Study</Link>
          <Link to="/resources" className="hover:text-[#0EA5E9] transition-colors">Resources</Link>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1A1F2C] shadow-lg md:hidden p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-[#0EA5E9] transition-colors py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/concepts" className="hover:text-[#0EA5E9] transition-colors py-2" onClick={toggleMenu}>Concepts</Link>
              <Link to="/case-study" className="hover:text-[#0EA5E9] transition-colors py-2" onClick={toggleMenu}>Case Study</Link>
              <Link to="/resources" className="hover:text-[#0EA5E9] transition-colors py-2" onClick={toggleMenu}>Resources</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
