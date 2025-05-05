
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Concepts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Causal Loop Diagrams & System Analysis</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-gray-300">
            Visualizing the complex interconnections and feedback mechanisms driving quick commerce
          </p>
        </div>
      </section>

      {/* CLD Explanation */}
      <section className="py-16 bg-white" id="cld">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C] border-b pb-4">Understanding Causal Loop Diagrams</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg mb-4 text-gray-700">
                  Causal Loop Diagrams (CLDs) are visual tools that map how variables in a system influence each other through reinforcing (R) and balancing (B) feedback loops.
                </p>
                <p className="text-gray-700">
                  In our analysis of quick commerce, we identified several critical feedback loops that explain why the system behaves as it does—and where interventions might be most effective.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-[#1A1F2C]">Key CLD Components</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">→</span>
                    <span>Arrows show causal relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">+</span>
                    <span>Variables change in same direction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">−</span>
                    <span>Variables change in opposite directions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">R</span>
                    <span>Reinforcing loops amplify change</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">B</span>
                    <span>Balancing loops counteract change</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Environmental Impact Loop */}
            <div className="bg-white shadow-lg rounded-xl p-6 mb-12 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">Environmental Impact Loop (R1)</h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/a46333a6-65b7-4ab8-ac8d-04e2d1e3ddea.png"
                    alt="Environmental impact causal loop diagram" 
                    className="w-full h-auto rounded-lg shadow-md hover-scale"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Reinforcing Loop R1</span> shows how consumer demand for fast delivery increases the frequency of small, fragmented deliveries, driving up packaging material use and carbon emissions from delivery vehicles.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This creates a self-reinforcing cycle of environmental degradation that remains largely invisible to consumers who only experience the convenience.
                  </p>
                  <div className="bg-[#D3E4FD] p-4 rounded-lg mt-6">
                    <h4 className="font-medium mb-2">Key Insight:</h4>
                    <p>Environmental costs are externalized from the transaction, allowing the speed-focused model to thrive despite sustainability concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Consumer Satisfaction Loop */}
            <div className="bg-white shadow-lg rounded-xl p-6 mb-12 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">Service Speed & Consumer Satisfaction Loop (R2)</h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Reinforcing Loop R2</span> demonstrates how consumer demand for ultra-fast delivery creates operational pressure on companies to focus exclusively on speed.
                  </p>
                  <p className="text-gray-700 mb-4">
                    As delivery speeds increase, consumer satisfaction grows, which further reinforces demand for ultra-fast delivery, creating an "arms race" among quick commerce providers.
                  </p>
                  <div className="bg-[#FDE1D3] p-4 rounded-lg mt-6">
                    <h4 className="font-medium mb-2">Key Insight:</h4>
                    <p>This feedback loop continuously raises consumer expectations, locking companies into increasingly challenging speed requirements.</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/a46333a6-65b7-4ab8-ac8d-04e2d1e3ddea.png"
                    alt="Consumer satisfaction causal loop diagram" 
                    className="w-full h-auto rounded-lg shadow-md hover-scale"
                  />
                </div>
              </div>
            </div>
            
            {/* Worker Welfare Loop */}
            <div className="bg-white shadow-lg rounded-xl p-6 mb-12 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">Worker Welfare & Turnover Loop (B1)</h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/a46333a6-65b7-4ab8-ac8d-04e2d1e3ddea.png"
                    alt="Worker welfare causal loop diagram" 
                    className="w-full h-auto rounded-lg shadow-md hover-scale"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Balancing Loop B1</span> reveals an important counterforce in the system: as delivery speeds increase to meet consumer demands, delivery worker stress and burnout also increase.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This leads to higher workforce turnover, which ultimately affects delivery speed negatively, creating a balancing mechanism within the system.
                  </p>
                  <div className="bg-[#E5DEFF] p-4 rounded-lg mt-6">
                    <h4 className="font-medium mb-2">Key Insight:</h4>
                    <p>Worker welfare represents a natural limit to how fast deliveries can occur in a sustainable system, though companies often try to overcome this through algorithmic management and gig work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Structure Analysis */}
      <section className="py-16 bg-gray-50" id="structure">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Event → Pattern → Structure Analysis</h2>
            
            <div className="mb-10">
              <p className="text-lg mb-6 text-gray-700">
                Systems thinking views events as surface manifestations of deeper patterns and underlying system structures. For quick commerce, we used the Iceberg Framework to analyze:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Events (Surface)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Late deliveries</li>
                    <li>• Worker protests</li>
                    <li>• Environmental concerns</li>
                    <li>• Customer complaints</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Patterns (Trends)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Increasing delivery speeds</li>
                    <li>• Rising turnover rates</li>
                    <li>• Growing packaging waste</li>
                    <li>• Inflating consumer expectations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Structures (Root)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Speed-only performance metrics</li>
                    <li>• Gig-based compensation models</li>
                    <li>• Centralized hub-and-spoke networks</li>
                    <li>• Unsustainable business practices</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">Iceberg Framework Analysis</h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/b7d08b2f-4862-4da7-923a-5a7839654511.png"
                    alt="Iceberg model analysis" 
                    className="w-full h-auto rounded-lg shadow-md hover-scale"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-6">
                    Our analysis reveals that current solutions in quick commerce primarily target surface events or patterns, rather than addressing deeper structural issues that perpetuate problems.
                  </p>
                  <p className="text-gray-700">
                    For lasting change, interventions must focus on structural elements like labor models, distribution networks, performance metrics, and the paradigm around sustainability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                <Link to="/case-study">View Leverage Points Analysis <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Concepts;
