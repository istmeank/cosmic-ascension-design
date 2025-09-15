import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/level-up-background.svg";
import forLadiesGentlemenLogo from "@/assets/for-ladies-gentlemen-logo.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-cosmic-deep-space/40" />
      
      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-28 md:pt-36">
        <div className="flex flex-col items-center text-center">
          <img 
            src={forLadiesGentlemenLogo} 
            alt="For Ladies Gentlemen" 
            className="w-96 h-96 md:w-[28rem] md:h-[28rem] object-contain mb-10 md:mb-12 -mt-32"
          />
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cosmic-stellar-gold to-cosmic-stellar-gold/80 hover:from-cosmic-stellar-gold/90 hover:to-cosmic-stellar-gold/70 text-cosmic-deep-space font-semibold px-12 py-6 text-xl -mt-8 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_hsl(var(--cosmic-stellar-gold)/0.5)] hover:shadow-[0_0_40px_hsl(var(--cosmic-stellar-gold)/0.8)] cosmic-glow"
            onClick={() => navigate('/auth')}
          >
            S'inscrire
          </Button>
        </div>
      </div>
      
    </section>;
};
export default Hero;