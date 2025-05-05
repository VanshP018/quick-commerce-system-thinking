
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Timer, Truck, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                The Rise of <span className="text-[#0EA5E9]">Quick Commerce</span> Through Systems Thinking
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Analyzing the rapid delivery revolution through causal loops, leverage points, and system archetypes to understand its full impact on society, economy, and environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                  <Link to="/concepts">View CLD Analysis</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/case-study">See Leverage Points</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#F97316] opacity-75 blur-lg"></div>
                <div className="relative bg-[#1A1F2C] p-1 rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="Quick commerce operations" 
                    className="rounded-full w-72 h-72 object-cover hover-scale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Commerce Impact Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">The Quick Commerce Revolution</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700">
                Quick commerce—promising deliveries in as little as 10-30 minutes—has fundamentally changed retail and consumer expectations. This rapid shift has created complex systemic impacts across multiple domains.
              </p>
              <p className="text-lg text-gray-700">
                Using systems thinking frameworks, we can identify causal relationships, feedback loops, and leverage points to better understand both benefits and unintended consequences of this revolution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F1F0FB] p-5 rounded-lg flex flex-col items-center text-center animate-fade-in">
                <ShoppingCart className="h-10 w-10 text-[#7E69AB] mb-3" />
                <h3 className="font-semibold">Consumer Behavior</h3>
                <p className="text-sm text-gray-600">Shifting expectations and instant gratification culture</p>
              </div>
              <div className="bg-[#D3E4FD] p-5 rounded-lg flex flex-col items-center text-center animate-fade-in" style={{animationDelay: "0.1s"}}>
                <Truck className="h-10 w-10 text-[#0EA5E9] mb-3" />
                <h3 className="font-semibold">Urban Infrastructure</h3>
                <p className="text-sm text-gray-600">Dark stores and changed traffic patterns</p>
              </div>
              <div className="bg-[#FDE1D3] p-5 rounded-lg flex flex-col items-center text-center animate-fade-in" style={{animationDelay: "0.2s"}}>
                <TrendingUp className="h-10 w-10 text-[#F97316] mb-3" />
                <h3 className="font-semibold">Labor Markets</h3>
                <p className="text-sm text-gray-600">Gig workers and algorithmic management</p>
              </div>
              <div className="bg-[#E5DEFF] p-5 rounded-lg flex flex-col items-center text-center animate-fade-in" style={{animationDelay: "0.3s"}}>
                <Timer className="h-10 w-10 text-[#7E69AB] mb-3" />
                <h3 className="font-semibold">Environmental Impact</h3>
                <p className="text-sm text-gray-600">Carbon emissions and packaging waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLD Diagram Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1A1F2C]">Causal Loop Diagrams: Mapping Quick Commerce</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            These diagrams reveal the complex interdependencies and feedback loops driving the quick commerce system.
          </p>
          
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <img 
                  src="/lovable-uploads/a46333a6-65b7-4ab8-ac8d-04e2d1e3ddea.png"
                  alt="Quick commerce causal loop diagram" 
                  className="w-full h-auto object-contain rounded-lg hover-scale"
                />
              </div>
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">Environmental & Consumer Feedback Loops</h3>
                <p className="text-gray-700 mb-4">
                  This CLD shows how consumer demand drives operational pressures and environmental impacts through reinforcing loops (R1, R2).
                </p>
                <p className="text-gray-700">
                  Note how increased delivery speed creates worker stress and turnover in balancing loop B1, creating hidden costs behind the convenience.
                </p>
                <Link to="/concepts" className="text-[#0EA5E9] inline-flex items-center group mt-4">
                  Explore full CLD analysis <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leverage Points Preview */}
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Leverage Points</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <Table className="border-collapse w-full">
                <TableHeader className="bg-white/10">
                  <TableRow>
                    <TableHead className="text-white">Leverage Point</TableHead>
                    <TableHead className="text-white">Category</TableHead>
                    <TableHead className="text-white">Expected Impact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-white/5">
                    <TableCell className="font-medium text-white">Ethical Delivery Metrics</TableCell>
                    <TableCell className="text-gray-300">Information Flows</TableCell>
                    <TableCell className="text-gray-300">Drives sustainable practices and reduces environmental strain</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-white/5">
                    <TableCell className="font-medium text-white">Stable, Fair Pay Models</TableCell>
                    <TableCell className="text-gray-300">Rules of the System</TableCell>
                    <TableCell className="text-gray-300">Reduces burnout and workforce turnover</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-white/5">
                    <TableCell className="font-medium text-white">Sustainability as Brand Value</TableCell>
                    <TableCell className="text-gray-300">Paradigm</TableCell>
                    <TableCell className="text-gray-300">Drives long-term value and eco-consciousness</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 text-center">
              <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                <Link to="/case-study">View All Leverage Points</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Redesign */}
      <section className="py-16 bg-gradient-to-r from-[#0EA5E9] to-[#7E69AB]">
        <div className="container mx-auto px-6 text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">Reimagining Quick Commerce</h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg animate-fade-in">
                <h3 className="text-xl font-semibold mb-3">Current Structure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-2 mt-1">•</span>
                    <span>Centralized hub-and-spoke networks focused on speed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-2 mt-1">•</span>
                    <span>Gig-based compensation tied to algorithmic speed metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-2 mt-1">•</span>
                    <span>Workers treated as replaceable contractors</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg animate-fade-in" style={{animationDelay: "0.2s"}}>
                <h3 className="text-xl font-semibold mb-3">Future Vision</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-2 mt-1">•</span>
                    <span>Neighborhood-based micro-hubs with multi-modal options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-2 mt-1">•</span>
                    <span>Stable, fair-pay models with earnings floor and benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-2 mt-1">•</span>
                    <span>Workers as partners in governance and operations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button asChild className="bg-white text-[#0EA5E9] hover:bg-gray-100">
                <Link to="/resources">Learn About Structural Redesign</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">Join the System Thinking Hackathon</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Help reimagine quick commerce for sustainability, worker welfare and consumer satisfaction through systems innovation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-[#0EA5E9] text-white hover:bg-[#0c8bc6]">
              <Link to="/concepts">View CLD Analysis</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C]/5">
              <Link to="/case-study">Explore Leverage Points</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
