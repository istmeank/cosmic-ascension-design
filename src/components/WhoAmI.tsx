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

        {/* Photo de profil - centrée en haut */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-80 h-80 relative">
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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mon Parcours */}
          <div className="space-y-6">
            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold cosmic-text mb-4">Mon Parcours</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Fort de plusieurs années d'expérience dans le développement personnel et professionnel, 
                  j'accompagne les Ladies & Gentlemen dans leur quête d'excellence. Ma mission est de vous 
                  aider à révéler votre potentiel et à atteindre vos objectifs les plus ambitieux.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Ma Vision */}
          <div className="space-y-6">
            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold cosmic-text mb-4">Ma Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Je crois fermement que chaque personne possède un potentiel extraordinaire. Mon approche 
                  combine méthodes éprouvées et innovations pour créer des transformations durables et 
                  significatives dans votre vie personnelle et professionnelle.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mes Valeurs */}
          <div className="space-y-6">
            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold cosmic-text mb-4">Mes Valeurs</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-cosmic-purple-pink/10 rounded-lg">
                    <div className="text-xl mb-1">❤️</div>
                    <div className="text-xs font-semibold text-cosmic-purple-pink">Bienveillance</div>
                  </div>
                  <div className="text-center p-3 bg-cosmic-stellar-gold/10 rounded-lg">
                    <div className="text-xl mb-1">👑</div>
                    <div className="text-xs font-semibold text-cosmic-stellar-gold">Souveraineté</div>
                  </div>
                  <div className="text-center p-3 bg-cosmic-nebula-green/10 rounded-lg">
                    <div className="text-xl mb-1">🙏</div>
                    <div className="text-xs font-semibold text-cosmic-nebula-green">Acceptation</div>
                  </div>
                  <div className="text-center p-3 bg-cosmic-nebula-purple/10 rounded-lg">
                    <div className="text-xl mb-1">🧠</div>
                    <div className="text-xs font-semibold text-cosmic-nebula-purple">Sagesse</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;