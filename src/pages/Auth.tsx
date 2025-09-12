import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { User, Session } from "@supabase/supabase-js";
import { toast } from "sonner";

const Auth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const defaultTab = searchParams.get("tab") || "signup";

  // Auth state management
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Redirect authenticated users to home
        if (session?.user) {
          navigate("/");
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      // Redirect if already authenticated
      if (session?.user) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    
    setLoading(false);
    
    if (error) {
      if (error.message.includes("User already registered")) {
        toast.error("Un compte existe déjà avec cette adresse email. Essayez de vous connecter.");
      } else {
        toast.error(error.message);
      }
    } else {
      toast.success("Vérifiez votre email pour confirmer votre inscription !");
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    setLoading(false);
    
    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        toast.error("Identifiants invalides. Vérifiez votre email et mot de passe.");
      } else {
        toast.error(error.message);
      }
    }
  };

  const AuthForm = ({ mode }: { mode: "signin" | "signup" }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (mode === "signup") {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-card/50 border-cosmic-stellar-gold/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-card/50 border-cosmic-stellar-gold/20"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
          variant={mode === "signup" ? "royal" : "cosmic"}
        >
          {loading ? "Chargement..." : mode === "signup" ? "S'inscrire" : "Se connecter"}
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-cosmic-deep-space via-background to-cosmic-deep-space">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/logo-level-up.svg" 
            alt="LEVEL UP" 
            className="w-16 h-16 mx-auto mb-4 filter drop-shadow-[0_0_20px_hsl(var(--cosmic-stellar-gold)/0.8)]"
          />
          <h1 className="text-3xl font-bold cosmic-text mb-2">LEVEL UP</h1>
          <p className="text-muted-foreground">Rejoignez l'univers cosmique</p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-cosmic-stellar-gold/20">
          <CardHeader className="text-center">
            <CardTitle className="cosmic-text">Authentification</CardTitle>
            <CardDescription>
              Créez votre compte ou connectez-vous à votre espace
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signup">S'inscrire</TabsTrigger>
                <TabsTrigger value="signin">Se connecter</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signup">
                <AuthForm mode="signup" />
              </TabsContent>
              
              <TabsContent value="signin">
                <AuthForm mode="signin" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-cosmic-stellar-gold hover:text-cosmic-stellar-gold/80"
          >
            ← Retour à l'accueil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;