
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('active');
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

  let initialClassName = 'scroll-reveal';

  if (direction === 'up') {
    initialClassName += ' translate-y-8';
  } else if (direction === 'down') {
    initialClassName += ' -translate-y-8';
  } else if (direction === 'left') {
    initialClassName += ' translate-x-8';
  } else if (direction === 'right') {
    initialClassName += ' -translate-x-8';
  }

  return (
    <div ref={ref} className={`${initialClassName} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
