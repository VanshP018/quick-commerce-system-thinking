
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Systems Thinking Resources</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Explore tools, books, and organizations to deepen your understanding of systems thinking
          </p>
        </div>
      </section>
      
      {/* Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-[#1A1F2C]">Essential Reading</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Thinking in Systems: A Primer</h3>
                  <p className="text-gray-600 mb-1">Donella H. Meadows</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Foundational text</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The essential introduction to systems thinking by one of its most influential practitioners. Meadows explains the basic concepts of stocks, flows, feedback loops, and leverage points with clear examples and compelling insights.
                  </p>
                  <a 
                    href="https://www.chelseagreen.com/product/thinking-in-systems/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#0EA5E9] inline-flex items-center group"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">The Fifth Discipline</h3>
                  <p className="text-gray-600 mb-1">Peter M. Senge</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Business classic</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A landmark work on how organizations can become "learning organizations" through systems thinking, personal mastery, mental models, shared vision, and team learning. Particularly valuable for understanding organizational dynamics.
                  </p>
                  <a 
                    href="https://www.penguinrandomhouse.com/books/163984/the-fifth-discipline-by-peter-m-senge/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#0EA5E9] inline-flex items-center group"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Limits to Growth</h3>
                  <p className="text-gray-600 mb-1">Donella H. Meadows, Dennis L. Meadows, Jørgen Randers, William W. Behrens III</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Classic study</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This groundbreaking 1972 study used system dynamics to model global development and environmental impact. Despite its age, its core insights about feedback loops in global systems remain highly relevant.
                  </p>
                  <a 
                    href="https://www.chelseagreen.com/product/limits-to-growth/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#0EA5E9] inline-flex items-center group"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">Seeing Systems</h3>
                  <p className="text-gray-600 mb-1">Barry Oshry</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Social systems</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Focuses on understanding human systems and the patterns that emerge in organizations and groups. Particularly strong on how position within a system shapes perspective and behavior.
                  </p>
                  <a 
                    href="https://www.bkconnection.com/books/title/Seeing-Systems" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#0EA5E9] inline-flex items-center group"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-[#1A1F2C]">Systems Thinking Tools</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="h-full bg-[#D3E4FD] rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0EA5E9] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                      <h3 className="text-xl font-bold text-[#0EA5E9]">Causal Loop Diagrams</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-lg mb-2 text-[#1A1F2C]">Visual Mapping of System Relationships</h4>
                    <p className="text-gray-700 mb-4">
                      CLDs are powerful visualization tools that show how variables in a system influence each other through feedback loops.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-[#1A1F2C]">Software Tools:</h5>
                        <ul className="list-disc pl-6 text-gray-700 text-sm mt-1">
                          <li><a href="https://kumu.io/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Kumu</a> - Web-based tool for mapping relationships</li>
                          <li><a href="https://vensim.com/free-download/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Vensim PLE</a> - Free version of professional system dynamics software</li>
                          <li><a href="https://insightmaker.com/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Insight Maker</a> - Free online modeling tool</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-[#1A1F2C]">Tutorials:</h5>
                        <ul className="list-disc pl-6 text-gray-700 text-sm mt-1">
                          <li><a href="https://thesystemsthinker.com/causal-loop-construction-the-basics/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Causal Loop Construction: The Basics</a> by The Systems Thinker</li>
                          <li><a href="https://www.youtube.com/watch?v=saJTc4Xxy3I" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Introduction to Causal Loops</a> by Systems Innovation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="h-full bg-[#FDE1D3] rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#F97316] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" />
                      </svg>
                      <h3 className="text-xl font-bold text-[#F97316]">Stock and Flow Diagrams</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-lg mb-2 text-[#1A1F2C]">Quantifying System Behavior Over Time</h4>
                    <p className="text-gray-700 mb-4">
                      Stock and flow diagrams take system visualization further by quantifying accumulations and rates of change, allowing for more precise modeling and simulation.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-[#1A1F2C]">Software Tools:</h5>
                        <ul className="list-disc pl-6 text-gray-700 text-sm mt-1">
                          <li><a href="https://vensim.com/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Vensim</a> - Professional system dynamics modeling software</li>
                          <li><a href="https://www.anylogic.com/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">AnyLogic</a> - Multi-method simulation platform</li>
                          <li><a href="https://www.stelladesigner.com/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Stella Architect</a> - Visual system dynamics modeling platform</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-[#1A1F2C]">Tutorials:</h5>
                        <ul className="list-disc pl-6 text-gray-700 text-sm mt-1">
                          <li><a href="https://systemdynamics.org/resource/intro-to-stock-flow-models/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Introduction to Stock & Flow Models</a> by System Dynamics Society</li>
                          <li><a href="https://www.youtube.com/watch?v=p4YqcsfAGjY" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">Stock and Flow Diagrams</a> by MIT OpenCourseWare</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="h-full bg-[#E5DEFF] rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#7E69AB] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-bold text-[#7E69AB]">System Archetypes</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-lg mb-2 text-[#1A1F2C]">Identifying Common System Patterns</h4>
                    <p className="text-gray-700 mb-4">
                      System archetypes are recurring patterns of system behavior found across different domains, helping analysts recognize common traps and solutions.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-[#1A1F2C]">Key Archetypes:</h5>
                        <ul className="list-disc pl-6 text-gray-700 text-sm mt-1">
                          <li>Limits to Growth</li>
                          <li>Shifting the Burden</li>
                          <li>Tragedy of the Commons</li>
                          <li>Success to the Successful</li>
                          <li>Fixes That Fail</li>
                          <li>Growth and Underinvestment</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-[#1A1F2C]">Resources:</h5>
                        <ul className="list-disc pl-6 text-gray-700 text-sm mt-1">
                          <li><a href="https://thesystemsthinker.com/the-nature-and-creation-of-systemic-patterns/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">The Nature and Creation of Systemic Patterns</a> by The Systems Thinker</li>
                          <li><a href="https://systemsarchitect.net/system-archetypes/" target="_blank" rel="noopener noreferrer" className="text-[#0EA5E9] hover:underline">System Archetype Examples</a> by Gene Bellinger</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Organizations */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-[#1A1F2C]">Organizations & Communities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#1A1F2C]">System Dynamics Society</h3>
                <p className="text-gray-700 mb-4">
                  International organization devoted to encouraging the development and use of system dynamics and systems thinking. Offers resources, conferences, and a peer-reviewed journal.
                </p>
                <a 
                  href="https://systemdynamics.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0EA5E9] inline-flex items-center group"
                >
                  Visit Website <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#1A1F2C]">The Systems Thinker</h3>
                <p className="text-gray-700 mb-4">
                  Resource website offering articles, guides, and tools for practicing systems thinking. Their archives contain decades of valuable content on systems concepts and applications.
                </p>
                <a 
                  href="https://thesystemsthinker.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0EA5E9] inline-flex items-center group"
                >
                  Visit Website <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#1A1F2C]">Creative Learning Exchange</h3>
                <p className="text-gray-700 mb-4">
                  Nonprofit organization focused on promoting systems thinking and system dynamics in K-12 education. Offers curriculum materials, tools, and training for educators.
                </p>
                <a 
                  href="http://www.clexchange.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0EA5E9] inline-flex items-center group"
                >
                  Visit Website <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#1A1F2C]">Waters Center for Systems Thinking</h3>
                <p className="text-gray-700 mb-4">
                  Provides education, tools, and resources to help individuals, schools, and organizations adopt a systems thinking approach to problem-solving and leadership.
                </p>
                <a 
                  href="https://waterscenterst.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0EA5E9] inline-flex items-center group"
                >
                  Visit Website <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Online Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-[#1A1F2C]">Online Learning Resources</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1F2C]">MIT System Dynamics Courses</h3>
                    <p className="text-gray-700 mt-1">
                      Free online courses from MIT's Sloan School of Management covering system dynamics fundamentals.
                    </p>
                  </div>
                  <a 
                    href="https://ocw.mit.edu/courses/sloan-school-of-management/15-871-introduction-to-system-dynamics-fall-2013/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="md:flex-shrink-0"
                  >
                    <Button className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                      Access Course
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1F2C]">Systems Innovation MOOC</h3>
                    <p className="text-gray-700 mt-1">
                      Comprehensive online course covering systems thinking, complexity theory, and network analysis.
                    </p>
                  </div>
                  <a 
                    href="https://www.systemsinnovation.io/course" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="md:flex-shrink-0"
                  >
                    <Button className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                      Access Course
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1F2C]">Complexity Explorer</h3>
                    <p className="text-gray-700 mt-1">
                      Free courses on complex systems from the Santa Fe Institute, covering concepts closely related to systems thinking.
                    </p>
                  </div>
                  <a 
                    href="https://www.complexityexplorer.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="md:flex-shrink-0"
                  >
                    <Button className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                      Access Course
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1F2C]">Climate Interactive Simulations</h3>
                    <p className="text-gray-700 mt-1">
                      Interactive system dynamics models focused on climate change and sustainability. Excellent practical application of systems thinking.
                    </p>
                  </div>
                  <a 
                    href="https://www.climateinteractive.org/tools/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="md:flex-shrink-0"
                  >
                    <Button className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                      Try Simulations
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved in the Systems Thinking Hackathon</h2>
            <p className="text-xl mb-8">
              Interested in joining future events or learning more about how systems thinking can be applied to complex challenges?
            </p>
            <div className="flex justify-center">
              <a href="mailto:info@systemthinkinghackathon.org">
                <Button className="bg-[#0EA5E9] hover:bg-[#0c8bc6] text-lg px-8 py-6">
                  Contact Us
                </Button>
              </a>
            </div>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0EA5E9] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@systemthinkinghackathon.org</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0EA5E9] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span>Join our Slack community</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
