
import React, { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';

const ProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="product" 
      className="section-padding overflow-hidden bg-white"
      ref={containerRef}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-gray-100 rounded-full text-gray-800 mb-4">
              Revolutionary Design
            </span>
          </ScrollReveal>
          
          <AnimatedText
            text="Crafted with precision"
            tag="h2"
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          />
          
          <ScrollReveal delay={300}>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Every curve, every line, every interaction has been meticulously designed to create 
              an experience that feels both intuitive and magical.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 perspective">
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center preserve-3d transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    boxShadow: '0 30px 60px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="text-center p-6">
                    <div className="w-24 h-24 rounded-full bg-black mx-auto mb-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Layered Design</h3>
                    <p className="text-gray-600">Beautiful from every angle</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gray-100 rounded-lg z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-black rounded-xl z-10"></div>
            </div>
          </ScrollReveal>
          
          <div>
            <ScrollReveal direction="right" className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Form Follows Function</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every element serves a purpose. We've eliminated the unnecessary to focus on what
                  truly matters - creating a seamless connection between you and the product.
                </p>
              </div>
              
              <div className="space-y-4 mt-8">
                {[
                  {title: "Intuitive Interface", description: "Designed to be understood instantly"},
                  {title: "Thoughtful Interactions", description: "Responds naturally to your touch"},
                  {title: "Premium Materials", description: "Crafted from the finest components"}
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                      <span className="text-gray-900 font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-sm font-medium transition-all hover:bg-gray-900 active:scale-95">
                Learn More
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
