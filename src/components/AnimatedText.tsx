
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag = 'h2',
  className = '',
  delay = 0,
  threshold = 0.1,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const chars = element.querySelectorAll('.char');
              chars.forEach((char) => {
                char.classList.add('visible');
              });
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  const Component = tag;
  
  const characters = text.split('').map((char, index) => {
    if (char === ' ') {
      return <span key={index} className="inline-block">&nbsp;</span>;
    }
    return (
      <span
        key={index}
        className="char"
        style={{ ['--char-index' as any]: index }}
      >
        {char}
      </span>
    );
  });

  return (
    <Component ref={containerRef} className={cn(className)}>
      {characters}
    </Component>
  );
};

export default AnimatedText;
