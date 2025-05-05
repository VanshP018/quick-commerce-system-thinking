
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Concepts = () => {
  // Data extracted from the CLD images
  const feedbackLoops = [
    {
      name: "Environmental Impact Loop (R1)",
      type: "Reinforcing",
      description: "Consumer demand for fast delivery increases small, fragmented deliveries, driving up packaging waste and emissions.",
      key_elements: ["Consumer demand", "Delivery frequency", "Package waste", "Carbon emissions"],
      insight: "Environmental costs are externalized from the transaction, allowing the speed-focused model to thrive despite sustainability concerns."
    },
    {
      name: "Service Speed & Consumer Satisfaction Loop (R2)",
      type: "Reinforcing",
      description: "Consumer demand creates operational pressure to focus on speed, leading to faster delivery and higher satisfaction, further reinforcing demand.",
      key_elements: ["Consumer demand", "Operational pressure", "Delivery speed", "Consumer satisfaction"],
      insight: "This feedback loop continuously raises consumer expectations, locking companies into increasingly challenging speed requirements."
    },
    {
      name: "Worker Welfare & Turnover Loop (B1)",
      type: "Balancing",
      description: "As delivery speeds increase, worker stress and burnout rise, leading to higher turnover and ultimately affecting delivery speed negatively.",
      key_elements: ["Delivery speed", "Worker stress", "Workforce turnover", "Service quality"],
      insight: "Worker welfare represents a natural limit to how fast deliveries can occur in a sustainable system."
    }
  ];

  // Iceberg model analysis data
  const icebergLevels = [
    {
      level: "Events (Surface)",
      examples: [
        "Late deliveries",
        "Worker protests",
        "Environmental concerns",
        "Customer complaints"
      ]
    },
    {
      level: "Patterns (Trends)",
      examples: [
        "Increasing delivery speeds",
        "Rising turnover rates",
        "Growing packaging waste",
        "Inflating consumer expectations"
      ]
    },
    {
      level: "Structures (Root)",
      examples: [
        "Speed-only performance metrics",
        "Gig-based compensation models",
        "Centralized hub-and-spoke networks",
        "Unsustainable business practices"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">Causal Loop Diagrams & System Analysis</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-gray-300">
            Visualizing the complex interconnections and feedback mechanisms driving quick commerce
          </p>
        </div>
      </section>

      {/* CLD Explanation */}
      <section className="py-16 bg-white" id="cld">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C] border-b pb-4 animate-fade-in">Understanding Causal Loop Diagrams</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg mb-4 text-gray-700">
                  Causal Loop Diagrams (CLDs) are visual tools that map how variables in a system influence each other through reinforcing (R) and balancing (B) feedback loops.
                </p>
                <p className="text-gray-700">
                  In our analysis of quick commerce, we identified several critical feedback loops that explain why the system behaves as it does—and where interventions might be most effective.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg animate-scale-in">
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
            
            {/* Feedback Loops Table */}
            <div className="bg-white shadow-lg rounded-xl p-6 mb-12 animate-scale-in">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">Quick Commerce Feedback Loops</h3>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="font-semibold">Loop Name</TableHead>
                      <TableHead className="font-semibold">Type</TableHead>
                      <TableHead className="font-semibold">Description</TableHead>
                      <TableHead className="font-semibold">Key Insight</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feedbackLoops.map((loop, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{loop.name}</TableCell>
                        <TableCell>{loop.type}</TableCell>
                        <TableCell>{loop.description}</TableCell>
                        <TableCell>
                          <div className={`p-2 rounded-lg text-sm ${
                            index === 0 ? "bg-[#D3E4FD]" : index === 1 ? "bg-[#FDE1D3]" : "bg-[#E5DEFF]"
                          }`}>
                            {loop.insight}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle>Reinforcing Loops (R)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The reinforcing loops in quick commerce create vicious cycles that push the system toward increasingly unsustainable states:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Environmental impacts worsen as delivery speeds increase</li>
                    <li>Consumer expectations continuously rise, demanding ever-faster service</li>
                    <li>Competition forces all providers to accelerate their operations</li>
                    <li>Technology investments focus on speed optimization rather than sustainability</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: '0.3s'}}>
                <CardHeader>
                  <CardTitle>Balancing Loops (B)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The balancing loops provide natural limits to the system, but are often overcome through unsustainable practices:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Worker welfare constraints are bypassed through gig work and algorithmic management</li>
                    <li>Resource constraints are hidden by not accounting for externalities</li>
                    <li>Urban congestion limits are addressed through aggressive traffic navigation</li>
                    <li>Financial sustainability is sacrificed for market share</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Structure Analysis */}
      <section className="py-16 bg-gray-50" id="structure">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C] animate-fade-in">Event → Pattern → Structure Analysis</h2>
            
            <div className="mb-10">
              <p className="text-lg mb-6 text-gray-700">
                Systems thinking views events as surface manifestations of deeper patterns and underlying system structures. For quick commerce, we used the Iceberg Framework to analyze:
              </p>
              
              <div className="bg-white shadow-lg rounded-xl p-6 mb-12 animate-scale-in">
                <h3 className="text-xl font-semibold mb-6 text-[#1A1F2C]">Iceberg Model Analysis</h3>
                
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="font-semibold">Level</TableHead>
                      <TableHead className="font-semibold">Examples in Quick Commerce</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {icebergLevels.map((level, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{level.level}</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            {level.examples.map((example, i) => (
                              <li key={i}>{example}</li>
                            ))}
                          </ul>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-8 bg-[#F1F0FB] p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Key Finding:</h4>
                  <p className="text-gray-700">
                    Our analysis reveals that current solutions in quick commerce primarily target surface events or patterns, rather than addressing deeper structural issues that perpetuate problems.
                    For lasting change, interventions must focus on structural elements like labor models, distribution networks, performance metrics, and the paradigm around sustainability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6] mx-2">
                <Link to="/case-study">View Leverage Points Analysis <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6] mx-2">
                <Link to="/system-archetypes">Explore System Archetypes <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Concepts;
