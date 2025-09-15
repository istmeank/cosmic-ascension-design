import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedLogo = () => {
  const containerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = {
      base: containerRef.current.querySelector('.logo-base'),
      columns: [
        containerRef.current.querySelector('.column-center-left'),
        containerRef.current.querySelector('.column-center-right'),
        containerRef.current.querySelector('.column-mid-left'),
        containerRef.current.querySelector('.column-mid-right'),
        containerRef.current.querySelector('.column-outer-left'),
        containerRef.current.querySelector('.column-outer-right'),
      ],
      plus: containerRef.current.querySelector('.logo-plus'),
      textLadies: containerRef.current.querySelector('.text-ladies'),
      textGentlemen: containerRef.current.querySelector('.text-gentlemen'),
    };

    // Initial state - everything hidden
    gsap.set([elements.base, ...elements.columns, elements.plus, elements.textLadies, elements.textGentlemen], {
      opacity: 0,
      scale: 0,
      transformOrigin: "center bottom"
    });

    // Animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // 1. Base cube appears first
    tl.to(elements.base, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

    // 2. Columns appear from center to outside
    tl.to([elements.columns[0], elements.columns[1]], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "+=0.2");

    tl.to([elements.columns[2], elements.columns[3]], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "+=0.15");

    tl.to([elements.columns[4], elements.columns[5]], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "+=0.15");

    // 3. Plus sign appears
    tl.to(elements.plus, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      transformOrigin: "center center"
    }, "+=0.1");

    // 4. Text appears last
    tl.to([elements.textLadies, elements.textGentlemen], {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1,
      transformOrigin: "center center"
    }, "+=0.2");

  }, []);

  return (
    <svg 
      ref={containerRef}
      viewBox="0 0 400 400" 
      className="w-full h-full"
    >
      {/* Base cube (U shape) */}
      <rect 
        className="logo-base"
        x="150" 
        y="280" 
        width="100" 
        height="40" 
        fill="#f1dc5e"
        rx="4"
      />
      
      {/* Columns from center to outside */}
      {/* Center columns (tallest) */}
      <rect 
        className="column-center-left"
        x="140" 
        y="120" 
        width="35" 
        height="160" 
        fill="#f1dc5e"
        rx="4"
      />
      <rect 
        className="column-center-right"
        x="225" 
        y="120" 
        width="35" 
        height="160" 
        fill="#f1dc5e"
        rx="4"
      />
      
      {/* Mid columns */}
      <rect 
        className="column-mid-left"
        x="95" 
        y="160" 
        width="30" 
        height="120" 
        fill="#f1dc5e"
        rx="4"
      />
      <rect 
        className="column-mid-right"
        x="275" 
        y="160" 
        width="30" 
        height="120" 
        fill="#f1dc5e"
        rx="4"
      />
      
      {/* Outer columns (shortest) */}
      <rect 
        className="column-outer-left"
        x="60" 
        y="200" 
        width="25" 
        height="80" 
        fill="#f1dc5e"
        rx="4"
      />
      <rect 
        className="column-outer-right"
        x="315" 
        y="200" 
        width="25" 
        height="80" 
        fill="#f1dc5e"
        rx="4"
      />
      
      {/* Plus sign */}
      <g className="logo-plus">
        <rect x="320" y="50" width="20" height="4" fill="white" rx="2"/>
        <rect x="328" y="42" width="4" height="20" fill="white" rx="2"/>
      </g>
      
      {/* Text */}
      <text 
        className="text-ladies"
        x="200" 
        y="340" 
        textAnchor="middle" 
        fill="#e91e63" 
        fontSize="24" 
        fontFamily="cursive"
        fontStyle="italic"
      >
        For Ladies
      </text>
      <text 
        className="text-gentlemen"
        x="200" 
        y="370" 
        textAnchor="middle" 
        fill="#2196f3" 
        fontSize="26" 
        fontFamily="cursive"
        fontStyle="italic"
      >
        Gentlemen
      </text>
    </svg>
  );
};

export default AnimatedLogo;