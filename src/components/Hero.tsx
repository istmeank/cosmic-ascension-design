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
            className="w-80 h-80 md:w-96 md:h-96 object-contain mb-8 md:mb-10 -mt-32"
          />
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cosmic-nebula-purple via-cosmic-purple-pink to-cosmic-royal-blue hover:from-cosmic-nebula-green hover:via-cosmic-stellar-gold hover:to-cosmic-purple-pink text-cosmic-star-white font-bold px-12 py-5 text-lg -mt-10 hover:scale-110 transition-all duration-500 shadow-[0_0_40px_hsl(var(--cosmic-nebula-purple)/0.6),0_0_60px_hsl(var(--cosmic-purple-pink)/0.4)] hover:shadow-[0_0_60px_hsl(var(--cosmic-nebula-green)/0.8),0_0_80px_hsl(var(--cosmic-stellar-gold)/0.6)] border border-cosmic-star-white/20 hover:border-cosmic-stellar-gold/50 rounded-xl backdrop-blur-sm"
            onClick={() => navigate('/auth')}
          >
            S'inscrire
          </Button>
        </div>
      </div>
      
    </section>;
};
export default Hero;