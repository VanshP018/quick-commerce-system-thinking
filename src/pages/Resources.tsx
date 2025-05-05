
import React from 'react';
import { Book, ExternalLink, FileText, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ResourceCard = ({ icon: Icon, title, description, link, linkText }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        <Icon className="h-6 w-6 text-[#0EA5E9]" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#1A1F2C]">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0EA5E9] inline-flex items-center text-sm hover:underline"
          >
            {linkText || "Learn more"} <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3042] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Resources & Further Learning</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-gray-300">
            Expand your understanding of systems thinking and its application to quick commerce
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#1A1F2C] text-center">Quick Commerce Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ResourceCard 
                icon={FileText}
                title="Environmental Impact of Quick Commerce"
                description="Research report analyzing the carbon footprint and resource consumption of rapid delivery models compared to traditional retail."
                link="https://www.example.com/report"
                linkText="Read report"
              />
              
              <ResourceCard 
                icon={FileText}
                title="Worker Conditions in the Gig Economy"
                description="Study on delivery worker experiences, stress factors, and potential policy interventions to improve labor conditions."
                link="https://www.example.com/worker-study"
                linkText="Read study"
              />
              
              <ResourceCard 
                icon={Youtube}
                title="The True Cost of 15-Minute Delivery"
                description="Video documentary exploring the hidden costs and system-wide impacts of ultra-fast delivery services."
                link="https://www.example.com/video"
                linkText="Watch video"
              />
              
              <ResourceCard 
                icon={FileText}
                title="Urban Planning for Last-Mile Logistics"
                description="White paper on redesigning urban spaces to accommodate sustainable delivery infrastructure and micro-hubs."
                link="https://www.example.com/whitepaper"
                linkText="Read white paper"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-12 text-[#1A1F2C] text-center">Systems Thinking Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ResourceCard 
                icon={Book}
                title="Thinking in Systems: A Primer"
                description="Donella Meadows' classic introduction to systems thinking concepts, feedback loops, and leverage points."
                link="https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557"
                linkText="Find book"
              />
              
              <ResourceCard 
                icon={Book}
                title="The Fifth Discipline"
                description="Peter Senge's guide to building learning organizations through systems thinking and mental models."
                link="https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254"
                linkText="Find book"
              />
              
              <ResourceCard 
                icon={Youtube}
                title="Introduction to Systems Thinking"
                description="Video series explaining core systems thinking concepts with practical examples and applications."
                link="https://www.example.com/systems-videos"
                linkText="Watch series"
              />
              
              <ResourceCard 
                icon={FileText}
                title="Causal Loop Diagramming Guide"
                description="Practical guide to creating and interpreting causal loop diagrams for complex system analysis."
                link="https://www.example.com/cld-guide"
                linkText="Download guide"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Join the Conversation */}
      <section className="py-16 bg-gradient-to-r from-[#0EA5E9] to-[#7E69AB] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Systems Thinking Hackathon</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Interested in exploring these concepts further or contributing to our analysis of quick commerce? Join our hackathon and collaborate with systems thinkers around the world.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-left">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-left">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-left">Your interest in systems thinking</label>
                <textarea id="message" rows={3} className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none"></textarea>
              </div>
              
              <Button className="w-full bg-white text-[#0EA5E9] hover:bg-gray-100">
                Join Hackathon
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">Explore Our Analysis</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Revisit our CLD diagrams, leverage points analysis, and system redesign proposals for quick commerce.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-[#0EA5E9] hover:bg-[#0c8bc6]">
              <Link to="/concepts">CLD Analysis</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C]/5">
              <Link to="/case-study">Leverage Points</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C]/5">
              <Link to="/">Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
