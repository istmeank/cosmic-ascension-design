import { Card, CardContent } from "@/components/ui/card";

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo de profil */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-stellar-gold/20 to-cosmic-nebula-green/20 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-card to-cosmic-deep-space rounded-full p-8 border border-cosmic-stellar-gold/30">
                <div className="w-full aspect-square bg-gradient-to-br from-cosmic-stellar-gold/10 to-cosmic-nebula-green/10 rounded-full flex items-center justify-center">
                  <div className="text-6xl cosmic-text">👨‍💼</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold cosmic-text mb-4">Mon Parcours</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort de plusieurs années d'expérience dans le développement personnel et professionnel, 
                  j'accompagne les Ladies & Gentlemen dans leur quête d'excellence. Ma mission est de vous 
                  aider à révéler votre potentiel et à atteindre vos objectifs les plus ambitieux.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold cosmic-text mb-4">Ma Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Je crois fermement qu'chaque personne possède un potentiel extraordinaire. Mon approche 
                  combine méthodes éprouvées et innovations pour créer des transformations durables et 
                  significatives dans votre vie personnelle et professionnelle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold cosmic-text mb-4">Mes Valeurs</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cosmic-stellar-gold/10 rounded-lg">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-semibold text-cosmic-stellar-gold">Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-cosmic-nebula-green/10 rounded-lg">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="text-sm font-semibold text-cosmic-nebula-green">Intégrité</div>
                  </div>
                  <div className="text-center p-4 bg-cosmic-nebula-purple/10 rounded-lg">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="text-sm font-semibold text-cosmic-nebula-purple">Innovation</div>
                  </div>
                  <div className="text-center p-4 bg-cosmic-purple-pink/10 rounded-lg">
                    <div className="text-2xl mb-2">❤️</div>
                    <div className="text-sm font-semibold text-cosmic-purple-pink">Bienveillance</div>
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