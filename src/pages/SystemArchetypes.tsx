
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SystemArchetypes = () => {
  const archetypes = [
    {
      name: "Fixes that Fail",
      description: "Short-term solutions that create unintended consequences, making the problem worse in the long run.",
      application: "Quick commerce platforms implement aggressive delivery time cuts to boost customer satisfaction, but this increases worker burnout and environmental impact.",
      example: "Reducing delivery times improves immediate customer satisfaction but increases worker turnover and vehicle emissions."
    },
    {
      name: "Shifting the Burden",
      description: "Addressing symptoms rather than underlying causes, leading to atrophy of the fundamental solution.",
      application: "Companies rely on gig workers and algorithmic management rather than building sustainable delivery infrastructure.",
      example: "Using gig labor to meet demand spikes instead of optimizing routes and distribution networks."
    },
    {
      name: "Tragedy of the Commons",
      description: "Individual actors deplete a shared resource, acting in self-interest but harming collective welfare.",
      application: "Multiple quick commerce companies competing for urban street space, increasing congestion and pollution.",
      example: "Delivery vehicles double-parking or using bike lanes, degrading urban mobility for everyone."
    },
    {
      name: "Growth and Underinvestment",
      description: "Growth approaches a limit that can be eliminated, but underinvestment prevents breaking through.",
      application: "Quick commerce grows rapidly but underinvests in sustainable infrastructure and worker conditions.",
      example: "Expanding to new markets without improving existing operations' sustainability."
    },
    {
      name: "Success to the Successful",
      description: "Resources flow to successful entities, further amplifying their advantage over others.",
      application: "Larger quick commerce platforms with more capital can build more micro-hubs, creating network effects that smaller competitors can't match.",
      example: "Market leaders can afford more warehouse locations, reducing delivery times and attracting more customers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">System Archetypes in Quick Commerce</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-gray-300">
            Common patterns of system behavior that appear in quick commerce and can help us understand its dynamics
          </p>
        </div>
      </section>

      {/* System Archetypes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#1A1F2C] text-center">Key System Archetypes</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {archetypes.map((archetype, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="bg-[#F1F0FB] rounded-t-lg">
                    <CardTitle className="text-[#1A1F2C]">{archetype.name}</CardTitle>
                    <CardDescription className="text-gray-700">{archetype.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2 text-[#1A1F2C]">Application to Quick Commerce:</h4>
                    <p className="mb-4 text-gray-700 text-sm">{archetype.application}</p>
                    <h4 className="font-semibold mb-2 text-[#1A1F2C]">Example:</h4>
                    <p className="text-gray-700 text-sm">{archetype.example}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1F2C]">System Archetypes Interaction</h3>
              <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
                These archetypes often interact with each other in the quick commerce ecosystem, creating complex feedback loops and dynamics that must be understood to implement effective interventions.
              </p>
              
              <div className="bg-[#F1F0FB] p-6 rounded-lg max-w-3xl mx-auto mb-12">
                <h4 className="font-semibold mb-4 text-[#1A1F2C]">Key Insight:</h4>
                <p className="text-gray-700">
                  Recognizing these system archetypes allows us to identify leverage points where small changes can lead to significant system-wide improvements.
                </p>
              </div>
              
              <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
                <Link to="/concepts">View CLD Analysis <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemArchetypes;
