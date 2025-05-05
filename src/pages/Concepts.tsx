
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Concepts = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Systems Thinking Concepts</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            A comprehensive guide to understanding the key tools and frameworks that make up systems thinking methodology.
          </p>
        </div>
      </section>
      
      {/* Table of Contents */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Contents</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="#cld" className="p-3 bg-[#D3E4FD] rounded-md hover:bg-[#b3d0fb] transition-colors text-center">
                Causal Loop Diagrams
              </a>
              <a href="#leverage" className="p-3 bg-[#FDE1D3] rounded-md hover:bg-[#fbc7a9] transition-colors text-center">
                Leverage Points
              </a>
              <a href="#archetypes" className="p-3 bg-[#E5DEFF] rounded-md hover:bg-[#d3c9ff] transition-colors text-center">
                System Archetypes
              </a>
              <a href="#stocks" className="p-3 bg-[#F2FCE2] rounded-md hover:bg-[#e5f9c6] transition-colors text-center">
                Stocks & Flows
              </a>
              <a href="#boundaries" className="p-3 bg-[#FFDEE2] rounded-md hover:bg-[#ffc5cc] transition-colors text-center">
                System Boundaries
              </a>
              <a href="#delays" className="p-3 bg-[#FEF7CD] rounded-md hover:bg-[#fef0a4] transition-colors text-center">
                System Delays
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Causal Loop Diagrams */}
      <section id="cld" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#D3E4FD] text-[#0EA5E9] px-4 py-1 rounded-full text-sm font-medium">Concept 1</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">Causal Loop Diagrams (CLDs)</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Causal Loop Diagrams are visual tools used to map the relationships between variables in a system, showing how they influence each other through feedback loops.
              </p>
              
              <h3>Key Components of CLDs</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-[#1A1F2C] mb-2">Variables</h4>
                  <p className="text-gray-700">
                    Factors that can increase or decrease. In quick commerce, these might include delivery speed, customer satisfaction, urban congestion, etc.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-[#1A1F2C] mb-2">Causal Links</h4>
                  <p className="text-gray-700">
                    Arrows showing how variables affect each other, labeled with + (positive) or - (negative) to indicate the direction of influence.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-[#1A1F2C] mb-2">Feedback Loops</h4>
                  <p className="text-gray-700">
                    Circuits of causality where a change propagates through the system and returns to affect the original variable.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-[#1A1F2C] mb-2">Delay Marks</h4>
                  <p className="text-gray-700">
                    Indicators that show when there is a significant time delay between cause and effect.
                  </p>
                </div>
              </div>
              
              <h3>Types of Feedback Loops</h3>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">Reinforcing Loops (R)</h4>
                  <div className="mb-4 flex justify-center">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#0EA5E9" strokeWidth="2" />
                      <path d="M60,10 A50,50 0 0,1 110,60" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
                      <polygon points="110,55 113,65 103,64" fill="#0EA5E9" />
                      <text x="60" y="65" textAnchor="middle" fill="#1A1F2C" fontSize="16" fontWeight="bold">R</text>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Also called "positive feedback loops," these amplify changes in the system. A small change gets bigger over time.
                  </p>
                  <p className="mt-2 text-gray-700">
                    <strong>Example:</strong> More quick commerce services → more consumer awareness → more demand → more quick commerce services
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">Balancing Loops (B)</h4>
                  <div className="mb-4 flex justify-center">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#F97316" strokeWidth="2" />
                      <path d="M60,10 A50,50 0 0,1 110,60" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
                      <polygon points="110,55 113,65 103,64" fill="#F97316" />
                      <text x="60" y="65" textAnchor="middle" fill="#1A1F2C" fontSize="16" fontWeight="bold">B</text>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    These stabilize systems by counteracting changes, seeking equilibrium or a goal state.
                  </p>
                  <p className="mt-2 text-gray-700">
                    <strong>Example:</strong> Increased traffic congestion → decreased delivery speed → decreased value proposition → fewer deliveries → reduced traffic congestion
                  </p>
                </div>
              </div>
              
              <h3>Quick Commerce CLD Example</h3>
              <div className="my-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg inline-block">
                    <svg width="400" height="300" viewBox="0 0 400 300">
                      {/* This is a simplified CLD for quick commerce */}
                      {/* Variables */}
                      <circle cx="100" cy="100" r="40" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                      <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="12">Delivery Speed</text>
                      
                      <circle cx="250" cy="70" r="40" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                      <text x="250" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="12">Consumer Demand</text>
                      
                      <circle cx="300" cy="200" r="40" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                      <text x="300" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="12">Urban Congestion</text>
                      
                      <circle cx="100" cy="230" r="40" fill="#F2FCE2" stroke="#4CAF50" strokeWidth="2" />
                      <text x="100" y="230" textAnchor="middle" dominantBaseline="middle" fontSize="12">Driver Earnings</text>
                      
                      {/* Links */}
                      {/* Delivery Speed to Consumer Demand */}
                      <path d="M140,90 Q175,70 210,70" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                      <text x="175" y="60" textAnchor="middle" fontSize="16">+</text>
                      
                      {/* Consumer Demand to Urban Congestion */}
                      <path d="M260,110 Q280,150 290,160" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                      <text x="280" y="140" textAnchor="middle" fontSize="16">+</text>
                      
                      {/* Urban Congestion to Delivery Speed */}
                      <path d="M260,190 Q200,150 140,120" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                      <text x="200" y="150" textAnchor="middle" fontSize="16">-</text>
                      
                      {/* Consumer Demand to Driver Earnings */}
                      <path d="M220,95 Q170,150 140,220" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                      <text x="170" y="150" textAnchor="middle" fontSize="16">+</text>
                      
                      {/* Driver Earnings to Delivery Speed */}
                      <path d="M100,190 Q100,160 100,140" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                      <text x="90" y="165" textAnchor="middle" fontSize="16">+</text>
                      
                      {/* Loop Labels */}
                      <circle cx="180" cy="120" r="15" fill="white" stroke="#0EA5E9" strokeWidth="1" />
                      <text x="180" y="125" textAnchor="middle" fontSize="14" fontWeight="bold">R</text>
                      
                      <circle cx="200" cy="180" r="15" fill="white" stroke="#F97316" strokeWidth="1" />
                      <text x="200" y="185" textAnchor="middle" fontSize="14" fontWeight="bold">B</text>
                      
                      {/* Arrow Definitions */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700">
                  This simplified CLD shows key relationships in quick commerce: Faster delivery increases consumer demand, which increases urban congestion. Congestion slows delivery, creating a balancing loop (B). Meanwhile, higher demand increases driver earnings which can improve delivery speed, forming a reinforcing loop (R).
                </p>
              </div>
              
              <h3>Benefits of CLDs</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Visualize complex, non-linear relationships</li>
                <li>Identify feedback mechanisms that might not be obvious</li>
                <li>Communicate system structure clearly to stakeholders</li>
                <li>Help predict how interventions might ripple through the system</li>
                <li>Identify potential unintended consequences of actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leverage Points */}
      <section id="leverage" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#FDE1D3] text-[#F97316] px-4 py-1 rounded-full text-sm font-medium">Concept 2</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">Leverage Points</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Leverage points are places within a complex system where a small shift in one thing can produce big changes in everything. Identified by systems scientist Donella Meadows, they represent points of power in system intervention.
              </p>
              
              <h3>Meadows' Leverage Points (from least to most effective)</h3>
              
              <div className="my-8 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">12. Numbers (Parameters)</h4>
                  <p className="text-gray-700">
                    Constants and parameters such as subsidies, taxes, standards.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Adjusting delivery fees or driver wages
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">11. Buffers</h4>
                  <p className="text-gray-700">
                    The sizes of stabilizing stocks relative to their flows.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Inventory levels in dark stores or micro-fulfillment centers
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">10. Stock-and-Flow Structures</h4>
                  <p className="text-gray-700">
                    Physical systems and their intersections.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Distribution of micro-fulfillment centers throughout a city
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">9. Delays</h4>
                  <p className="text-gray-700">
                    Lengths of time relative to system changes.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Time between order placement and delivery fulfillment
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">8. Balancing Feedback Loops</h4>
                  <p className="text-gray-700">
                    Strength of feedbacks relative to impacts they are correcting.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Dynamic pricing based on demand and congestion
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">7. Reinforcing Feedback Loops</h4>
                  <p className="text-gray-700">
                    Strength of gain of driving loops.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Network effects that increase value as more users join
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">6. Information Flows</h4>
                  <p className="text-gray-700">
                    Structure of who does and does not have access to information.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Real-time data on traffic conditions shared with delivery drivers
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">5. Rules</h4>
                  <p className="text-gray-700">
                    Incentives, punishments, constraints.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Zoning regulations for dark stores or delivery vehicle restrictions
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">4. Self-Organization</h4>
                  <p className="text-gray-700">
                    Power to add, change or evolve system structure.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Allowing delivery personnel to self-optimize routes based on local knowledge
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">3. Goals</h4>
                  <p className="text-gray-700">
                    Purpose or function of the system.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Shifting from pure speed focus to sustainability or community welfare
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">2. Paradigms</h4>
                  <p className="text-gray-700">
                    Mindset out of which the system arises.
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Shifting from "faster is always better" to "appropriate speed for appropriate needs"
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C]">1. Transcending Paradigms</h4>
                  <p className="text-gray-700">
                    Ability to stay flexible and realize no paradigm is "true."
                  </p>
                  <div className="mt-3 text-gray-600 italic">
                    <strong>Quick Commerce Example:</strong> Embracing multiple models of commerce that can coexist (quick, slow, local, communal)
                  </div>
                </div>
              </div>
              
              <h3>Why Leverage Points Matter</h3>
              <p>
                In complex systems like quick commerce, finding effective intervention points is crucial. Often, the most obvious interventions (like changing parameters) have the least impact, while deeper changes to system structure, goals, or paradigms create transformative shifts.
              </p>
              <p>
                However, leverage points can be counterintuitive. Sometimes, what seems like the most direct solution can actually make problems worse due to system interconnections and feedback delays.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* System Archetypes */}
      <section id="archetypes" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#E5DEFF] text-[#7E69AB] px-4 py-1 rounded-full text-sm font-medium">Concept 3</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">System Archetypes</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                System archetypes are recurring patterns of behavior in systems across different domains and industries. Recognizing these patterns helps identify common system traps and solutions.
              </p>
              
              <h3>Key System Archetypes in Quick Commerce</h3>
              
              <div className="my-8 space-y-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] text-xl">Fixes That Fail</h4>
                  <div className="grid md:grid-cols-5 gap-6 mt-4">
                    <div className="md:col-span-2">
                      <div className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="150" viewBox="0 0 200 150">
                          {/* Simplified "Fixes That Fail" diagram */}
                          <circle cx="60" cy="40" r="30" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="60" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="10">Problem</text>
                          
                          <circle cx="140" cy="40" r="30" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="140" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="10">Quick Fix</text>
                          
                          <circle cx="100" cy="110" r="30" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                          <text x="100" y="110" textAnchor="middle" dominantBaseline="middle" fontSize="10">Unintended Consequence</text>
                          
                          <path d="M90,40 L110,40" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
                          <text x="100" y="35" textAnchor="middle" fontSize="14">-</text>
                          
                          <path d="M140,70 Q120,90 105,90" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
                          <text x="125" y="95" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M80,100 Q60,80 60,70" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
                          <text x="60" y="85" textAnchor="middle" fontSize="14">+</text>
                          
                          <defs>
                            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        A quick fix solves a problem symptom temporarily but causes unintended consequences that make the problem worse in the long run.
                      </p>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Quick Commerce Example:</h5>
                        <p className="text-gray-700">
                          To meet delivery time promises, companies hire more drivers (quick fix). This temporarily improves delivery times but leads to driver oversupply, lower earnings per driver, increased turnover, and eventually worse service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] text-xl">Tragedy of the Commons</h4>
                  <div className="grid md:grid-cols-5 gap-6 mt-4">
                    <div className="md:col-span-2">
                      <div className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="170" viewBox="0 0 200 170">
                          {/* Simplified "Tragedy of the Commons" diagram */}
                          <circle cx="50" cy="40" r="25" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="50" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="10">Actor A</text>
                          
                          <circle cx="150" cy="40" r="25" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="150" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="10">Actor B</text>
                          
                          <circle cx="100" cy="120" r="30" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="100" y="120" textAnchor="middle" dominantBaseline="middle" fontSize="9">Shared Resource</text>
                          <text x="100" y="135" textAnchor="middle" dominantBaseline="middle" fontSize="9">(Commons)</text>
                          
                          <path d="M65,60 Q80,90 85,100" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead3)" />
                          <text x="75" y="85" textAnchor="middle" fontSize="14">-</text>
                          
                          <path d="M135,60 Q120,90 115,100" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead3)" />
                          <text x="125" y="85" textAnchor="middle" fontSize="14">-</text>
                          
                          <defs>
                            <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        When multiple actors share a limited resource, each has an incentive to maximize their own benefit, leading to overuse and degradation of the shared resource.
                      </p>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Quick Commerce Example:</h5>
                        <p className="text-gray-700">
                          Multiple quick commerce companies use the same urban roads (commons) for deliveries. Each company adds more drivers to improve their own service, collectively increasing congestion for everyone, eventually slowing down all deliveries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] text-xl">Shifting the Burden</h4>
                  <div className="grid md:grid-cols-5 gap-6 mt-4">
                    <div className="md:col-span-2">
                      <div className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="170" viewBox="0 0 200 170">
                          {/* Simplified "Shifting the Burden" diagram */}
                          <circle cx="100" cy="30" r="25" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="100" y="30" textAnchor="middle" dominantBaseline="middle" fontSize="10">Problem</text>
                          
                          <circle cx="40" cy="90" r="25" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="40" y="90" textAnchor="middle" dominantBaseline="middle" fontSize="10">Symptomatic Solution</text>
                          
                          <circle cx="160" cy="90" r="25" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="160" y="90" textAnchor="middle" dominantBaseline="middle" fontSize="10">Fundamental Solution</text>
                          
                          <circle cx="100" cy="150" r="25" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                          <text x="100" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Side Effects</text>
                          
                          <path d="M80,45 Q60,60 50,70" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead4)" />
                          <path d="M55,75 Q70,55 85,45" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead4)" />
                          <text x="60" y="45" textAnchor="middle" fontSize="14">-</text>
                          
                          <path d="M120,45 Q140,60 150,70" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead4)" />
                          <text x="140" y="45" textAnchor="middle" fontSize="14">-</text>
                          
                          <path d="M40,115 Q60,140 80,145" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead4)" />
                          <text x="60" y="140" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M120,145 Q145,130 160,115" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead4)" />
                          <text x="140" y="140" textAnchor="middle" fontSize="14">-</text>
                          
                          <defs>
                            <marker id="arrowhead4" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        A short-term, symptomatic solution is used to correct a problem, reducing the perceived need for a more fundamental solution.
                      </p>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Quick Commerce Example:</h5>
                        <p className="text-gray-700">
                          To deliver products quickly, companies stock minimal inventory and use frequent, small restocks (symptomatic solution) rather than investing in advanced inventory systems and predictive analytics (fundamental solution). This creates more delivery traffic and inefficiency over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] text-xl">Growth and Underinvestment</h4>
                  <div className="grid md:grid-cols-5 gap-6 mt-4">
                    <div className="md:col-span-2">
                      <div className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
                        <svg width="200" height="170" viewBox="0 0 200 170">
                          {/* Simplified diagram */}
                          <circle cx="50" cy="50" r="25" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="10">Demand</text>
                          
                          <circle cx="150" cy="50" r="25" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                          <text x="150" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="10">Performance</text>
                          
                          <circle cx="100" cy="120" r="25" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                          <text x="100" y="120" textAnchor="middle" dominantBaseline="middle" fontSize="10">Capacity</text>
                          
                          <path d="M75,50 L125,50" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead5)" />
                          <text x="100" y="45" textAnchor="middle" fontSize="14">-</text>
                          
                          <path d="M135,70 Q120,95 105,100" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead5)" />
                          <text x="120" y="95" textAnchor="middle" fontSize="14">+</text>
                          
                          <path d="M85,105 Q70,80 65,70" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead5)" />
                          <text x="65" y="90" textAnchor="middle" fontSize="14">+</text>
                          
                          <defs>
                            <marker id="arrowhead5" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-gray-700">
                        Growth approaches a limit which can be eliminated or raised by building capacity, but investment in capacity is delayed or insufficient.
                      </p>
                      <div className="mt-4 bg-[#FEF7CD] p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Quick Commerce Example:</h5>
                        <p className="text-gray-700">
                          A quick commerce company experiences rapid growth but underinvests in its technology infrastructure. As demand increases, the system becomes strained, leading to slower delivery times and reduced customer satisfaction, eventually limiting growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Using Archetypes to Improve Quick Commerce</h3>
              <p>
                Recognizing these patterns allows stakeholders to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Anticipate problems before they occur</li>
                <li>Understand the deeper structures causing recurring issues</li>
                <li>Design interventions that address root causes rather than symptoms</li>
                <li>Apply proven solutions from other domains that have faced similar archetypal challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stocks and Flows */}
      <section id="stocks" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#F2FCE2] text-green-600 px-4 py-1 rounded-full text-sm font-medium">Concept 4</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">Stocks & Flows</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Stocks and flows are the fundamental building blocks of systems thinking. They provide a precise way to describe and quantify how systems behave over time.
              </p>
              
              <div className="my-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4">Basic Concepts</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#1A1F2C] mb-3">Stocks</h4>
                    <p className="text-gray-700">
                      Stocks are accumulations or stores of materials, information, or other quantities that can be measured at one specific time.
                    </p>
                    <div className="mt-4 p-3 bg-gray-50 rounded">
                      <p className="text-gray-600 text-sm font-medium">Quick Commerce Examples:</p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                        <li>Inventory in fulfillment centers</li>
                        <li>Number of active delivery drivers</li>
                        <li>Customer base</li>
                        <li>Infrastructure (dark stores)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1F2C] mb-3">Flows</h4>
                    <p className="text-gray-700">
                      Flows represent the movement of materials, information, or other quantities into or out of stocks over time.
                    </p>
                    <div className="mt-4 p-3 bg-gray-50 rounded">
                      <p className="text-gray-600 text-sm font-medium">Quick Commerce Examples:</p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                        <li>Rate of inventory restocking</li>
                        <li>Driver hiring and turnover rates</li>
                        <li>Customer acquisition and churn rates</li>
                        <li>Opening of new dark store locations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 p-4 rounded-lg flex justify-center">
                  <div>
                    <h4 className="font-semibold text-center mb-4">Simple Stock and Flow Diagram</h4>
                    <svg width="500" height="120" viewBox="0 0 500 120">
                      {/* Inflow */}
                      <rect x="50" y="50" width="100" height="40" rx="5" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                      <text x="100" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="12">Inflow</text>
                      
                      {/* Stock */}
                      <rect x="200" y="40" width="100" height="60" rx="0" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                      <text x="250" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="12">Stock</text>
                      
                      {/* Outflow */}
                      <rect x="350" y="50" width="100" height="40" rx="5" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                      <text x="400" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="12">Outflow</text>
                      
                      {/* Connections */}
                      <path d="M150,70 L200,70" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead6)" />
                      <path d="M300,70 L350,70" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead6)" />
                      
                      <defs>
                        <marker id="arrowhead6" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              
              <h3>Quick Commerce Stock and Flow Example</h3>
              <p>
                In quick commerce, we can model the delivery capacity system:
              </p>
              
              <div className="my-6 bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gray-50 p-4 rounded-lg flex justify-center">
                  <svg width="600" height="220" viewBox="0 0 600 220">
                    {/* Driver Recruitment Flow */}
                    <rect x="30" y="80" width="100" height="40" rx="5" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                    <text x="80" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="12">Driver Recruitment</text>
                    
                    {/* Driver Stock */}
                    <rect x="200" y="70" width="100" height="60" rx="0" fill="#FDE1D3" stroke="#F97316" strokeWidth="2" />
                    <text x="250" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="12">Available Drivers</text>
                    
                    {/* Driver Attrition Flow */}
                    <rect x="370" y="80" width="100" height="40" rx="5" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="2" />
                    <text x="420" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="12">Driver Attrition</text>
                    
                    {/* Order Volume (influencing factor) */}
                    <circle cx="250" cy="180" r="30" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                    <text x="250" y="180" textAnchor="middle" dominantBaseline="middle" fontSize="12">Order Volume</text>
                    
                    {/* Driver Earnings (influencing factor) */}
                    <circle cx="420" cy="180" r="30" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="2" />
                    <text x="420" y="180" textAnchor="middle" dominantBaseline="middle" fontSize="11">Driver Earnings</text>
                    
                    {/* Consumer Satisfaction (influencing factor) */}
                    <circle cx="100" cy="30" r="30" fill="#F2FCE2" stroke="green" strokeWidth="2" />
                    <text x="100" y="30" textAnchor="middle" dominantBaseline="middle" fontSize="11">Consumer Satisfaction</text>
                    
                    {/* Connections */}
                    <path d="M130,100 L200,100" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead7)" />
                    <path d="M300,100 L370,100" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead7)" />
                    
                    {/* Influence arrows */}
                    <path d="M250,150 L250,130" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead7)" stroke-dasharray="4,4" />
                    <text x="260" y="145" textAnchor="middle" fontSize="14">+</text>
                    
                    <path d="M390,170 Q360,140 340,120" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead7)" stroke-dasharray="4,4" />
                    <text x="360" y="145" textAnchor="middle" fontSize="14">-</text>
                    
                    <path d="M130,170 Q170,140 180,120" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead7)" stroke-dasharray="4,4" />
                    <text x="155" y="145" textAnchor="middle" fontSize="14">+</text>
                    
                    <path d="M130,40 Q180,40 200,60" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead7)" stroke-dasharray="4,4" />
                    <text x="170" y="35" textAnchor="middle" fontSize="14">+</text>
                    
                    <path d="M300,70 Q350,50 390,50" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead7)" stroke-dasharray="4,4" />
                    <text x="350" y="45" textAnchor="middle" fontSize="14">-</text>
                    
                    <defs>
                      <marker id="arrowhead7" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <div className="mt-4 text-gray-700">
                  <p className="mb-3">
                    In this example:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Stock:</strong> Available Drivers (the current number of drivers ready to make deliveries)</li>
                    <li><strong>Inflow:</strong> Driver Recruitment (the rate at which new drivers join)</li>
                    <li><strong>Outflow:</strong> Driver Attrition (the rate at which drivers leave)</li>
                    <li><strong>Influences:</strong> Order volume increases recruitment (more jobs available), but decreased driver earnings increases attrition. Consumer satisfaction affects recruitment positively (good reputation for drivers), while good driver availability reduces attrition.</li>
                  </ul>
                </div>
              </div>
              
              <h3>Why Stocks and Flows Matter</h3>
              <p>
                Understanding stocks and flows helps identify:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>System inertia (how quickly systems can change)</li>
                <li>Accumulations that might be hidden or overlooked</li>
                <li>Delays between actions and effects</li>
                <li>Potential system constraints and bottlenecks</li>
              </ul>
              <p>
                For quick commerce, stock and flow thinking reveals critical dynamics like how sustainable growth depends on balancing multiple flows (customer acquisition, infrastructure development, workforce management) to prevent system collapse.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* System Boundaries */}
      <section id="boundaries" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#FFDEE2] text-red-500 px-4 py-1 rounded-full text-sm font-medium">Concept 5</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">System Boundaries</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                System boundaries define what is included in and excluded from a system analysis. Setting appropriate boundaries is crucial for understanding complex systems like quick commerce.
              </p>
              
              <h3>Importance of System Boundaries</h3>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">Too Narrow</h4>
                  <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg width="200" height="120" viewBox="0 0 200 120">
                      <rect x="40" y="20" width="120" height="80" rx="5" fill="none" stroke="#F97316" strokeWidth="2" stroke-dasharray="5,5" />
                      <circle cx="70" cy="60" r="20" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                      <circle cx="130" cy="60" r="20" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                      <path d="M90,60 L110,60" fill="none" stroke="#000" strokeWidth="1" />
                      
                      <circle cx="30" cy="30" r="15" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" opacity="0.3" />
                      <circle cx="170" cy="90" r="15" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" opacity="0.3" />
                      <circle cx="40" cy="100" r="15" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" opacity="0.3" />
                      
                      <text x="100" y="15" textAnchor="middle" fontSize="10" fontWeight="bold">System Boundary (Too Narrow)</text>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    If boundaries are too narrow, important influences and impacts are missed, leading to incomplete analysis and partial solutions.
                  </p>
                  <p className="mt-2 text-gray-700 text-sm italic">
                    <strong>Example:</strong> Only considering delivery logistics without urban traffic systems.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-[#1A1F2C] mb-3">Too Broad</h4>
                  <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg width="200" height="120" viewBox="0 0 200 120">
                      <rect x="10" y="10" width="180" height="100" rx="5" fill="none" stroke="#F97316" strokeWidth="2" stroke-dasharray="5,5" />
                      <circle cx="70" cy="60" r="15" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                      <circle cx="130" cy="60" r="15" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                      <circle cx="30" cy="30" r="10" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <circle cx="170" cy="90" r="10" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <circle cx="40" cy="100" r="10" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <circle cx="160" cy="30" r="10" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <circle cx="100" cy="20" r="10" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <circle cx="120" cy="100" r="10" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      
                      <text x="100" y="5" textAnchor="middle" fontSize="10" fontWeight="bold">System Boundary (Too Broad)</text>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    If boundaries are too broad, the analysis becomes unwieldy, and it's difficult to identify meaningful interventions.
                  </p>
                  <p className="mt-2 text-gray-700 text-sm italic">
                    <strong>Example:</strong> Including all global supply chains in a local quick commerce analysis.
                  </p>
                </div>
              </div>
              
              <h3>Quick Commerce System Boundaries</h3>
              <p>
                When analyzing quick commerce, boundaries might include various levels:
              </p>
              
              <div className="my-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-xl mb-4 text-[#1A1F2C]">Multi-Level System Boundaries</h4>
                  <div className="bg-gray-50 p-4 rounded-lg flex justify-center">
                    <svg width="500" height="300" viewBox="0 0 500 300">
                      {/* Outermost boundary */}
                      <rect x="50" y="20" width="400" height="260" rx="10" fill="none" stroke="#7E69AB" strokeWidth="2" stroke-dasharray="5,5" />
                      <text x="250" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#7E69AB">Societal Level</text>
                      
                      {/* Middle boundary */}
                      <rect x="80" y="60" width="340" height="180" rx="8" fill="none" stroke="#F97316" strokeWidth="2" stroke-dasharray="5,5" />
                      <text x="250" y="80" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#F97316">Urban Ecosystem</text>
                      
                      {/* Inner boundary */}
                      <rect x="120" y="100" width="260" height="100" rx="6" fill="none" stroke="#0EA5E9" strokeWidth="2" stroke-dasharray="5,5" />
                      <text x="250" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0EA5E9">Quick Commerce Operations</text>
                      
                      {/* Components */}
                      <circle cx="170" cy="150" r="20" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                      <text x="170" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Delivery</text>
                      
                      <circle cx="250" cy="150" r="20" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                      <text x="250" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Inventory</text>
                      
                      <circle cx="330" cy="150" r="20" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                      <text x="330" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10">Customers</text>
                      
                      {/* Urban elements */}
                      <circle cx="160" cy="210" r="15" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <text x="160" y="210" textAnchor="middle" dominantBaseline="middle" fontSize="8">Traffic</text>
                      
                      <circle cx="230" cy="210" r="15" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <text x="230" y="210" textAnchor="middle" dominantBaseline="middle" fontSize="8">Retail</text>
                      
                      <circle cx="300" cy="210" r="15" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                      <text x="300" y="210" textAnchor="middle" dominantBaseline="middle" fontSize="8">Urban Space</text>
                      
                      {/* Societal elements */}
                      <circle cx="110" cy="250" r="12" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="1" />
                      <text x="110" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="7">Labor</text>
                      
                      <circle cx="180" cy="250" r="12" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="1" />
                      <text x="180" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="7">Environment</text>
                      
                      <circle cx="250" cy="250" r="12" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="1" />
                      <text x="250" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="7">Economy</text>
                      
                      <circle cx="320" cy="250" r="12" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="1" />
                      <text x="320" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="7">Regulation</text>
                      
                      <circle cx="390" cy="250" r="12" fill="#E5DEFF" stroke="#7E69AB" strokeWidth="1" />
                      <text x="390" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="7">Culture</text>
                    </svg>
                  </div>
                  <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-[#0EA5E9]">Quick Commerce Operations</h5>
                      <ul className="list-disc pl-5 text-gray-700 mt-1">
                        <li>Delivery logistics</li>
                        <li>Inventory management</li>
                        <li>Customer experience</li>
                        <li>Technology systems</li>
                        <li>Workforce management</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#F97316]">Urban Ecosystem</h5>
                      <ul className="list-disc pl-5 text-gray-700 mt-1">
                        <li>Traffic patterns</li>
                        <li>Local retail impacts</li>
                        <li>Urban space utilization</li>
                        <li>Infrastructure demands</li>
                        <li>Noise and congestion</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#7E69AB]">Societal Level</h5>
                      <ul className="list-disc pl-5 text-gray-700 mt-1">
                        <li>Labor market effects</li>
                        <li>Environmental sustainability</li>
                        <li>Economic impacts</li>
                        <li>Regulatory frameworks</li>
                        <li>Cultural norms and values</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Choosing Appropriate Boundaries</h3>
              <p>
                When defining system boundaries for quick commerce analysis:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consider the specific question or problem you're addressing</li>
                <li>Include elements that have significant influence or are significantly influenced</li>
                <li>Be aware of what's being excluded and why</li>
                <li>Be prepared to adjust boundaries as learning progresses</li>
                <li>Consider different time horizons (immediate, medium-term, long-term impacts)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* System Delays */}
      <section id="delays" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#FEF7CD] text-yellow-600 px-4 py-1 rounded-full text-sm font-medium">Concept 6</span>
              <h2 className="text-3xl font-bold mt-3 mb-6 text-[#1A1F2C]">System Delays</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Delays are a critical factor in systems, often causing oscillations, overshooting, or unexpected behavior. In quick commerce, understanding delays is essential for sustainable system design.
              </p>
              
              <div className="my-8 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-[#1A1F2C] mb-4">Types of Delays</h3>
                  
                  <div className="space-y-4">
                    <div className="p-3 border-l-4 border-[#0EA5E9] bg-[#D3E4FD]/30">
                      <h4 className="font-semibold text-[#1A1F2C]">Material Delays</h4>
                      <p className="text-gray-700 text-sm">
                        Physical movements of goods, people, or materials through the system.
                      </p>
                      <p className="text-gray-600 text-sm italic mt-1">
                        Example: Time for inventory to move from warehouse to dark store to customer
                      </p>
                    </div>
                    
                    <div className="p-3 border-l-4 border-[#F97316] bg-[#FDE1D3]/30">
                      <h4 className="font-semibold text-[#1A1F2C]">Information Delays</h4>
                      <p className="text-gray-700 text-sm">
                        Time required for information to be transmitted, processed, and acted upon.
                      </p>
                      <p className="text-gray-600 text-sm italic mt-1">
                        Example: Lag between customer behavior changes and inventory adjustments
                      </p>
                    </div>
                    
                    <div className="p-3 border-l-4 border-[#7E69AB] bg-[#E5DEFF]/30">
                      <h4 className="font-semibold text-[#1A1F2C]">Perception Delays</h4>
                      <p className="text-gray-700 text-sm">
                        Time taken to update mental models and understand changes in system state.
                      </p>
                      <p className="text-gray-600 text-sm italic mt-1">
                        Example: Time for managers to recognize changing customer preferences
                      </p>
                    </div>
                    
                    <div className="p-3 border-l-4 border-green-500 bg-[#F2FCE2]/30">
                      <h4 className="font-semibold text-[#1A1F2C]">Response Delays</h4>
                      <p className="text-gray-700 text-sm">
                        Time required to make decisions and implement actions after information is received.
                      </p>
                      <p className="text-gray-600 text-sm italic mt-1">
                        Example: Time to adjust workforce size in response to shifting demand
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-[#1A1F2C] mb-4">Delay Effects in Systems</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#1A1F2C] mb-2">Overshooting & Oscillation</h4>
                      <div className="bg-gray-100 p-3 rounded-lg flex justify-center">
                        <svg width="280" height="120" viewBox="0 0 280 120">
                          {/* Axes */}
                          <line x1="40" y1="100" x2="250" y2="100" stroke="black" strokeWidth="1" />
                          <line x1="40" y1="20" x2="40" y2="100" stroke="black" strokeWidth="1" />
                          
                          {/* Oscillating curve */}
                          <path d="M40,60 C60,20 80,100 100,60 C120,20 140,100 160,60 C180,20 200,100 220,60" fill="none" stroke="#F97316" strokeWidth="2" />
                          
                          {/* Target line */}
                          <path d="M40,60 L250,60" fill="none" stroke="#0EA5E9" strokeWidth="1" stroke-dasharray="4,4" />
                          
                          {/* Labels */}
                          <text x="145" y="115" textAnchor="middle" fontSize="10">Time</text>
                          <text x="30" y="60" textAnchor="end" fontSize="10" dominantBaseline="middle">Target</text>
                          <text x="230" y="40" textAnchor="start" fontSize="10" fill="#F97316">System with delays</text>
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">
                        When delays exist in feedback loops, systems often overshoot targets and oscillate instead of smoothly adjusting.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#1A1F2C] mb-2">Disconnection Between Cause and Effect</h4>
                      <div className="bg-gray-100 p-3 rounded-lg flex justify-center">
                        <svg width="280" height="80" viewBox="0 0 280 80">
                          <rect x="40" y="30" width="60" height="30" rx="5" fill="#D3E4FD" stroke="#0EA5E9" strokeWidth="1" />
                          <text x="70" y="45" textAnchor="middle" dominantBaseline="middle" fontSize="10">Cause</text>
                          
                          <rect x="180" y="30" width="60" height="30" rx="5" fill="#FDE1D3" stroke="#F97316" strokeWidth="1" />
                          <text x="210" y="45" textAnchor="middle" dominantBaseline="middle" fontSize="10">Effect</text>
                          
                          <path d="M100,45 L180,45" fill="none" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead8)" />
                          
                          <path d="M140,35 Q140,25 140,15 Q140,5 150,5 Q160,5 160,15 Q160,25 160,35" fill="none" stroke="black" strokeWidth="1" />
                          <text x="150" y="15" textAnchor="middle" dominantBaseline="middle" fontSize="10">Delay</text>
                          
                          <defs>
                            <marker id="arrowhead8" markerWidth="10" markerHeight="7" refX="7" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">
                        Delays make it difficult to connect causes with their effects, leading to misdiagnosis of problems or inappropriate solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Quick Commerce System Delays</h3>
              <div className="my-8 bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-[#1A1F2C] mb-3">Operational Delays</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>
                        <span className="font-medium">Order Processing:</span> Time between order placement and when drivers are dispatched
                      </li>
                      <li>
                        <span className="font-medium">Inventory Replenishment:</span> Time to detect stock shortages and receive new inventory
                      </li>
                      <li>
                        <span className="font-medium">Driver Availability:</span> Time to recruit and onboard new delivery personnel when demand increases
                      </li>
                      <li>
                        <span className="font-medium">Infrastructure Development:</span> Time to establish new dark stores or micro-fulfillment centers
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1F2C] mb-3">Longer-Term Delays</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>
                        <span className="font-medium">Urban Adaptation:</span> Time for city infrastructure to adjust to new delivery traffic patterns
                      </li>
                      <li>
                        <span className="font-medium">Labor Market:</span> Time for worker supply to respond to changing quick commerce needs
                      </li>
                      <li>
                        <span className="font-medium">Competitive Response:</span> Time for traditional retailers to adapt strategies to quick commerce competition
                      </li>
                      <li>
                        <span className="font-medium">Regulatory Response:</span> Time for policymakers to understand impacts and develop appropriate regulations
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-[#FEF7CD]/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#1A1F2C] mb-2">Case Example: The Driver Supply Delay</h4>
                  <p className="text-gray-700">
                    When quick commerce demand spikes (e.g., during holidays), companies need more drivers. However, there's a delay between recognizing the need, recruiting drivers, and onboarding them. By the time new drivers are ready, demand may have already decreased, creating driver oversupply, which reduces earnings and increases turnover—creating another delay before the system stabilizes again.
                  </p>
                </div>
              </div>
              
              <h3>Managing System Delays</h3>
              <p>
                To handle delays effectively in quick commerce systems:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify and measure critical delays in the system</li>
                <li>Design feedback mechanisms that account for delays</li>
                <li>Use forecasting to anticipate needs before they become urgent</li>
                <li>Build adequate buffers into the system where appropriate</li>
                <li>Improve information flows to reduce perception and response delays</li>
                <li>Communicate transparently about expected delays to manage expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Steps */}
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Apply These Concepts?</h2>
            <p className="text-xl mb-8">
              Now that you understand the key concepts of systems thinking, let's see how they apply to the rise of quick commerce in our case study.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6] text-lg px-8 py-6">
                <Link to="/case-study">Explore Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Concepts;
