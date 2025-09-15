import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = {
      base: containerRef.current.querySelector('.logo-base'),
      columns: [
        containerRef.current.querySelector('.column-1'),
        containerRef.current.querySelector('.column-2'), 
        containerRef.current.querySelector('.column-3'),
        containerRef.current.querySelector('.column-4'),
        containerRef.current.querySelector('.column-5'),
        containerRef.current.querySelector('.column-6'),
      ],
      plus: containerRef.current.querySelector('.logo-plus'),
      textLadies: containerRef.current.querySelector('.text-ladies'),
      textGentlemen: containerRef.current.querySelector('.text-gentlemen'),
    };

    // Masquer tous les éléments au début
    gsap.set([elements.base, ...elements.columns, elements.plus, elements.textLadies, elements.textGentlemen], {
      opacity: 0,
      scale: 0,
      transformOrigin: "center bottom"
    });

    // Timeline d'animation
    const tl = gsap.timeline({ delay: 0.5 });

    // 1. Base (cube du U) apparaît en premier
    tl.to(elements.base, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    // 2. Colonnes apparaissent du centre vers l'extérieur
    // Colonnes centrales (les plus hautes)
    tl.to([elements.columns[2], elements.columns[3]], {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "+=0.3");

    // Colonnes moyennes
    tl.to([elements.columns[1], elements.columns[4]], {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "+=0.2");

    // Colonnes extérieures
    tl.to([elements.columns[0], elements.columns[5]], {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "+=0.2");

    // 3. Signe plus
    tl.to(elements.plus, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      transformOrigin: "center center"
    }, "+=0.2");

    // 4. Texte en dernier
    tl.to([elements.textLadies, elements.textGentlemen], {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2,
      transformOrigin: "center center"
    }, "+=0.3");

  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex flex-col items-center justify-center relative"
    >
      {/* Logo LEVEL UP - Barres avec forme de U */}
      <div className="relative mb-6">
        {/* Barres de gauche */}
        <div className="column-1 absolute w-4 h-16 bg-cosmic-stellar-gold rounded-sm" style={{ left: '-90px', top: '20px' }}></div>
        <div className="column-2 absolute w-4 h-20 bg-cosmic-stellar-gold rounded-sm" style={{ left: '-70px', top: '16px' }}></div>
        <div className="column-3 absolute w-6 h-24 bg-cosmic-stellar-gold rounded-sm" style={{ left: '-48px', top: '12px' }}></div>
        
        {/* Base du U */}
        <div className="logo-base w-20 h-6 bg-cosmic-stellar-gold rounded-sm mx-auto mt-8"></div>
        
        {/* Barres de droite */}
        <div className="column-4 absolute w-6 h-24 bg-cosmic-stellar-gold rounded-sm" style={{ right: '-48px', top: '12px' }}></div>
        <div className="column-5 absolute w-4 h-20 bg-cosmic-stellar-gold rounded-sm" style={{ right: '-70px', top: '16px' }}></div>
        <div className="column-6 absolute w-4 h-16 bg-cosmic-stellar-gold rounded-sm" style={{ right: '-90px', top: '20px' }}></div>
        
        {/* Signe plus */}
        <div className="logo-plus absolute -top-8 -right-12">
          <div className="relative w-8 h-8">
            <div className="absolute w-8 h-1 bg-cosmic-star-white rounded-full top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="absolute w-1 h-8 bg-cosmic-star-white rounded-full left-1/2 top-0 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>

      {/* Texte LEVEL UP */}
      <div className="text-center">
        <div className="text-ladies text-2xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'cursive' }}>
          For Ladies
        </div>
        <div className="text-gentlemen text-3xl font-bold text-blue-500" style={{ fontFamily: 'cursive' }}>
          Gentlemen
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;