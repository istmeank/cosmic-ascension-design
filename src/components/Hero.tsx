import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/level-up-background.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-cosmic-deep-space/40" />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo principal centré */}
        <div className="mb-12 mt-[20vh]">
          <div className="relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <img src="/logo-level-up-new.svg" alt="LEVEL UP" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 justify-center items-center -mt-[25vh]">
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