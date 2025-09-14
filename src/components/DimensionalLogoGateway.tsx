import { useState } from "react";
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
      title: "Qui suis-je ?",
      subtitle: "Découvrez mon parcours",
      icon: "👤",
      position: "top"
    },
    {
      id: "services", 
      title: "Mes Services",
      subtitle: "Accompagnement personnalisé",
      icon: "🌟",
      position: "left"
    },
    {
      id: "contact",
      title: "Me Contacter", 
      subtitle: "Prenons rendez-vous",
      icon: "💫",
      position: "right"
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

      {/* Logo Central - Reste intact */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center bg-gradient-to-r from-cosmic-stellar-gold via-cosmic-nebula-green to-cosmic-nebula-purple p-4 rounded-lg shadow-2xl border border-cosmic-stellar-gold/30">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-cosmic-star-white tracking-wider">
            L<span className="text-cosmic-stellar-gold mx-1">E</span>L
          </span>
        </div>
      </div>

      {/* Portail Qui suis-je - Carré en haut */}
      <div 
        className={`absolute top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        onMouseEnter={() => setHoveredDimension('about')}
      >
        <div 
          className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-cosmic-nebula-green/40 to-cosmic-stellar-gold/20 rounded-lg backdrop-blur-sm border border-cosmic-nebula-green/30 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
            hoveredDimension === 'about' ? 'scale-110 shadow-lg' : 'scale-100'
          }`}
          onClick={() => handleDoorClick('about')}
        >
          <div className="text-2xl mb-1">{dimensions[0].icon}</div>
          <div className="text-xs font-semibold text-cosmic-star-white text-center">Qui suis-je ?</div>
        </div>
      </div>

      {/* Portail Services - Porte gauche */}
      <div 
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-700 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
        }`}
        onMouseEnter={() => setHoveredDimension('services')}
      >
        <div 
          className={`w-20 h-32 md:w-24 md:h-36 bg-gradient-to-br from-cosmic-stellar-gold/40 to-cosmic-nebula-purple/20 rounded-lg backdrop-blur-sm border border-cosmic-stellar-gold/30 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
            hoveredDimension === 'services' ? 'scale-110 shadow-lg' : 'scale-100'
          }`}
          onClick={() => handleDoorClick('services')}
        >
          <div className="text-2xl mb-2">{dimensions[1].icon}</div>
          <div className="text-xs font-semibold text-cosmic-star-white text-center px-2">Services</div>
        </div>
      </div>

      {/* Portail Contact - Porte droite */}
      <div 
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-700 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-16px] opacity-0'
        }`}
        onMouseEnter={() => setHoveredDimension('contact')}
      >
        <div 
          className={`w-20 h-32 md:w-24 md:h-36 bg-gradient-to-br from-cosmic-nebula-purple/40 to-cosmic-stellar-gold/20 rounded-lg backdrop-blur-sm border border-cosmic-nebula-purple/30 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
            hoveredDimension === 'contact' ? 'scale-110 shadow-lg' : 'scale-100'
          }`}
          onClick={() => handleDoorClick('contact')}
        >
          <div className="text-2xl mb-2">{dimensions[2].icon}</div>
          <div className="text-xs font-semibold text-cosmic-star-white text-center px-2">Contact</div>
        </div>
      </div>

      {/* Informations détaillées au hover */}
      {isOpen && hoveredDimension && (
        <div className="absolute bottom-0 left-0 right-0 text-center animate-fade-in">
          <div className="bg-cosmic-deep-space/80 backdrop-blur-sm rounded-lg p-4 border border-cosmic-stellar-gold/20">
            <p className="text-cosmic-stellar-gold text-lg font-semibold">
              {dimensions.find(d => d.id === hoveredDimension)?.title}
            </p>
            <p className="text-cosmic-star-white/80 text-sm mt-1">
              {dimensions.find(d => d.id === hoveredDimension)?.subtitle}
            </p>
          </div>
        </div>
      )}

      {/* Subtitle appearing when opened */}
      {isOpen && !hoveredDimension && (
        <div className="absolute -bottom-16 left-0 right-0 text-center animate-fade-in">
          <p className="text-cosmic-stellar-gold text-lg md:text-xl font-semibold">
            for Ladies & Gentlemen
          </p>
          <p className="text-cosmic-star-white/60 text-sm mt-2">
            Survolez les portails pour explorer les rubriques
          </p>
        </div>
      )}
    </div>
  );
};

export default DimensionalLogoGateway;