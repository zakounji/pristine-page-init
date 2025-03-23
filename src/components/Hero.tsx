
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = 30 * (0.5 - x);
      const moveY = 30 * (0.5 - y);
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #434343 100%)'
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/30 blur-[80px] -top-10 -left-10 animate-float" />
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-[100px] bottom-0 right-0 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      
      <div className="relative z-10 container px-6 md:px-12 mx-auto flex flex-col items-center text-center">
        <ScrollReveal threshold={0.1} delay={300}>
          <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8 inline-block">
            Introducing the new era of design
          </span>
        </ScrollReveal>
        
        <div className="mb-8">
          <AnimatedText
            text="Precision in every detail"
            tag="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            delay={600}
          />
          
          <ScrollReveal delay={1200} threshold={0.1}>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              A revolutionary approach to design that transforms how you interact with technology. 
              Experience the perfect balance of form and function.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={1500} threshold={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="shine-effect bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95">
                Explore Product
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20 active:scale-95">
                Watch Video
              </button>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={1800} threshold={0.1} className="w-full max-w-5xl mt-12">
          <div className="relative w-full perspective">
            <div 
              className="w-full rounded-2xl overflow-hidden shadow-2xl preserve-3d transition-transform duration-300"
              style={{
                transform: 'rotateX(calc(var(--move-y, 0) * 0.05deg)) rotateY(calc(var(--move-x, 0) * -0.05deg))',
              }}
            >
              <div className="bg-gradient-to-tr from-black/70 to-black/40 glass absolute inset-0 z-10 rounded-2xl"></div>
              <div 
                className="aspect-[16/9] bg-gray-900 rounded-2xl"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #111111 0%, #333333 100%)',
                }}
              >
                <div className="h-full w-full flex items-center justify-center">
                  <div className="w-full max-w-md h-72 glass rounded-2xl border border-white/10 flex items-center justify-center text-white">
                    <div className="text-center">
                      <span className="text-xs uppercase tracking-wider text-white/60">Product Display</span>
                      <p className="text-2xl font-light mt-2">Experience the future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div 
              className="absolute top-1/4 -left-12 w-24 h-24 glass rounded-2xl border border-white/10 animate-float opacity-80"
              style={{ animationDelay: '1s' }}
            ></div>
            <div 
              className="absolute bottom-1/3 -right-8 w-16 h-16 glass rounded-xl border border-white/10 animate-float opacity-80"
              style={{ animationDelay: '2.5s' }}
            ></div>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white/70"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
