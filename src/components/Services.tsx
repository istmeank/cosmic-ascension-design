import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "🧘‍♀️",
      title: "Coaching Quantique",
      description: "Sessions personnalisées d'élévation énergétique et de reprogrammation cellulaire pour débloquer ton plein potentiel.",
      features: ["Analyse énergétique", "Nettoyage des blocages", "Activation des codes ADN", "Guidance spirituelle"],
      price: "2500 DA"
    },
    {
      icon: "🌟",
      title: "Cercle de Lumière",
      description: "Communauté exclusive d'âmes éveillées partageant outils, méditations et cérémonies de transformation.",
      features: ["Méditations collectives", "Rituels de pleine lune", "Accès bibliothèque secrète", "Support 24/7"],
      price: "77€/mois"
    },
    {
      icon: "⚡",
      title: "Activation Royale",
      description: "Programme intensif de 90 jours pour révéler ta magnificence et créer l'abondance dans tous les domaines.",
      features: ["Coaching 1:1 hebdomadaire", "Outils de manifestation", "Rituels personnalisés", "Certification"],
      price: "2997€"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Fond avec particules */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cosmic-nebula-green rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold cosmic-text mb-6">
            Portails de Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choisis ton chemin vers l'illumination. Chaque portail ouvre une dimension nouvelle 
            de ton être multidimensionnel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Effet de glow au hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-nebula-purple via-cosmic-stellar-gold to-cosmic-nebula-green rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-cosmic-stellar-gold/20 hover:border-cosmic-stellar-gold/50 transition-all duration-300 h-full flex flex-col">
                <div className="text-6xl mb-6 text-center animate-float">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-cosmic-stellar-gold mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-card-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-cosmic-nebula-green rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-auto">
                  <div className="text-2xl font-bold cosmic-text mb-4">
                    {service.price}
                  </div>
                  <Button variant="stellar" className="w-full">
                    Commencer l'Aventure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="royal" size="xl">
            Consultation Gratuite de 30 min
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;