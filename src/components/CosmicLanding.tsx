import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import WhoAmI from "./WhoAmI";
import Formations from "./Formations";
import ServicesProducts from "./ServicesProducts";
import Services from "./Services";
import Contact from "./Contact";
import AdminAccess from "./AdminAccess";

const CosmicLanding = () => {
  console.log("Mount: CosmicLanding rendered");
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AdminAccess />
      <Navigation />
      <main>
        <Hero />
        <div id="about" className="animate-section">
          <About />
        </div>
        <div id="who-am-i" className="animate-section">
          <WhoAmI />
        </div>
        <div id="formations" className="animate-section">
          <Formations />
        </div>
        <div id="services-products" className="animate-section">
          <ServicesProducts />
        </div>
        <div id="services" className="animate-section">
          <Services />
        </div>
        <div id="contact" className="animate-section">
          <Contact />
        </div>
      </main>
      
      {/* Footer cosmique */}
      <footer className="border-t border-cosmic-stellar-gold/20 bg-cosmic-deep-space/50 backdrop-blur-sm py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img 
            src="/logo-for-ladies-gentlemen.png" 
            alt="LEVEL UP for Ladies & Gentlemen" 
            className="h-24 w-auto object-contain mx-auto mb-4"
          />
          <p className="text-muted-foreground">
            Votre élévation commence ici
          </p>
        </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#" className="text-cosmic-star-white/60 hover:text-cosmic-stellar-gold transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-cosmic-star-white/60 hover:text-cosmic-stellar-gold transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-cosmic-star-white/60 hover:text-cosmic-stellar-gold transition-colors">
              CGV
            </a>
          </div>
          
          <div className="text-cosmic-star-white/40 text-sm">
            © 2024 LEVEL UP. Tous droits réservés dans cette dimension et les suivantes.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CosmicLanding;