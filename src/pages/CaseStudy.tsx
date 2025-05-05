
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CaseStudy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Leverage Points & System Redesign</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-gray-300">
            Identifying the most effective intervention points to transform quick commerce for sustainability and fairness
          </p>
        </div>
      </section>

      {/* Leverage Points Analysis */}
      <section className="py-16 bg-white" id="leverage">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C] border-b pb-4">Leverage Points Analysis</h2>
            
            <div className="mb-10">
              <p className="text-lg mb-6 text-gray-700">
                In systems thinking, leverage points are places in a system where a small change could lead to large shifts in behavior. Based on Donella Meadows' framework, we identified key leverage points in the quick commerce system.
              </p>
              
              <div className="bg-white shadow-lg rounded-xl p-6 mb-12">
                <div className="overflow-x-auto">
                  <img 
                    src="/lovable-uploads/32c92bef-4dbc-4152-92d3-1549643d0b0c.png"
                    alt="Leverage points analysis" 
                    className="w-full h-auto rounded-lg shadow-md mb-6"
                  />
                  
                  <Table>
                    <TableHeader className="bg-gray-100">
                      <TableRow>
                        <TableHead className="font-semibold">Leverage Point</TableHead>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold">Why Important</TableHead>
                        <TableHead className="font-semibold">Expected Impact</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-gray-50">
                        <TableCell className="font-medium">Ethical Delivery Metrics</TableCell>
                        <TableCell>Information Flows (#6)</TableCell>
                        <TableCell>Provides consumers visibility into ethical and sustainable delivery data</TableCell>
                        <TableCell>Drives demand for sustainable practices</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50">
                        <TableCell className="font-medium">Stable, Fair Pay Models</TableCell>
                        <TableCell>Rules of the System (#5)</TableCell>
                        <TableCell>Improves worker stability</TableCell>
                        <TableCell>Reduces burnout and turnover</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50">
                        <TableCell className="font-medium">Zoning Support for Micro-Hubs</TableCell>
                        <TableCell>Structure of Stocks and Flows (#10)</TableCell>
                        <TableCell>Optimizes local delivery</TableCell>
                        <TableCell>Cuts emissions and traffic</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50">
                        <TableCell className="font-medium">Composite KPIs</TableCell>
                        <TableCell>Goals of the System (#3)</TableCell>
                        <TableCell>Shifts focus from speed alone</TableCell>
                        <TableCell>Balances speed, fairness, sustainability</TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50">
                        <TableCell className="font-medium">Sustainability as Brand Value</TableCell>
                        <TableCell>Paradigm (#2)</TableCell>
                        <TableCell>Reframes green as profitable</TableCell>
                        <TableCell>Drives long-term value and eco-consciousness</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-8 bg-[#F1F0FB] p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Key Finding:</h4>
                  <p className="text-gray-700">
                    Higher-order leverage points such as changing paradigms (#2) and goals of the system (#3) have greater transformative potential than simple parameter adjustments. For quick commerce, shifting the paradigm from "speed at all costs" to "sustainable convenience" represents the most powerful intervention point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* System Restructuring */}
      <section className="py-16 bg-gray-50" id="restructuring">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Structural Redesign: Transitioning the System</h2>
            
            <p className="text-lg mb-10 text-gray-700">
              Based on our leverage points analysis, we identified key structural changes needed to transition quick commerce to a more sustainable, equitable model while maintaining consumer convenience.
            </p>
            
            <div className="bg-white shadow-lg rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">From Current to Future Structure</h3>
              
              <div className="overflow-x-auto">
                <img 
                  src="/lovable-uploads/b7d08b2f-4862-4da7-923a-5a7839654511.png"
                  alt="Structural redesign analysis" 
                  className="w-full h-auto rounded-lg shadow-md mb-6"
                />
                
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="font-semibold">Current Structure</TableHead>
                      <TableHead className="font-semibold">Future Structure</TableHead>
                      <TableHead className="font-semibold">How to Enable the Shift</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell>Centralized hub-and-spoke networks focused on speed</TableCell>
                      <TableCell>Neighborhood-based micro-hubs with multi-modal options</TableCell>
                      <TableCell>Offer zoning support and local subsidies for distributed storage and last-mile networks</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell>Gig-based compensation tied to algorithmic speed metrics</TableCell>
                      <TableCell>Stable, fair-pay models with earnings floor and benefits</TableCell>
                      <TableCell>Mandate base pay, introduce tenure rewards, and enable shared worker insurance via platforms</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell>Workers treated as replaceable contractors</TableCell>
                      <TableCell>Workers as partners in governance and operations</TableCell>
                      <TableCell>Set up worker councils, involve them in feedback loops and delivery planning</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell>Speed-only performance metrics</TableCell>
                      <TableCell>Composite metrics (speed + sustainability + worker well-being)</TableCell>
                      <TableCell>Revise internal KPIs, show ethical delivery score at consumer checkout</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell>Viewing sustainability as a cost burden</TableCell>
                      <TableCell>Treating sustainability as a brand and economic value driver</TableCell>
                      <TableCell>Provide carbon-labeling incentives and reward sustainable consumer choices</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">Implementation Strategy</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#D3E4FD] p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Short-term Actions</h4>
                  <ul className="space-y-2">
                    <li>• Introduce basic worker benefits</li>
                    <li>• Add sustainability metrics to dashboards</li>
                    <li>• Pilot neighborhood micro-hubs</li>
                    <li>• Create worker feedback channels</li>
                  </ul>
                </div>
                <div className="bg-[#FDE1D3] p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Medium-term Actions</h4>
                  <ul className="space-y-2">
                    <li>• Implement composite KPIs</li>
                    <li>• Establish worker councils</li>
                    <li>• Expand micro-hub networks</li>
                    <li>• Develop carbon labeling system</li>
                  </ul>
                </div>
                <div className="bg-[#E5DEFF] p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Long-term Vision</h4>
                  <ul className="space-y-2">
                    <li>• Industry-wide sustainable standards</li>
                    <li>• Worker representation in leadership</li>
                    <li>• Fully integrated multi-modal delivery</li>
                    <li>• Consumer behavior shift to planned ordering</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                <Link to="/resources">Explore Additional Resources <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
