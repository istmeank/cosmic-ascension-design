import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Wait for DOM to be ready
    const initAnimations = () => {
      // Hero animations - check if elements exist
      const heroLogo = document.querySelector('.hero-logo');
      const heroText = document.querySelector('.hero-text');
      const heroButtons = document.querySelector('.hero-buttons');

      if (heroLogo || heroText || heroButtons) {
        const heroTl = gsap.timeline();
        
        if (heroLogo) {
          heroTl.from(heroLogo, {
            scale: 0.5,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
          });
        }
        
        if (heroText) {
          heroTl.from(heroText, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          }, "-=0.5");
        }
        
        if (heroButtons) {
          heroTl.from(heroButtons, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          }, "-=0.3");
        }
      }

      // Section animations with ScrollTrigger
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach((section) => {
        gsap.from(section, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Card hover animations
      const cards = document.querySelectorAll('.hover-card');
      cards.forEach((card) => {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(card, {
          scale: 1.05,
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          duration: 0.3,
          ease: "power2.out"
        });

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });

      // Navigation animation
      const navItems = document.querySelectorAll('.nav-item');
      if (navItems.length > 0) {
        gsap.from(navItems, {
          y: -20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        });
      }

      // Text reveal animations
      const textElements = document.querySelectorAll('.text-reveal');
      textElements.forEach((text) => {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      });
    };

    // Initialize animations with a small delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
};

export const createFloatingAnimation = (element: Element) => {
  return gsap.to(element, {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });
};

export const createGlowAnimation = (element: Element) => {
  return gsap.to(element, {
    filter: "drop-shadow(0 0 20px rgba(218, 165, 32, 0.8))",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });
};