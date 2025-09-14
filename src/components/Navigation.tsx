import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-deep-space/80 backdrop-blur-lg border-b border-cosmic-stellar-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/level-up-for-ladies-gentlemen-logo.png" 
            alt="LEVEL UP for Ladies & Gentlemen" 
            className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-[0_0_8px_hsl(var(--cosmic-stellar-gold)/0.6)]"
          />
        </div>

        {/* Navigation links - cachés sur mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Mission
          </a>
          <a href="#services" className="text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Portails
          </a>
          <a href="#contact" className="text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <Button variant="stellar" size="sm">
          Commencer
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;