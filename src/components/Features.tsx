
import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';

const Features: React.FC = () => {
  const features = [
    {
      title: "Minimalist Design",
      description: "Clean lines and thoughtful use of space create an elegant aesthetic that lets the essentials shine.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
        </svg>
      )
    },
    {
      title: "Intuitive Experience",
      description: "Every interaction feels natural and effortless, creating a seamless connection between user and product.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
      )
    },
    {
      title: "Precision Engineering",
      description: "Built with meticulous attention to detail, ensuring reliability and performance that exceeds expectations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20v-6M6 20V10M18 20V4" />
        </svg>
      )
    },
    {
      title: "Timeless Quality",
      description: "Made to last and designed to remain relevant and beautiful for years to come.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-black text-white rounded-full mb-4">
              Key Features
            </span>
          </ScrollReveal>
          
          <AnimatedText
            text="Less, but better"
            tag="h2"
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          />
          
          <ScrollReveal delay={300}>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We focus on the essential aspects, carefully removing the unnecessary. What remains is pure, simple, and beautiful.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={300 + (index * 150)} className="bg-white rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-5">
                  <span className="text-gray-800">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={800} className="mt-20">
          <div className="relative bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 rotate-180">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M45.3,-51.7C58.9,-42.3,70.3,-28.3,73.8,-12C77.3,4.3,72.8,22.8,62.1,35.5C51.3,48.2,34.2,55,16.5,61C-1.2,67,-19.6,72.1,-34.8,66.1C-50,60.1,-62,43,-69.5,23.1C-77,3.3,-79.9,-19.2,-71.7,-36.4C-63.4,-53.6,-43.8,-65.5,-25.5,-72.6C-7.1,-79.7,10,-82,24.7,-76.1C39.4,-70.3,31.7,-61.1,45.3,-51.7Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="p-10 md:p-16 relative z-10">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">Experience the difference</h3>
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Our philosophy is built around creating products that improve your life through thoughtful design and careful attention to detail. We believe that great design should be felt rather than seen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-gray-100 active:scale-95">
                    Get Started
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-white/20 active:scale-95">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
