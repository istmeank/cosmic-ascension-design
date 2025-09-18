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

        {/* Constellations décoratives galactiques */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Constellation 1 - Haut gauche */}
          <svg width="120" height="80" className="absolute top-10 left-10 opacity-60">
            <line x1="20" y1="60" x2="50" y2="30" stroke="#FFD700" strokeWidth="0.8" opacity="0.8"/>
            <line x1="50" y1="30" x2="80" y2="50" stroke="#FFD700" strokeWidth="0.8" opacity="0.8"/>
            <line x1="80" y1="50" x2="100" y2="20" stroke="#FFD700" strokeWidth="0.8" opacity="0.8"/>
            <circle cx="20" cy="60" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="30" r="3" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="50" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="20" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.2s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Constellation 2 - Haut droite */}
          <svg width="100" height="90" className="absolute top-20 right-16 opacity-50">
            <line x1="10" y1="70" x2="40" y2="20" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="40" y1="20" x2="70" y2="45" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="70" y1="45" x2="90" y2="10" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="25" y1="50" x2="40" y2="20" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <circle cx="10" cy="70" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="20" r="2.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="70" cy="45" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="90" cy="10" r="1" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="50" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.3s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Constellation 3 - Milieu gauche */}
          <svg width="80" height="120" className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-45">
            <line x1="60" y1="20" x2="30" y2="60" stroke="#FFD700" strokeWidth="0.8" opacity="0.6"/>
            <line x1="30" y1="60" x2="50" y2="100" stroke="#FFD700" strokeWidth="0.8" opacity="0.6"/>
            <line x1="10" y1="40" x2="30" y2="60" stroke="#FFD700" strokeWidth="0.8" opacity="0.6"/>
            <circle cx="60" cy="20" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="60" r="3" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="100" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="10" cy="40" r="1" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.8s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Constellation 4 - Milieu droite */}
          <svg width="90" height="110" className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-55">
            <line x1="20" y1="30" x2="60" y2="50" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="60" y1="50" x2="40" y2="90" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="40" y1="90" x2="80" y2="80" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="60" y1="50" x2="85" y2="25" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <circle cx="20" cy="30" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="50" r="2.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="90" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="80" r="1" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="85" cy="25" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.7s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Constellation 5 - Bas gauche */}
          <svg width="110" height="70" className="absolute bottom-32 left-12 opacity-40">
            <line x1="15" y1="50" x2="45" y2="20" stroke="#FFD700" strokeWidth="0.8" opacity="0.6"/>
            <line x1="45" y1="20" x2="75" y2="40" stroke="#FFD700" strokeWidth="0.8" opacity="0.6"/>
            <line x1="75" y1="40" x2="95" y2="15" stroke="#FFD700" strokeWidth="0.8" opacity="0.6"/>
            <line x1="30" y1="60" x2="45" y2="20" stroke="#FFD700" strokeWidth="0.8" opacity="0.6"/>
            <circle cx="15" cy="50" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="45" cy="20" r="2.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="75" cy="40" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="95" cy="15" r="1" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="60" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Constellation 6 - Bas droite */}
          <svg width="95" height="85" className="absolute bottom-28 right-14 opacity-50">
            <line x1="20" y1="65" x2="50" y2="25" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="50" y1="25" x2="80" y2="55" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="35" y1="45" x2="50" y2="25" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <line x1="65" y1="70" x2="80" y2="55" stroke="#FFD700" strokeWidth="0.8" opacity="0.7"/>
            <circle cx="20" cy="65" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="25" r="3" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="55" r="2" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="35" cy="45" r="1" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="65" cy="70" r="1.5" fill="#FFD700" className="animate-pulse">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.9s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Petites étoiles isolées pour effet galactique */}
          <div className="absolute top-16 left-1/3 w-1 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-600 rounded-full animate-ping opacity-50 animation-delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-0.5 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full animate-pulse opacity-30 animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full animate-ping opacity-45 animation-delay-3000"></div>
          <div className="absolute top-2/3 right-1/6 w-0.5 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse opacity-35 animation-delay-1500"></div>
        </div>

        {/* Photo de profil - centrée en haut */}
        <div className="flex justify-center mb-16">
          <div className="relative w-80 h-80">
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