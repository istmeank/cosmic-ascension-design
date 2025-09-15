import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/level-up-background.svg";
import { useNavigate } from "react-router-dom";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import CosmicParticles from "./animations/CosmicParticles";
import AnimatedLogo from "./animations/AnimatedLogo";

const Hero = () => {
  const navigate = useNavigate();
  useGSAPAnimations();
  
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Cosmic Particles */}
      <CosmicParticles />
      
      {/* Overlay pour améliorer la lisibilité */}
      <div className="hero-bg absolute inset-0 bg-cosmic-deep-space/40" />
      
      {/* Nébuleuses animées */}
      <div className="absolute inset-0">
        {/* Nébuleuse 1 - Violette */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-radial from-purple-500/20 to-transparent animate-nebula-pulse animate-nebula-drift" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        
        {/* Nébuleuse 2 - Bleue */}
        <div className="absolute w-80 h-80 rounded-full bg-gradient-radial from-blue-500/25 to-transparent animate-nebula-pulse animate-nebula-drift" style={{ right: '15%', top: '30%', animationDelay: '2s' }}></div>
        
        {/* Nébuleuse 3 - Verte */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-radial from-green-500/20 to-transparent animate-nebula-pulse animate-nebula-drift" style={{ left: '60%', top: '60%', animationDelay: '4s' }}></div>
        
        {/* Nébuleuse 4 - Dorée */}
        <div className="absolute w-64 h-64 rounded-full bg-gradient-radial from-yellow-500/15 to-transparent animate-nebula-pulse animate-nebula-drift" style={{ left: '20%', top: '70%', animationDelay: '1s' }}></div>
        
        {/* Nébuleuse 5 - Rose */}
        <div className="absolute w-88 h-88 rounded-full bg-gradient-radial from-pink-500/18 to-transparent animate-nebula-pulse animate-nebula-drift" style={{ right: '25%', bottom: '20%', animationDelay: '3s' }}></div>
        
        {/* Particules flottantes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-stellar-gold rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo principal avec animation */}
        <div className="hero-logo mb-8">
          <div className="relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <AnimatedLogo />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-buttons flex flex-col gap-4 justify-center items-center">
          <Button variant="royal" size="xl" onClick={() => navigate("/auth?tab=signup")}>
            S'inscrire
          </Button>
          <Button variant="cosmic" size="lg" onClick={() => navigate("/auth?tab=signin")}>
            Se connecter
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;