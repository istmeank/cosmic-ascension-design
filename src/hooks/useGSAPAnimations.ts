import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline();
    
    heroTl
      .from('.hero-logo', {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
      })
      .from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5")
      .from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.3");

    // Section animations with ScrollTrigger
    gsap.utils.toArray('.animate-section').forEach((section: any) => {
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
    gsap.utils.toArray('.hover-card').forEach((card: any) => {
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
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.5
    });

    // Parallax effect for hero background
    gsap.to('.hero-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((text: any) => {
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

    // Cleanup
    return () => {
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
    filter: "drop-shadow(0 0 20px hsl(var(--cosmic-stellar-gold) / 0.8))",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });
};