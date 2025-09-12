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
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-cosmic-stellar-gold rounded-full animate-pulse-glow" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`
      }} />)}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo interactif avec portes galactiques */}
        <div className="mb-8 animate-float">
          <div className="relative inline-block">
            <button onClick={handleLogoClick} className={`w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 cursor-pointer transition-all duration-300 hover:scale-110 ${isAnimating ? 'animate-galactic-doors' : ''}`}>
              <img src="/logo-level-up.svg" alt="LEVEL UP for Ladies & Gentlemen" className="w-full h-full filter drop-shadow-[0_0_40px_hsl(var(--cosmic-stellar-gold)/0.9)]" />
            </button>
            
            {/* Effet de lumière autour du logo */}
            <div className="absolute -inset-8 bg-gradient-radial from-cosmic-stellar-gold/30 to-transparent rounded-full blur-2xl" />
            
            {/* Effet de portes galactiques */}
            {isAnimating && <>
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-nebula-purple via-cosmic-stellar-gold to-cosmic-nebula-green opacity-60 rounded-full animate-spin-slow" />
                <div className="absolute inset-0 bg-gradient-conic from-cosmic-nebula-purple via-cosmic-stellar-gold to-cosmic-nebula-green opacity-40 rounded-full blur-xl animate-pulse" />
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