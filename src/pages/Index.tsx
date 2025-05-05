
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Understanding Quick Commerce Through <span className="text-[#0EA5E9]">Systems Thinking</span>
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Unraveling the complex interconnections of the rapid delivery revolution and its impacts on society, economy, and environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                  <Link to="/concepts">Explore Concepts</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/case-study">See Case Study</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#F97316] opacity-75 blur-lg"></div>
                <div className="relative bg-[#1A1F2C] p-1 rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Systems thinking visualization" 
                    className="rounded-full w-72 h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Understanding the Quick Commerce Revolution</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700">
                Quick commerce—the promise of ultra-fast delivery in minutes rather than days—has rapidly transformed consumer expectations and retail operations globally. But beneath the convenience lies a complex system of interactions, feedback loops, and unintended consequences.
              </p>
              <p className="text-lg text-gray-700">
                Systems thinking provides us with powerful tools to understand these complex, interconnected phenomena. By mapping relationships, identifying feedback loops, and finding leverage points, we can better comprehend the full impact of the quick commerce revolution.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">What is Systems Thinking?</h3>
              <p className="mb-4 text-gray-700">
                Systems thinking is an approach to analysis that focuses on how parts of a system interrelate and how systems work over time and within larger systems.
              </p>
              <div className="flex justify-between items-center bg-[#E5DEFF] p-4 rounded-lg">
                <div className="text-[#1A1F2C]">
                  <p className="font-medium">Unlike linear thinking, systems thinking:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Examines wholes instead of parts</li>
                    <li>Studies interconnections and patterns</li>
                    <li>Looks at behavior over time</li>
                    <li>Considers unintended consequences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Key Systems Thinking Concepts</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* CLD Diagrams */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-6">
                <img 
                  src="/lovable-uploads/89cbdf76-4166-403c-abca-866d0779325b.png"
                  alt="Causal Loop Diagram" 
                  className="h-40 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Causal Loop Diagrams</h3>
              <p className="text-gray-700 mb-6">
                Visual tools that map the relationships between variables in a system, showing how they influence each other through feedback loops.
              </p>
              <Link to="/concepts#cld" className="text-[#0EA5E9] inline-flex items-center group">
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Leverage Points */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Leverage Points</h3>
              <p className="text-gray-700 mb-6">
                Places in a system where a small change can lead to large shifts in system behavior, crucial for effective interventions.
              </p>
              <Link to="/concepts#leverage" className="text-[#0EA5E9] inline-flex items-center group">
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* System Archetypes */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#7E69AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16s1.5-2 4-2 4 2 4 2" />
                  <circle cx="9" cy="10" r="1" />
                  <circle cx="15" cy="10" r="1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">System Archetypes</h3>
              <p className="text-gray-700 mb-6">
                Common patterns of system behavior that recur across different contexts, helping identify typical system pitfalls and solutions.
              </p>
              <Link to="/concepts#archetypes" className="text-[#0EA5E9] inline-flex items-center group">
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Commerce Context */}
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">The Quick Commerce Phenomenon</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Quick commerce delivery" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#0EA5E9]">A New Paradigm in Retail</h3>
              <p className="mb-4">
                Quick commerce promises deliveries in as little as 10-30 minutes, completely reshaping consumer expectations and challenging traditional retail and logistics models.
              </p>
              <p className="mb-6">
                This shift has triggered profound changes across multiple systems:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">Urban Infrastructure</h4>
                  <p className="text-gray-300">Dark stores, micro-fulfillment centers, and new traffic patterns</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">Labor Markets</h4>
                  <p className="text-gray-300">New job categories, gig work expansion, and algorithmic management</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">Environmental Systems</h4>
                  <p className="text-gray-300">Changed packaging needs, emissions profiles, and waste streams</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-[#F97316] hover:bg-[#e05e06]">
                  <Link to="/case-study">Explore Our Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0EA5E9] to-[#7E69AB]">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Think Systematically?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dive deeper into systems thinking concepts and discover how they can help us understand and shape the quick commerce revolution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-white text-[#0EA5E9] hover:bg-gray-100">
              <Link to="/concepts">Explore Systems Thinking</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/resources">View Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

