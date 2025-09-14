import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface DimensionalLogoGatewayProps {
  onNavigate?: (section: string) => void;
}

const DimensionalLogoGateway = ({ onNavigate }: DimensionalLogoGatewayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDimension, setHoveredDimension] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const dimensions = [
    {
      id: "about",
      title: "L'Éveil Cosmique",
      subtitle: "Découvrez votre essence",
      icon: "✨",
      color: "cosmic-nebula-green"
    },
    {
      id: "services", 
      title: "Portails d'Élévation",
      subtitle: "Nos services divins",
      icon: "🌌",
      color: "cosmic-stellar-gold"
    },
    {
      id: "contact",
      title: "Connexion Universelle", 
      subtitle: "Rejoignez-nous",
      icon: "🔮",
      color: "cosmic-nebula-purple"
    }
  ];

  const handleDoorClick = (dimensionId: string) => {
    if (onNavigate) {
      onNavigate(dimensionId);
    }
    
    // Scroll to section
    const element = document.getElementById(dimensionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto cursor-pointer group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredDimension(null);
      }}
    >
      {/* Cosmic Background Portal */}
      <div className={`absolute inset-0 rounded-full transition-all duration-1000 ${
        isOpen 
          ? 'bg-gradient-radial from-cosmic-deep-space via-cosmic-nebula-purple/30 to-transparent scale-150 opacity-80' 
          : 'bg-gradient-radial from-cosmic-deep-space/50 to-transparent scale-100 opacity-0'
      }`} />
      
      {/* Floating Particles */}
      {isOpen && (
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cosmic-stellar-gold rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Logo Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Logo doors/segments */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Door - L */}
          <div 
            className={`relative transition-all duration-700 ease-out transform-gpu ${
              isOpen ? 'translate-x-[-80px] rotate-y-[25deg]' : 'translate-x-0 rotate-y-0'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
            onMouseEnter={() => setHoveredDimension('about')}
          >
            <div className="w-16 h-24 md:w-20 md:h-28 lg:w-24 lg:h-32 bg-gradient-to-b from-cosmic-stellar-gold to-cosmic-nebula-green rounded-l-lg flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-cosmic-deep-space shadow-lg">
              L
            </div>
            
            {/* Dimension Portal Behind Left Door */}
            {isOpen && hoveredDimension === 'about' && (
              <div 
                className="absolute -inset-4 bg-gradient-to-br from-cosmic-nebula-green/40 to-cosmic-stellar-gold/20 rounded-lg backdrop-blur-sm border border-cosmic-nebula-green/30 cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => handleDoorClick('about')}
              >
                <div className="p-4 text-center text-cosmic-star-white">
                  <div className="text-2xl mb-2">{dimensions[0].icon}</div>
                  <div className="text-sm font-semibold">{dimensions[0].title}</div>
                  <div className="text-xs opacity-80">{dimensions[0].subtitle}</div>
                </div>
              </div>
            )}
          </div>

          {/* Center Portal - E */}
          <div 
            className={`relative mx-2 md:mx-3 lg:mx-4 transition-all duration-700 ease-out ${
              isOpen ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
            }`}
            onMouseEnter={() => setHoveredDimension('services')}
          >
            <div className="w-16 h-24 md:w-20 md:h-28 lg:w-24 lg:h-32 bg-gradient-to-b from-cosmic-nebula-purple to-cosmic-stellar-gold flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-cosmic-star-white shadow-lg rounded-md">
              E
            </div>
            
            {/* Central Dimension Portal */}
            {isOpen && hoveredDimension === 'services' && (
              <div 
                className="absolute -inset-4 bg-gradient-to-br from-cosmic-stellar-gold/40 to-cosmic-nebula-purple/20 rounded-lg backdrop-blur-sm border border-cosmic-stellar-gold/30 cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => handleDoorClick('services')}
              >
                <div className="p-4 text-center text-cosmic-star-white">
                  <div className="text-2xl mb-2">{dimensions[1].icon}</div>
                  <div className="text-sm font-semibold">{dimensions[1].title}</div>
                  <div className="text-xs opacity-80">{dimensions[1].subtitle}</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Door - L */}
          <div 
            className={`relative transition-all duration-700 ease-out transform-gpu ${
              isOpen ? 'translate-x-[80px] rotate-y-[-25deg]' : 'translate-x-0 rotate-y-0'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
            onMouseEnter={() => setHoveredDimension('contact')}
          >
            <div className="w-16 h-24 md:w-20 md:h-28 lg:w-24 lg:h-32 bg-gradient-to-b from-cosmic-stellar-gold to-cosmic-nebula-purple rounded-r-lg flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-cosmic-deep-space shadow-lg">
              L
            </div>
            
            {/* Dimension Portal Behind Right Door */}
            {isOpen && hoveredDimension === 'contact' && (
              <div 
                className="absolute -inset-4 bg-gradient-to-br from-cosmic-nebula-purple/40 to-cosmic-stellar-gold/20 rounded-lg backdrop-blur-sm border border-cosmic-nebula-purple/30 cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => handleDoorClick('contact')}
              >
                <div className="p-4 text-center text-cosmic-star-white">
                  <div className="text-2xl mb-2">{dimensions[2].icon}</div>
                  <div className="text-sm font-semibold">{dimensions[2].title}</div>
                  <div className="text-xs opacity-80">{dimensions[2].subtitle}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Central Cosmic Energy */}
        {isOpen && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 bg-cosmic-stellar-gold rounded-full animate-pulse-glow opacity-60" />
          </div>
        )}
      </div>

      {/* Subtitle appearing when opened */}
      {isOpen && (
        <div className="absolute -bottom-16 left-0 right-0 text-center animate-fade-in">
          <p className="text-cosmic-stellar-gold text-lg md:text-xl font-semibold">
            for Ladies & Gentlemen
          </p>
          <p className="text-cosmic-star-white/60 text-sm mt-2">
            Survolez les portails pour découvrir les dimensions
          </p>
        </div>
      )}
    </div>
  );
};

export default DimensionalLogoGateway;