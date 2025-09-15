import { useEffect } from 'react';
import { gsap } from 'gsap';

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll behavior for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href')!);
        
        if (target) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: target,
              offsetY: 80, // Account for fixed header
            },
            ease: "power3.inOut"
          });
        }
      });
    });

    // Add scroll-triggered animations for buttons and cards
    const interactiveElements = document.querySelectorAll('.hover-card, .cosmic-button');
    
    interactiveElements.forEach((element) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(element, {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out"
      });

      element.addEventListener('mouseenter', () => tl.play());
      element.addEventListener('mouseleave', () => tl.reverse());
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return null;
};

export default SmoothScroll;