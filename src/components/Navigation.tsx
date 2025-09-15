import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-deep-space/80 backdrop-blur-lg border-b border-cosmic-stellar-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo avec effet flouté */}
        <div className="relative flex items-center">
          <div className="absolute inset-0 bg-cosmic-deep-space/60 backdrop-blur-md rounded-lg -z-10 transform scale-110"></div>
          <img 
            src="/logo-for-ladies-gentlemen.png" 
            alt="LEVEL UP for Ladies & Gentlemen" 
            className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-[0_0_8px_hsl(var(--cosmic-stellar-gold)/0.6)] relative z-10"
          />
        </div>

        {/* Navigation links - cachés sur mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-item text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Mission
          </a>
          <a href="#who-am-i" className="nav-item text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Qui suis-je
          </a>
          <a href="#formations" className="nav-item text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Formations
          </a>
          <a href="#services-products" className="nav-item text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Services & Produits
          </a>
          <a href="#contact" className="nav-item text-cosmic-star-white/80 hover:text-cosmic-stellar-gold transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <Button variant="stellar" size="sm" className="nav-item">
          Commencer
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;