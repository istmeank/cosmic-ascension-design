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
      
      {/* Particules flottantes */}
      <div className="absolute inset-0">
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