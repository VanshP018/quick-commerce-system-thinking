
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Systems Thinking Case Study</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Applying systems thinking concepts to analyze the rise of quick commerce and its complex impacts
          </p>
        </div>
      </section>
      
      {/* Case Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">The Rise of Quick Commerce</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Quick commerce—the business model promising deliveries in as little as 10-30 minutes—represents a profound shift in retail and urban logistics. From grocery items to electronics, medications to household goods, quick commerce aims to satisfy consumer demand almost instantly.
                </p>
                <p className="text-lg text-gray-700">
                  This case study applies systems thinking tools to understand this phenomenon, recognizing that quick commerce isn't simply a faster version of e-commerce, but a qualitatively different system with unique properties, feedback loops, and potential impacts.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="Quick commerce delivery robot" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#1A1F2C]">Case Study Overview</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="h-12 w-12 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#0EA5E9] font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">System Mapping</h4>
                  <p className="text-gray-700 text-sm">
                    Identifying key components, relationships, and boundaries of the quick commerce system
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="h-12 w-12 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#F97316] font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Feedback Analysis</h4>
                  <p className="text-gray-700 text-sm">
                    Exploring reinforcing and balancing loops driving growth and constraints
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="h-12 w-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#7E69AB] font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Leverage Points</h4>
                  <p className="text-gray-700 text-sm">
                    Identifying potential intervention points for sustainable system development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* System Mapping */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#D3E4FD] text-[#0EA5E9] px-4 py-1 rounded-full text-sm font-medium">Part 1</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">System Mapping</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                We begin by mapping the key components and relationships in the quick commerce system, defining appropriate boundaries for our analysis.
              </p>
              
              <h3>Core Components</h3>
              
              <div className="my-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-center mb-8">
                    <svg width="600" height="400" viewBox="0 0 600 400">
                      {/* Central Component */}
                      <circle cx="300" cy="200" r="80" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                      <text x="300" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="bold">Quick Commerce Platforms</text>
                      
                      {/* Connected Components */}
                      <circle cx="150" cy="100" r="50" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                      <text x="150" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="14">Consumers</text>
                      
                      <circle cx="450" cy="100" r="50" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                      <text x="450" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="14">Suppliers</text>
                      
                      <circle cx="150" cy="300" r="50" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                      <text x="150" y="300" textAnchor="middle" dominantBaseline="middle" fontSize="14">Delivery Workers</text>
                      
                      <circle cx="450" cy="300" r="50" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                      <text x="450" y="300" textAnchor="middle" dominantBaseline="middle" fontSize="14">Urban Infrastructure</text>
                      
                      <circle cx="80" cy="200" r="40" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                      <text x="80" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="12">Technology</text>
                      
                      <circle cx="520" cy="200" r="40" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                      <text x="520" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="12">Regulation</text>
                      
                      <circle cx="300" cy="50" r="40" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                      <text x="300" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="12">Investors</text>
                      
                      <circle cx="300" cy="350" r="40" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                      <text x="300" y="350" textAnchor="middle" dominantBaseline="middle" fontSize="12">Traditional Retail</text>
                      
                      {/* Connection lines */}
                      <line x1="230" y1="175" x2="180" y2="130" stroke="black" strokeWidth="1.5" />
                      <line x1="370" y1="175" x2="420" y2="130" stroke="black" strokeWidth="1.5" />
                      <line x1="230" y1="225" x2="180" y2="270" stroke="black" strokeWidth="1.5" />
                      <line x1="370" y1="225" x2="420" y2="270" stroke="black" strokeWidth="1.5" />
                      <line x1="120" y1="200" x2="220" y2="200" stroke="black" strokeWidth="1.5" />
                      <line x1="380" y1="200" x2="480" y2="200" stroke="black" strokeWidth="1.5" />
                      <line x1="300" y1="120" x2="300" y2="90" stroke="black" strokeWidth="1.5" />
                      <line x1="300" y1="280" x2="300" y2="310" stroke="black" strokeWidth="1.5" />
                    </svg>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#1A1F2C] mb-3">Primary Components</h4>
                      <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>
                          <strong className="text-[#0EA5E9]">Quick Commerce Platforms:</strong> Companies operating dark stores, technology infrastructure, and coordinating delivery networks
                        </li>
                        <li>
                          <strong className="text-[#F97316]">Consumers:</strong> End users demanding rapid delivery of goods
                        </li>
                        <li>
                          <strong className="text-[#F97316]">Suppliers:</strong> Producers and wholesalers providing inventory
                        </li>
                        <li>
                          <strong className="text-[#F97316]">Delivery Workers:</strong> Drivers, cyclists, and walkers fulfilling orders
                        </li>
                        <li>
                          <strong className="text-[#F97316]">Urban Infrastructure:</strong> Roads, buildings, parking, and physical space used by quick commerce
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1F2C] mb-3">Secondary Components</h4>
                      <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>
                          <strong className="text-[#7E69AB]">Technology:</strong> Apps, algorithms, inventory management systems
                        </li>
                        <li>
                          <strong className="text-[#7E69AB]">Regulation:</strong> Government policies affecting operations
                        </li>
                        <li>
                          <strong className="text-[#7E69AB]">Investors:</strong> Venture capital and other funding sources
                        </li>
                        <li>
                          <strong className="text-[#7E69AB]">Traditional Retail:</strong> Existing businesses affected by and adapting to quick commerce
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Key Stocks and Flows</h3>
              <p>
                Within the quick commerce system, we can identify several critical stocks (accumulations) and their associated flows:
              </p>
              
              <div className="my-8 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Inventory Stock</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Products available in dark stores and micro-fulfillment centers
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-[#0EA5E9]">Inflows:</p>
                    <p className="text-gray-700">Procurement, restocking</p>
                    <p className="font-medium text-[#0EA5E9] mt-2">Outflows:</p>
                    <p className="text-gray-700">Sales, spoilage, returns</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Delivery Workforce</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Available drivers and delivery personnel
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-[#0EA5E9]">Inflows:</p>
                    <p className="text-gray-700">Recruitment, onboarding</p>
                    <p className="font-medium text-[#0EA5E9] mt-2">Outflows:</p>
                    <p className="text-gray-700">Turnover, churn</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Customer Base</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Active users of quick commerce services
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-[#0EA5E9]">Inflows:</p>
                    <p className="text-gray-700">Customer acquisition</p>
                    <p className="font-medium text-[#0EA5E9] mt-2">Outflows:</p>
                    <p className="text-gray-700">Customer churn</p>
                  </div>
                </div>
              </div>
              
              <div className="my-8 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Dark Stores</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Micro-fulfillment locations in urban areas
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-[#0EA5E9]">Inflows:</p>
                    <p className="text-gray-700">New location openings</p>
                    <p className="font-medium text-[#0EA5E9] mt-2">Outflows:</p>
                    <p className="text-gray-700">Location closures</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Capital Investment</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Funding available for operations and expansion
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-[#0EA5E9]">Inflows:</p>
                    <p className="text-gray-700">Investor funding, revenue</p>
                    <p className="font-medium text-[#0EA5E9] mt-2">Outflows:</p>
                    <p className="text-gray-700">Expenditure, losses</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Urban Space Usage</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    City space allocated to quick commerce
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-[#0EA5E9]">Inflows:</p>
                    <p className="text-gray-700">Commercial conversion, zoning changes</p>
                    <p className="font-medium text-[#0EA5E9] mt-2">Outflows:</p>
                    <p className="text-gray-700">Regulatory restrictions, alternative uses</p>
                  </div>
                </div>
              </div>
              
              <h3>System Boundaries</h3>
              <p>
                For this case study, we'll define our system boundaries to include:
              </p>
              
              <div className="my-8 bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#1A1F2C] mb-3">Included in Analysis</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Direct quick commerce operations</li>
                      <li>Last-mile delivery ecosystem</li>
                      <li>Urban infrastructure impacts</li>
                      <li>Local labor market effects</li>
                      <li>Consumer behavior changes</li>
                      <li>Local retail competition</li>
                      <li>Short to medium-term environmental impacts</li>
                      <li>Municipal policy responses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1F2C] mb-3">Outside of Scope</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Upstream supply chain beyond direct suppliers</li>
                      <li>Global economic trends</li>
                      <li>Long-term technological evolution</li>
                      <li>National-level policy except where directly relevant</li>
                      <li>Social impacts beyond employment and consumption</li>
                      <li>Cultural shifts in consumption beyond direct behavior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feedback Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#FDE1D3] text-[#F97316] px-4 py-1 rounded-full text-sm font-medium">Part 2</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">Feedback Analysis</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Using Causal Loop Diagrams (CLDs), we can identify the key feedback loops driving and constraining quick commerce growth.
              </p>
              
              <h3>Key Reinforcing Loops</h3>
              
              <div className="my-8">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h4 className="font-bold text-[#1A1F2C] mb-4">R1: Growth Loop</h4>
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2">
                      <div className="bg-gray-50 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="200" viewBox="0 0 200 200">
                          <circle cx="100" cy="50" r="30" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="100" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="10">Service Speed</text>
                          
                          <circle cx="50" cy="150" r="30" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="50" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Customer Base</text>
                          
                          <circle cx="150" cy="150" r="30" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                          <text x="150" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Investment</text>
                          
                          <path d="M85,75 Q70,100 60,120" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead9)" />
                          <text x="60" y="100" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M80,150 L120,150" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead9)" />
                          <text x="100" y="145" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M140,125 Q125,100 115,80" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead9)" />
                          <text x="135" y="100" textAnchor="middle" fontSize="14">+</text>
                          
                          <circle cx="100" cy="100" r="15" fill="white" stroke="#0EA5E9" strokeWidth="1" />
                          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">R1</text>
                          
                          <defs>
                            <marker id="arrowhead9" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        This reinforcing loop drives initial quick commerce growth:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
                        <li>Faster delivery service attracts more customers</li>
                        <li>Larger customer base attracts more investment</li>
                        <li>More investment improves service speed through technology, more dark stores, and better logistics</li>
                      </ul>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Why It Matters:</h5>
                        <p className="text-gray-700">
                          This growth loop explains why quick commerce companies often prioritize growth over profitability in early stages, seeking to build critical mass of customers that makes service improvements and eventual profitability possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#1A1F2C] mb-4">R2: Network Density Loop</h4>
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2">
                      <div className="bg-gray-50 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="200" viewBox="0 0 200 200">
                          <circle cx="100" cy="40" r="25" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="100" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="9">Dark Store Density</text>
                          
                          <circle cx="40" cy="120" r="25" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="40" y="120" textAnchor="middle" dominantBaseline="middle" fontSize="9">Delivery Speed</text>
                          
                          <circle cx="160" cy="120" r="25" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="160" y="120" textAnchor="middle" dominantBaseline="middle" fontSize="9">Area Coverage</text>
                          
                          <circle cx="100" cy="170" r="25" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                          <text x="100" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="9">Customer Base</text>
                          
                          <path d="M85,60 Q60,80 55,95" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead10)" />
                          <text x="65" y="80" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M115,60 Q140,80 145,95" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead10)" />
                          <text x="135" y="80" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M65,130 Q80,150 85,155" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead10)" />
                          <text x="75" y="150" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M135,130 Q120,150 115,155" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead10)" />
                          <text x="125" y="150" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M95,145 Q90,120 90,80" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead10)" />
                          <text x="80" y="110" textAnchor="middle" fontSize="14">+</text>
                          
                          <circle cx="100" cy="110" r="15" fill="white" stroke="#0EA5E9" strokeWidth="1" />
                          <text x="100" y="110" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">R2</text>
                          
                          <defs>
                            <marker id="arrowhead10" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        This loop illustrates how network effects strengthen as dark store density increases:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
                        <li>More dark stores in an area improve delivery speed</li>
                        <li>More dark stores also increase the coverage area</li>
                        <li>Both faster delivery and wider coverage attract more customers</li>
                        <li>More customers justify opening more dark stores</li>
                      </ul>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Why It Matters:</h5>
                        <p className="text-gray-700">
                          This explains the urban concentration pattern of quick commerce and why companies aggressively expand in specific neighborhoods rather than spreading thinly across larger areas. Each new location makes the entire network more valuable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Key Balancing Loops</h3>
              
              <div className="my-8">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h4 className="font-bold text-[#1A1F2C] mb-4">B1: Urban Congestion Limit</h4>
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2">
                      <div className="bg-gray-50 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="200" viewBox="0 0 200 200">
                          <circle cx="100" cy="50" r="30" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="100" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="10">Quick Commerce Deliveries</text>
                          
                          <circle cx="50" cy="150" r="30" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="50" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Traffic Congestion</text>
                          
                          <circle cx="150" cy="150" r="30" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                          <text x="150" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Delivery Times</text>
                          
                          <path d="M85,75 Q70,100 60,120" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead11)" />
                          <text x="60" y="100" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M80,150 L120,150" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead11)" />
                          <text x="100" y="145" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M140,125 Q125,100 115,80" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead11)" />
                          <text x="135" y="100" textAnchor="middle" fontSize="14">-</text>
                          
                          <circle cx="100" cy="100" r="15" fill="white" stroke="#F97316" strokeWidth="1" />
                          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">B1</text>
                          
                          <defs>
                            <marker id="arrowhead11" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        This balancing loop creates a natural limit to growth:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
                        <li>Increased quick commerce deliveries add to traffic congestion</li>
                        <li>Higher congestion slows down all traffic, including delivery vehicles</li>
                        <li>Slower delivery times reduce the attractiveness and growth of quick commerce</li>
                      </ul>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Why It Matters:</h5>
                        <p className="text-gray-700">
                          This loop illustrates a classic "tragedy of the commons" scenario where individual companies optimizing their own delivery networks collectively contribute to congestion that degrades service for everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#1A1F2C] mb-4">B2: Labor Market Balance</h4>
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2">
                      <div className="bg-gray-50 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="200" viewBox="0 0 200 200">
                          <circle cx="100" cy="40" r="25" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="100" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="9">Delivery Demand</text>
                          
                          <circle cx="40" cy="100" r="25" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="40" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="9">Driver Wages</text>
                          
                          <circle cx="160" cy="100" r="25" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="160" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="9">Driver Supply</text>
                          
                          <circle cx="100" cy="160" r="25" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                          <text x="100" y="160" textAnchor="middle" dominantBaseline="middle" fontSize="9">Delivery Capacity</text>
                          
                          <path d="M80,55 Q60,70 55,75" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead12)" />
                          <text x="60" y="60" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M65,105 Q80,125 85,135" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead12)" />
                          <text x="70" y="125" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M120,55 Q140,70 145,75" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead12)" />
                          <text x="140" y="60" textAnchor="middle" fontSize="14">-</text>
                          
                          <path d="M135,105 Q120,125 115,135" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead12)" />
                          <text x="130" y="125" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M65,85 L135,85" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead12)" />
                          <text x="100" y="80" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M100,135 L100,65" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead12)" />
                          <text x="95" y="100" textAnchor="middle" fontSize="14">+</text>
                          
                          <circle cx="100" cy="100" r="15" fill="white" stroke="#F97316" strokeWidth="1" />
                          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">B2</text>
                          
                          <defs>
                            <marker id="arrowhead12" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        This loop regulates the labor market dynamics for delivery workers:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
                        <li>Increased delivery demand leads to labor shortages</li>
                        <li>Labor shortages drive up wages to attract more drivers</li>
                        <li>Higher wages attract more drivers, increasing supply</li>
                        <li>More drivers increase delivery capacity, meeting demand</li>
                        <li>But higher labor costs can constrain further expansion</li>
                      </ul>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Why It Matters:</h5>
                        <p className="text-gray-700">
                          This balancing loop explains why quick commerce companies invest heavily in automation, algorithm optimization, and other technologies to reduce dependence on human labor—the labor market creates a natural cost constraint on growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>System Archetype: "Success to the Successful"</h3>
              <p>
                The quick commerce system exhibits a classic "Success to the Successful" system archetype, where early advantages compound over time.
              </p>
              
              <div className="my-8 bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <svg width="500" height="300" viewBox="0 0 500 300">
                    {/* First loop */}
                    <circle cx="150" cy="100" r="40" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                    <text x="150" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="12">Market Leader Resources</text>
                    
                    <circle cx="150" cy="220" r="40" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                    <text x="150" y="220" textAnchor="middle" dominantBaseline="middle" fontSize="12">Market Leader Performance</text>
                    
                    <path d="M150,140 L150,180" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead13)" />
                    <text x="160" y="160" textAnchor="middle" fontSize="14">+</text>
                    
                    <path d="M180,190 C230,150 230,150 180,130" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead13)" />
                    <text x="220" y="160" textAnchor="middle" fontSize="14">+</text>
                    
                    <circle cx="150" cy="160" r="15" fill="white" stroke="#0EA5E9" strokeWidth="1" />
                    <text x="150" y="160" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">R1</text>
                    
                    {/* Second loop */}
                    <circle cx="350" cy="100" r="40" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                    <text x="350" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="12">Competitor Resources</text>
                    
                    <circle cx="350" cy="220" r="40" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                    <text x="350" y="220" textAnchor="middle" dominantBaseline="middle" fontSize="12">Competitor Performance</text>
                    
                    <path d="M350,140 L350,180" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead13)" />
                    <text x="360" y="160" textAnchor="middle" fontSize="14">+</text>
                    
                    <path d="M320,190 C270,150 270,150 320,130" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead13)" />
                    <text x="280" y="160" textAnchor="middle" fontSize="14">+</text>
                    
                    <circle cx="350" cy="160" r="15" fill="white" stroke="#0EA5E9" strokeWidth="1" />
                    <text x="350" y="160" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">R2</text>
                    
                    {/* Connection between loops */}
                    <circle cx="250" cy="50" r="40" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                    <text x="250" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="12">Limited Resources (Investment, Talent, Space)</text>
                    
                    <path d="M215,65 L190,75" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead13)" />
                    <text x="200" y="60" textAnchor="middle" fontSize="14">+</text>
                    
                    <path d="M285,65 L310,75" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead13)" />
                    <text x="300" y="60" textAnchor="middle" fontSize="14">-</text>
                    
                    <path d="M170,190 L330,190" fill="none" stroke="#000" strokeWidth="1.5" stroke-dasharray="5,5" />
                    <text x="250" y="180" textAnchor="middle" fontSize="14" fill="#F97316">Competitive Dynamics</text>
                    
                    <defs>
                      <marker id="arrowhead13" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-gray-700">
                  In this archetype, once a quick commerce player gains an initial advantage (through funding, first-mover advantage, or technology), several reinforcing loops accelerate its growth at the expense of competitors:
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-[#1A1F2C] mb-2">Resource Allocation Loop</h5>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                      <li>Market leaders attract more investment</li>
                      <li>More investment improves performance</li>
                      <li>Better performance attracts even more investment</li>
                      <li>Competitors struggle to access resources</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A1F2C] mb-2">Network Density Loop</h5>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                      <li>Leaders establish more dark stores in prime locations</li>
                      <li>More locations improve delivery speed</li>
                      <li>Better service attracts more customers</li>
                      <li>More customers fund further expansion</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-[#FEF7CD] p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Why This Archetype Matters:</h5>
                  <p className="text-gray-700">
                    The "Success to the Successful" pattern explains why quick commerce tends toward oligopoly or monopoly in specific urban areas. The economics of quick commerce heavily favor market concentration, with a few dominant players eventually controlling most of the market, while smaller competitors are acquired or fail.
                  </p>
                </div>
              </div>
              
              <h3>Delays in the System</h3>
              <p>
                Several critical delays in the quick commerce system create challenges for management and potential instability:
              </p>
              
              <div className="my-8 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Infrastructure Development Delay</h4>
                  <p className="text-gray-700 text-sm">
                    Significant time lag between funding allocation and establishing operational dark stores (property acquisition, renovation, permitting, stocking).
                  </p>
                  <p className="mt-3 text-gray-600 text-sm italic">
                    <strong>Impact:</strong> Companies must predict demand months in advance, often resulting in over or under-capacity.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Labor Market Response Delay</h4>
                  <p className="text-gray-700 text-sm">
                    Gap between increased delivery demand and expansion of qualified driver pool through recruitment, training, and onboarding.
                  </p>
                  <p className="mt-3 text-gray-600 text-sm italic">
                    <strong>Impact:</strong> Labor shortages during growth periods, followed by potential oversupply and reduced earnings.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7E69AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Regulatory Response Delay</h4>
                  <p className="text-gray-700 text-sm">
                    Time between quick commerce impact on urban environments and regulatory/policy responses from local governments.
                  </p>
                  <p className="mt-3 text-gray-600 text-sm italic">
                    <strong>Impact:</strong> Companies build business models assuming current regulations, only to face disruptive changes as cities respond.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-10 w-10 bg-[#F2FCE2] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2 text-[#1A1F2C]">Urban Congestion Perception Delay</h4>
                  <p className="text-gray-700 text-sm">
                    Lag between actual increases in delivery traffic and perceived impacts on congestion by residents and officials.
                  </p>
                  <p className="mt-3 text-gray-600 text-sm italic">
                    <strong>Impact:</strong> Public and policy backlash can emerge suddenly once a tipping point is reached, even if traffic has been gradually increasing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leverage Points */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#E5DEFF] text-[#7E69AB] px-4 py-1 rounded-full text-sm font-medium">Part 3</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">Leverage Points</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Based on our systems analysis, we can identify key leverage points where interventions could shape the quick commerce system's development.
              </p>
              
              <h3>High-Impact Leverage Points</h3>
              
              <div className="my-8 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#1A1F2C] mb-4">Information Flows</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="bg-[#D3E4FD] h-full rounded-lg p-5 flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#0EA5E9] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-sm text-center font-semibold text-[#0EA5E9]">Level 6 in Meadows' Framework</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">
                        Who has access to what information can dramatically reshape the quick commerce system.
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="border-l-4 border-[#0EA5E9] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Data Sharing Platforms</h5>
                          <p className="text-gray-700 text-sm">
                            Urban traffic management systems that share real-time congestion data with all quick commerce operators could optimize routing collectively rather than individually.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#0EA5E9] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Transparent Environmental Impact</h5>
                          <p className="text-gray-700 text-sm">
                            Requiring companies to display carbon footprint information for quick vs. standard delivery could help consumers make more informed choices.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#0EA5E9] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Labor Condition Visibility</h5>
                          <p className="text-gray-700 text-sm">
                            Greater transparency around driver earnings, working conditions, and algorithms could lead to more sustainable labor practices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#1A1F2C] mb-4">Rules of the System</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="bg-[#FDE1D3] h-full rounded-lg p-5 flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#F97316] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-sm text-center font-semibold text-[#F97316]">Level 5 in Meadows' Framework</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">
                        The incentives, constraints, and regulations that govern quick commerce shape its evolution.
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="border-l-4 border-[#F97316] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Dark Store Zoning Regulations</h5>
                          <p className="text-gray-700 text-sm">
                            City planning guidelines for dark store locations and operations can balance retail distribution with neighborhood needs.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#F97316] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Delivery Vehicle Regulations</h5>
                          <p className="text-gray-700 text-sm">
                            Incentives for electric or human-powered delivery vehicles can reduce environmental impact while maintaining service levels.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#F97316] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Gig Worker Protection Policies</h5>
                          <p className="text-gray-700 text-sm">
                            Rules around minimum earnings, benefits, and algorithmic management can create more sustainable labor practices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#1A1F2C] mb-4">Goals of the System</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="bg-[#E5DEFF] h-full rounded-lg p-5 flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#7E69AB] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-sm text-center font-semibold text-[#7E69AB]">Level 3 in Meadows' Framework</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">
                        Shifting the purpose or function of quick commerce could fundamentally transform its impacts.
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="border-l-4 border-[#7E69AB] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">From Speed to Sustainability</h5>
                          <p className="text-gray-700 text-sm">
                            Reframing success metrics from pure delivery speed to balanced speed, sustainability, and community impact could shift company priorities.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#7E69AB] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Community Integration Purpose</h5>
                          <p className="text-gray-700 text-sm">
                            Viewing dark stores as community assets—perhaps with pickup options, local employment guarantees, or community spaces—could transform their role in neighborhoods.
                          </p>
                        </div>
                        <div className="border-l-4 border-[#7E69AB] pl-3 py-1">
                          <h5 className="font-semibold text-[#1A1F2C]">Emergency Resilience Focus</h5>
                          <p className="text-gray-700 text-sm">
                            Designing quick commerce to serve critical community needs during emergencies could justify public support and integration with urban planning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Approaches for Different Stakeholders</h3>
              
              <div className="my-8 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">For Quick Commerce Companies</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-3">
                    <li>
                      <span className="font-semibold">Proactive Regulatory Engagement:</span> Work with cities to develop sustainable operational frameworks before more restrictive regulations emerge.
                    </li>
                    <li>
                      <span className="font-semibold">Differentiated Service Tiers:</span> Offer different speed/price options to smooth demand and optimize resource utilization.
                    </li>
                    <li>
                      <span className="font-semibold">Local Integration Strategy:</span> Design dark stores to contribute to neighborhood fabric rather than detract from it.
                    </li>
                    <li>
                      <span className="font-semibold">Employee Ownership Models:</span> Consider alternative employment structures that give workers more stability and stake in success.
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">For City Policymakers</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-3">
                    <li>
                      <span className="font-semibold">Dynamic Usage Pricing:</span> Implement congestion charges that vary by traffic level rather than outright bans on delivery vehicles.
                    </li>
                    <li>
                      <span className="font-semibold">Shared Infrastructure:</span> Develop shared micro-logistics hubs that multiple companies can use, reducing redundancy.
                    </li>
                    <li>
                      <span className="font-semibold">Data Sharing Requirements:</span> Mandate standardized data sharing among delivery companies to optimize collective traffic impact.
                    </li>
                    <li>
                      <span className="font-semibold">Minimum Service Requirements:</span> Ensure quick commerce serves diverse neighborhoods, not just wealthy areas.
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">For Consumers</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-3">
                    <li>
                      <span className="font-semibold">Time-Shifted Ordering:</span> Platforms could offer incentives for selecting delivery windows during off-peak hours.
                    </li>
                    <li>
                      <span className="font-semibold">Transparent Impact Information:</span> Clear information about the environmental and social impacts of delivery choices.
                    </li>
                    <li>
                      <span className="font-semibold">Aggregated Deliveries:</span> Options to combine orders with neighbors for more efficient delivery routes.
                    </li>
                    <li>
                      <span className="font-semibold">Local Commercial Support:</span> Platforms could highlight and integrate local businesses within quick commerce offerings.
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">For Workers</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-3">
                    <li>
                      <span className="font-semibold">Worker-Led Data Collection:</span> Independent monitoring of working conditions and earnings to inform policy.
                    </li>
                    <li>
                      <span className="font-semibold">Collective Bargaining:</span> Organization across platforms to establish minimum standards for the sector.
                    </li>
                    <li>
                      <span className="font-semibold">Skill Development Pathways:</span> Training programs that build transferable skills beyond delivery.
                    </li>
                    <li>
                      <span className="font-semibold">Alternative Ownership Models:</span> Worker cooperatives or partial ownership structures in quick commerce operations.
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3>Conclusion: Toward Sustainable Quick Commerce</h3>
              <p>
                Our systems analysis reveals that quick commerce is not simply a faster version of traditional e-commerce, but a qualitatively different system with unique dynamics, feedbacks, and impacts. The rise of quick commerce represents a significant reconfiguration of urban retail and logistics systems with far-reaching consequences.
              </p>
              <p>
                The leverage points identified suggest that with thoughtful design and management, quick commerce could evolve into a beneficial component of urban systems—one that balances convenience with sustainability, fair labor practices, and community integration. However, achieving this outcome requires moving beyond simple parameter adjustments (like slightly higher wages or minor regulations) to more fundamental changes in system structure, goals, and paradigms.
              </p>
              <p>
                By applying systems thinking tools, stakeholders can work toward a version of quick commerce that delivers not just packages quickly, but broader social and environmental benefits as well.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Continue Exploring Systems Thinking</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Systems thinking provides powerful tools for understanding and shaping complex challenges beyond quick commerce.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
              <Link to="/concepts">Review Core Concepts</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
