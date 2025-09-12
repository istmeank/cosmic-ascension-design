import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/level-up-background.svg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-cosmic-deep-space/40" />
      
      {/* Nébuleuses animées */}
      <div className="absolute inset-0">
        {/* Nébuleuse 1 - Violette */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-radial from-purple-500/20 to-transparent nebula-animated nebula-glow"
             style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        
        {/* Nébuleuse 2 - Bleue */}
        <div className="absolute w-80 h-80 rounded-full bg-gradient-radial from-blue-500/25 to-transparent nebula-animated nebula-glow"
             style={{ right: '15%', top: '30%', animationDelay: '2s' }}></div>
        
        {/* Nébuleuse 3 - Verte */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-radial from-green-500/20 to-transparent nebula-animated nebula-glow"
             style={{ left: '60%', top: '60%', animationDelay: '4s' }}></div>
        
        {/* Nébuleuse 4 - Dorée */}
        <div className="absolute w-64 h-64 rounded-full bg-gradient-radial from-yellow-500/15 to-transparent nebula-animated nebula-glow"
             style={{ left: '20%', top: '70%', animationDelay: '1s' }}></div>
        
        {/* Nébuleuse 5 - Rose */}
        <div className="absolute w-88 h-88 rounded-full bg-gradient-radial from-pink-500/18 to-transparent nebula-animated nebula-glow"
             style={{ right: '25%', bottom: '20%', animationDelay: '3s' }}></div>
        
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
        {/* Logo intégré dans la lumière stellaire */}
        <div className="mb-8 animate-float">
          <div className="relative inline-block">
            <img 
              src="/logo-level-up.svg" 
              alt="LEVEL UP for Ladies & Gentlemen" 
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 filter drop-shadow-[0_0_20px_hsl(var(--cosmic-stellar-gold)/0.8)]"
            />
            <h1 className="text-6xl md:text-8xl font-bold cosmic-text mb-4">
              LEVEL UP
            </h1>
            <div className="text-2xl md:text-3xl font-light text-cosmic-star-white/90 mb-2">
              for
            </div>
            <div className="text-4xl md:text-5xl font-semibold cosmic-text">
              Ladies & Gentlemen
            </div>
            
            {/* Effet de lumière autour du logo */}
            <div className="absolute -inset-4 bg-gradient-radial from-cosmic-stellar-gold/20 to-transparent rounded-full blur-xl" />
          </div>
        </div>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-cosmic-star-white/80 mb-12 leading-relaxed">
          Éveille ta puissance intérieure et transforme ton destin dans l'énergie cosmique de l'élévation
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="royal" size="xl" className="transform hover:scale-110 transition-all duration-300">
            Commencer ma Transformation
          </Button>
          <Button variant="cosmic" size="xl">
            Découvrir l'Univers LEVEL UP
          </Button>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cosmic-stellar-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cosmic-stellar-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;