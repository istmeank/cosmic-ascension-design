import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogOut, Users, BookOpen, Package, ShoppingCart, Upload, Download } from "lucide-react";
import type { User, Session } from '@supabase/supabase-js';

interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: string;
  created_at: string;
}

interface Formation {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  level: string;
  is_published: boolean;
  video_url: string;
  thumbnail_url: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  is_active: boolean;
  image_url: string;
  features?: unknown;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [formations, setFormations] = useState<Formation[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (!session) {
          navigate('/auth');
        } else {
          checkAdminRole(session.user.id);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session) {
        navigate('/auth');
      } else {
        checkAdminRole(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      if (error || data?.role !== 'admin') {
        toast({
          title: "Accès refusé",
          description: "Vous n'avez pas les permissions d'administrateur.",
          variant: "destructive"
        });
        navigate('/');
        return;
      }

      setIsAdmin(true);
      await loadData();
    } catch (error) {
      console.error('Error checking admin role:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const loadData = async () => {
    try {
      // Load profiles
      const { data: profilesData } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      setProfiles(profilesData || []);

      // Load formations
      const { data: formationsData } = await supabase
        .from('formations')
        .select('*')
        .order('created_at', { ascending: false });
      
      setFormations(formationsData || []);

      // Load services
      const { data: servicesData } = await supabase
        .from('services_products')
        .select('*')
        .order('created_at', { ascending: false });
      
      setServices(servicesData || []);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les données.",
        variant: "destructive"
      });
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "Succès",
        description: "Rôle mis à jour avec succès."
      });

      await loadData();
    } catch (error) {
      console.error('Error updating role:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le rôle.",
        variant: "destructive"
      });
    }
  };

  const toggleFormationPublished = async (formationId: string, isPublished: boolean) => {
    try {
      const { error } = await supabase
        .from('formations')
        .update({ is_published: !isPublished })
        .eq('id', formationId);

      if (error) throw error;

      toast({
        title: "Succès",
        description: "Formation mise à jour avec succès."
      });

      await loadData();
    } catch (error) {
      console.error('Error updating formation:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la formation.",
        variant: "destructive"
      });
    }
  };

  const toggleServiceActive = async (serviceId: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('services_products')
        .update({ is_active: !isActive })
        .eq('id', serviceId);

      if (error) throw error;

      toast({
        title: "Succès",
        description: "Service mis à jour avec succès."
      });

      await loadData();
    } catch (error) {
      console.error('Error updating service:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le service.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="cosmic-glow">Chargement...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold cosmic-text">Panneau d'Administration</h1>
            <p className="text-muted-foreground mt-2">
              Gérez votre site et vos utilisateurs
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">{user?.email}</Badge>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Utilisateurs
            </TabsTrigger>
            <TabsTrigger value="formations" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Formations
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="purchases" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Achats
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Fichiers
            </TabsTrigger>
          </TabsList>

          {/* Users Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Nom complet</TableHead>
                      <TableHead>Rôle</TableHead>
                      <TableHead>Date d'inscription</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profiles.map((profile) => (
                      <TableRow key={profile.id}>
                        <TableCell>{profile.email}</TableCell>
                        <TableCell>{profile.full_name || 'N/A'}</TableCell>
                        <TableCell>
                          <Badge variant={profile.role === 'admin' ? 'default' : 'secondary'}>
                            {profile.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(profile.created_at).toLocaleDateString('fr-FR')}
                        </TableCell>
                        <TableCell>
                          <Select
                            value={profile.role}
                            onValueChange={(value) => updateUserRole(profile.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formations Management */}
          <TabsContent value="formations">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des formations</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titre</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Niveau</TableHead>
                      <TableHead>Durée</TableHead>
                      <TableHead>Publié</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {formations.map((formation) => (
                      <TableRow key={formation.id}>
                        <TableCell className="font-medium">{formation.title}</TableCell>
                        <TableCell>{formation.price}€</TableCell>
                        <TableCell>
                          <Badge variant="outline">{formation.level}</Badge>
                        </TableCell>
                        <TableCell>{formation.duration}h</TableCell>
                        <TableCell>
                          <Switch
                            checked={formation.is_published}
                            onCheckedChange={() => toggleFormationPublished(formation.id, formation.is_published)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Modifier
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Management */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des services</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Actif</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{service.type}</Badge>
                        </TableCell>
                        <TableCell>{service.price}€</TableCell>
                        <TableCell>
                          <Switch
                            checked={service.is_active}
                            onCheckedChange={() => toggleServiceActive(service.id, service.is_active)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Modifier
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Purchases Tab */}
          <TabsContent value="purchases">
            <Card>
              <CardHeader>
                <CardTitle>Historique des achats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fonctionnalité à venir - Visualisation des achats de formations
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Files Management */}
          <TabsContent value="files">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des fichiers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Upload className="w-4 h-4" />
                      <Label>Vidéos de formation</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Gérer les vidéos uploadées
                    </p>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="w-4 h-4" />
                      <Label>Images de services</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Gérer les images des services
                    </p>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-4 h-4" />
                      <Label>Thumbnails</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Gérer les miniatures
                    </p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;