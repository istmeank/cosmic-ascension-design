import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ImmersiveLogoAnimation = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-deep-space">
      {/* Fond cosmique avec nébuleuse vivante */}
      <div className="absolute inset-0">
        {/* Nébuleuse principale */}
        <div 
          className="absolute inset-0 animate-nebula-pulse"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, hsl(var(--cosmic-nebula-green) / 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(var(--cosmic-nebula-purple) / 0.4) 0%, transparent 60%),
              radial-gradient(circle at 50% 20%, hsl(var(--cosmic-stellar-gold) / 0.2) 0%, transparent 40%),
              radial-gradient(ellipse at 40% 80%, hsl(var(--cosmic-nebula-green) / 0.2) 0%, transparent 70%)
            `
          }}
        />
        
        {/* Particules d'étoiles scintillantes */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-star-white rounded-full animate-star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Comètes lointaines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`comet-${i}`}
            className="absolute w-32 h-0.5 bg-gradient-to-r from-cosmic-stellar-gold/60 to-transparent animate-cosmic-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Logo LEVEL UP avec animation immersive */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {animationStarted && (
          <div className="cosmic-animation-container flex flex-col items-center">
            {/* Logo principal avec animations séquentielles */}
            <div className="relative mb-8">
              {/* Conteneur du logo */}
              <div 
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto mb-6"
              >
                {/* Logo complet avec animation d'apparition progressive */}
                <div 
                  className="relative w-full h-full animate-logo-appear opacity-0"
                  style={{ animationDelay: '1s' }}
                >
                  <img 
                    src="/new-level-up-logo.png" 
                    alt="LEVEL UP for Ladies & Gentlemen" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_60px_hsl(var(--cosmic-stellar-gold)/0.8)]"
                  />
                  
                  {/* Effet de brillance qui traverse le logo */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-stellar-gold/30 to-transparent animate-cosmic-drift opacity-0"
                    style={{ 
                      animationDelay: '2s',
                      animationDuration: '3s',
                      animationFillMode: 'forwards'
                    }}
                  />
                </div>
              </div>

              {/* Aura cosmique permanente */}
              <div className="absolute -inset-16 bg-gradient-radial from-cosmic-stellar-gold/20 via-cosmic-nebula-purple/10 to-transparent rounded-full blur-3xl animate-nebula-pulse" />
              
              {/* Cercles d'énergie qui se propagent */}
              <div 
                className="absolute inset-0 animate-plus-shine opacity-0"
                style={{ animationDelay: '2.5s' }}
              >
                <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-cosmic-stellar-gold rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border-2 border-cosmic-stellar-gold/50 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 border-2 border-cosmic-stellar-gold/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            {/* Texte "LEVEL UP" qui se matérialise */}
            <div 
              className="mb-8 animate-text-materialize opacity-0"
              style={{ animationDelay: '3.5s' }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-cosmic-star-white">
                LEVEL UP
              </h1>
            </div>

            {/* Texte "For Ladies & Gentlemen" avec calligraphie fluide */}
            <div 
              className="mb-12 animate-script-flow opacity-0"
              style={{ animationDelay: '4s' }}
            >
              <p className="text-3xl md:text-4xl font-script">
                <span className="text-pink-400">For Ladies</span>
                <span className="text-cosmic-star-white mx-4">&</span>
                <span className="text-blue-400">Gentlemen</span>
              </p>
            </div>

            {/* Slogan */}
            <p 
              className="text-xl md:text-2xl text-cosmic-star-white/80 mb-12 leading-relaxed animate-text-materialize opacity-0"
              style={{ animationDelay: '4.5s' }}
            >
              Éveille ta puissance intérieure et transforme ton destin dans l'énergie cosmique de l'élévation
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col gap-4 justify-center items-center animate-script-flow opacity-0"
              style={{ animationDelay: '5s' }}
            >
              <Button 
                variant="royal" 
                size="xl" 
                className="transform hover:scale-110 transition-all duration-300" 
                onClick={() => navigate("/auth?tab=signup")}
              >
                S'inscrire
              </Button>
              <Button 
                variant="cosmic" 
                size="lg" 
                onClick={() => navigate("/auth?tab=signin")}
              >
                Se connecter
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImmersiveLogoAnimation;