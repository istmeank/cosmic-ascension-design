import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CosmicParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create particle elements
    const particles: HTMLDivElement[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-cosmic-stellar-gold/30 rounded-full';
      
      // Random initial positions
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.2,
        scale: Math.random() * 0.5 + 0.5,
      });
      
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    particles.forEach((particle, i) => {
      const tl = gsap.timeline({ repeat: -1 });
      
      tl.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: 4 + Math.random() * 2,
        ease: "sine.inOut",
      })
      .to(particle, {
        opacity: Math.random() * 0.8 + 0.2,
        scale: Math.random() * 0.8 + 0.4,
        duration: 2 + Math.random() * 2,
        ease: "power2.inOut",
      }, 0)
      .to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: 4 + Math.random() * 2,
        ease: "sine.inOut",
      });

      // Add pulsing effect to some particles
      if (i % 5 === 0) {
        gsap.to(particle, {
          boxShadow: "0 0 20px hsl(var(--cosmic-stellar-gold) / 0.6)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    });

    // Cleanup
    return () => {
      particles.forEach(particle => {
        if (containerRef.current?.contains(particle)) {
          containerRef.current.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default CosmicParticles;