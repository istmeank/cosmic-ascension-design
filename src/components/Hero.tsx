import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/level-up-background.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-cosmic-deep-space/40" />
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cosmic-stellar-gold/60 animate-pulse"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${i * 0.1}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo principal centré avec animations cosmiques */}
        <div className="mb-12 animate-float">
          <div className="relative inline-block">
            <button onClick={handleLogoClick} className={`w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto mb-6 cursor-pointer transition-all duration-500 hover:scale-105 ${isAnimating ? 'animate-galactic-doors' : ''} ${isAnimating ? 'animate-cosmic-shine' : ''}`}>
              <img src="/new-level-up-logo.png" alt="LEVEL UP for Ladies & Gentlemen" className="w-full h-full filter drop-shadow-[0_0_60px_hsl(var(--cosmic-stellar-gold)/0.8)]" />
            </button>
            
            {/* Aura cosmique permanente */}
            <div className="absolute -inset-16 bg-gradient-radial from-cosmic-stellar-gold/20 via-cosmic-nebula-purple/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
            
            {/* Effets au clic - Portes galactiques qui s'ouvrent */}
            {isAnimating && <>
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-nebula-purple via-cosmic-stellar-gold to-cosmic-nebula-green opacity-70 rounded-full animate-spin-slow" />
                <div className="absolute inset-0 bg-gradient-conic from-cosmic-nebula-purple via-cosmic-stellar-gold to-cosmic-nebula-green opacity-50 rounded-full blur-2xl animate-pulse" />
                
                {/* Rayons d'énergie */}
                <div className="absolute -inset-8">
                  {[...Array(8)].map((_, i) => <div key={i} className="absolute w-1 h-16 bg-cosmic-stellar-gold animate-pulse-glow" style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 45}deg) translateY(-120px)`,
                transformOrigin: '0 120px',
                animationDelay: `${i * 0.1}s`
              }} />)}
                </div>
                
                {/* Particules d'énergie qui explosent */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-cosmic-stellar-gold rounded-full animate-energy-burst" style={{
                left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 40}%`,
                top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 40}%`,
                animationDelay: `${i * 0.05}s`
              }} />)}
                </div>
              </>}
          </div>
        </div>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-cosmic-star-white/80 mb-12 leading-relaxed">
          Éveille ta puissance intérieure et transforme ton destin dans l'énergie cosmique de l'élévation
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button variant="royal" size="xl" className="transform hover:scale-110 transition-all duration-300" onClick={() => navigate("/auth?tab=signup")}>
            S'inscrire
          </Button>
          <Button variant="cosmic" size="lg" onClick={() => navigate("/auth?tab=signin")}>
            Se connecter
          </Button>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default Hero;