import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

const WhoAmI = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cosmic-deep-space via-background to-cosmic-deep-space">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-6">
            Qui suis-je ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-stellar-gold to-cosmic-nebula-green mx-auto mb-8"></div>
        </div>

        {/* Photo de profil - centrée en haut avec constellations */}
        <div className="flex justify-center mb-16">
          <div className="relative w-[600px] h-[600px]">
            
            {/* Constellation Bienveillance - Nord */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="120" className="absolute -translate-x-1/2 -translate-y-1/2">
                {/* Lignes de constellation */}
                <line x1="50" y1="80" x2="100" y2="30" stroke="hsl(var(--cosmic-purple-pink))" strokeWidth="1" opacity="0.8"/>
                <line x1="100" y1="30" x2="150" y2="80" stroke="hsl(var(--cosmic-purple-pink))" strokeWidth="1" opacity="0.8"/>
                <line x1="75" y1="60" x2="100" y2="30" stroke="hsl(var(--cosmic-purple-pink))" strokeWidth="1" opacity="0.8"/>
                <line x1="125" y1="60" x2="150" y2="80" stroke="hsl(var(--cosmic-purple-pink))" strokeWidth="1" opacity="0.8"/>
                
                {/* Étoiles */}
                <circle cx="50" cy="80" r="3" fill="hsl(var(--cosmic-purple-pink))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="30" r="4" fill="hsl(var(--cosmic-purple-pink))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="150" cy="80" r="3" fill="hsl(var(--cosmic-purple-pink))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="75" cy="60" r="2" fill="hsl(var(--cosmic-purple-pink))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="125" cy="60" r="2" fill="hsl(var(--cosmic-purple-pink))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1.6s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div className="text-center mt-8">
                <span className="text-sm font-semibold text-cosmic-purple-pink whitespace-nowrap">❤️ Bienveillance</span>
              </div>
            </div>

            {/* Constellation Souveraineté - Est */}
            <div className="absolute top-1/2 -right-32 transform -translate-y-1/2">
              <svg width="160" height="200" className="absolute -translate-x-1/2 -translate-y-1/2">
                {/* Lignes de constellation - forme couronne */}
                <line x1="80" y1="50" x2="60" y2="100" stroke="hsl(var(--cosmic-stellar-gold))" strokeWidth="1" opacity="0.8"/>
                <line x1="80" y1="50" x2="100" y2="100" stroke="hsl(var(--cosmic-stellar-gold))" strokeWidth="1" opacity="0.8"/>
                <line x1="60" y1="100" x2="80" y2="150" stroke="hsl(var(--cosmic-stellar-gold))" strokeWidth="1" opacity="0.8"/>
                <line x1="100" y1="100" x2="80" y2="150" stroke="hsl(var(--cosmic-stellar-gold))" strokeWidth="1" opacity="0.8"/>
                <line x1="40" y1="75" x2="60" y2="100" stroke="hsl(var(--cosmic-stellar-gold))" strokeWidth="1" opacity="0.8"/>
                <line x1="120" y1="75" x2="100" y2="100" stroke="hsl(var(--cosmic-stellar-gold))" strokeWidth="1" opacity="0.8"/>
                
                {/* Étoiles */}
                <circle cx="80" cy="50" r="4" fill="hsl(var(--cosmic-stellar-gold))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="60" cy="100" r="3" fill="hsl(var(--cosmic-stellar-gold))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="100" r="3" fill="hsl(var(--cosmic-stellar-gold))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1.9s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="150" r="3" fill="hsl(var(--cosmic-stellar-gold))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="40" cy="75" r="2" fill="hsl(var(--cosmic-stellar-gold))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.7s" repeatCount="indefinite"/>
                </circle>
                <circle cx="120" cy="75" r="2" fill="hsl(var(--cosmic-stellar-gold))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.7s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div className="text-center mt-16 ml-8">
                <span className="text-sm font-semibold text-cosmic-stellar-gold whitespace-nowrap">👑 Souveraineté</span>
              </div>
            </div>

            {/* Constellation Acceptation - Sud */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <svg width="180" height="140" className="absolute -translate-x-1/2 -translate-y-1/2">
                {/* Lignes de constellation - forme lotus/mandala */}
                <line x1="90" y1="40" x2="60" y2="80" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                <line x1="90" y1="40" x2="120" y2="80" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                <line x1="60" y1="80" x2="90" y2="120" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                <line x1="120" y1="80" x2="90" y2="120" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                <line x1="30" y1="60" x2="60" y2="80" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                <line x1="150" y1="60" x2="120" y2="80" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                <line x1="45" y1="100" x2="60" y2="80" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                <line x1="135" y1="100" x2="120" y2="80" stroke="hsl(var(--cosmic-nebula-green))" strokeWidth="1" opacity="0.8"/>
                
                {/* Étoiles */}
                <circle cx="90" cy="40" r="4" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="60" cy="80" r="3" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="120" cy="80" r="3" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="90" cy="120" r="3" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="30" cy="60" r="2" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="150" cy="60" r="2" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.9s" repeatCount="indefinite"/>
                </circle>
                <circle cx="45" cy="100" r="2" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="135" cy="100" r="2" fill="hsl(var(--cosmic-nebula-green))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="1.4s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div className="text-center mt-12">
                <span className="text-sm font-semibold text-cosmic-nebula-green whitespace-nowrap">🙏 Acceptation</span>
              </div>
            </div>

            {/* Constellation Sagesse - Ouest */}
            <div className="absolute top-1/2 -left-28 transform -translate-y-1/2">
              <svg width="140" height="180" className="absolute -translate-x-1/2 -translate-y-1/2">
                {/* Lignes de constellation - forme spirale de sagesse */}
                <line x1="70" y1="40" x2="50" y2="70" stroke="hsl(var(--cosmic-nebula-purple))" strokeWidth="1" opacity="0.8"/>
                <line x1="50" y1="70" x2="90" y2="100" stroke="hsl(var(--cosmic-nebula-purple))" strokeWidth="1" opacity="0.8"/>
                <line x1="90" y1="100" x2="40" y2="130" stroke="hsl(var(--cosmic-nebula-purple))" strokeWidth="1" opacity="0.8"/>
                <line x1="40" y1="130" x2="100" y2="150" stroke="hsl(var(--cosmic-nebula-purple))" strokeWidth="1" opacity="0.8"/>
                <line x1="70" y1="40" x2="110" y2="60" stroke="hsl(var(--cosmic-nebula-purple))" strokeWidth="1" opacity="0.8"/>
                <line x1="110" y1="60" x2="90" y2="100" stroke="hsl(var(--cosmic-nebula-purple))" strokeWidth="1" opacity="0.8"/>
                
                {/* Étoiles */}
                <circle cx="70" cy="40" r="4" fill="hsl(var(--cosmic-nebula-purple))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="1.7s" repeatCount="indefinite"/>
                </circle>
                <circle cx="50" cy="70" r="3" fill="hsl(var(--cosmic-nebula-purple))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite"/>
                </circle>
                <circle cx="90" cy="100" r="4" fill="hsl(var(--cosmic-nebula-purple))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="1.9s" repeatCount="indefinite"/>
                </circle>
                <circle cx="40" cy="130" r="3" fill="hsl(var(--cosmic-nebula-purple))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="150" r="2" fill="hsl(var(--cosmic-nebula-purple))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="110" cy="60" r="2" fill="hsl(var(--cosmic-nebula-purple))" className="animate-pulse">
                  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
              <div className="text-center mt-12 -ml-4">
                <span className="text-sm font-semibold text-cosmic-nebula-purple whitespace-nowrap">🧠 Sagesse</span>
              </div>
            </div>

            {/* Photo centrale */}
            <div className="w-80 h-80 relative mx-auto mt-8">
              {/* Effet nébuleux multiples couches */}
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-stellar-gold/30 to-cosmic-nebula-green/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-cosmic-nebula-purple/20 to-cosmic-purple-pink/20 rounded-full blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-cosmic-stellar-gold/10 to-cosmic-nebula-green/10 rounded-full blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-card to-cosmic-deep-space rounded-full p-4 border border-cosmic-stellar-gold/40 shadow-2xl h-full">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Photo de profil - Le sage Roi des nuages" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Petites étoiles décoratives fixes */}
            <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-16 right-16 w-1 h-1 bg-cosmic-stellar-gold rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-16 left-16 w-1 h-1 bg-cosmic-nebula-green rounded-full animate-ping animation-delay-2000"></div>
            <div className="absolute bottom-8 right-12 w-1 h-1 bg-cosmic-purple-pink rounded-full animate-ping animation-delay-3000"></div>
            <div className="absolute top-20 left-8 w-0.5 h-0.5 bg-cosmic-nebula-purple rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        {/* Titre honorifique */}
        <div className="text-center mb-12">
          <p className="text-xl text-cosmic-stellar-gold italic font-semibold">
            "Le sage Roi des nuages"
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Comme m'appellent affectueusement mes Padawans
          </p>
        </div>

        {/* Contenu - en bas en colonnes */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Mon Parcours */}
          <div className="space-y-6 relative">
            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20 h-full relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold cosmic-text mb-6">Mon Parcours</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort de plusieurs années d'expérience dans le développement personnel et professionnel, 
                  j'accompagne les Ladies & Gentlemen dans leur quête d'excellence. Ma mission est de vous 
                  aider à révéler votre potentiel et à atteindre vos objectifs les plus ambitieux.
                </p>
              </CardContent>
              {/* Petites étoiles décoratives autour de la carte */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-cosmic-stellar-gold rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-0.5 h-0.5 bg-cosmic-nebula-green rounded-full animate-ping"></div>
            </Card>
          </div>

          {/* Ma Vision */}
          <div className="space-y-6 relative">
            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20 h-full relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold cosmic-text mb-6">Ma Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Je crois fermement que chaque personne possède un potentiel extraordinaire. Mon approche 
                  combine méthodes éprouvées et innovations pour créer des transformations durables et 
                  significatives dans votre vie personnelle et professionnelle.
                </p>
              </CardContent>
              {/* Petites étoiles décoratives autour de la carte */}
              <div className="absolute top-6 left-4 w-1 h-1 bg-cosmic-purple-pink rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute bottom-4 right-6 w-0.5 h-0.5 bg-cosmic-nebula-purple rounded-full animate-ping animation-delay-2000"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;