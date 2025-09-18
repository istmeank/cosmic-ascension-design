import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Video, Image, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const FormationUpload = () => {
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    duration: 0,
    level: 'débutant'
  });

  // Check if user is admin on component mount
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setIsAdmin(false);
          setCheckingAuth(false);
          return;
        }

        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user profile:', error);
          setIsAdmin(false);
        } else {
          setIsAdmin(profile?.role === 'admin');
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAdminStatus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Vous devez être connecté');
        return;
      }

      const { error } = await supabase
        .from('formations')
        .insert({
          ...formData,
          is_published: false // Par défaut, les formations sont en brouillon
        });

      if (error) throw error;

      toast.success('Formation créée avec succès !');
      setFormData({
        title: '',
        description: '',
        price: 0,
        duration: 0,
        level: 'débutant'
      });
    } catch (error) {
      console.error('Error creating formation:', error);
      toast.error('Erreur lors de la création de la formation');
    } finally {
      setLoading(false);
    }
  };

  const handleVideoUpload = async (file: File, formationId: string) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${formationId}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('formation-videos')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { error: updateError } = await supabase
        .from('formations')
        .update({ video_url: filePath })
        .eq('id', formationId);

      if (updateError) throw updateError;

      toast.success('Vidéo uploadée avec succès !');
    } catch (error) {
      console.error('Error uploading video:', error);
      toast.error('Erreur lors de l\'upload de la vidéo');
    }
  };

  const handleThumbnailUpload = async (file: File, formationId: string) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${formationId}-thumbnail.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('formation-thumbnails')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('formation-thumbnails')
        .getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from('formations')
        .update({ thumbnail_url: data.publicUrl })
        .eq('id', formationId);

      if (updateError) throw updateError;

      toast.success('Miniature uploadée avec succès !');
    } catch (error) {
      console.error('Error uploading thumbnail:', error);
      toast.error('Erreur lors de l\'upload de la miniature');
    }
  };

  // Show loading state while checking authentication
  if (checkingAuth) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20">
          <CardContent className="flex items-center justify-center p-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cosmic-stellar-gold mx-auto mb-4"></div>
              <p className="text-muted-foreground">Vérification des autorisations...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show unauthorized access message for non-admin users
  if (!isAdmin) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20">
          <CardContent className="text-center p-12">
            <Shield className="w-16 h-16 text-cosmic-stellar-gold mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-cosmic-stellar-gold mb-4">
              Accès Restreint
            </h2>
            <p className="text-muted-foreground mb-6">
              Cette section est réservée aux administrateurs. Vous devez avoir des privilèges d'administrateur pour créer des formations.
            </p>
            <p className="text-sm text-muted-foreground">
              Si vous pensez que c'est une erreur, veuillez contacter l'administrateur du site.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-card/60 backdrop-blur-sm border-cosmic-stellar-gold/20">
        <CardHeader>
          <CardTitle className="cosmic-text text-2xl">Créer une nouvelle formation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Titre de la formation</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ex: Maîtriser l'art de la négociation"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Prix (DA)</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Durée (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  min="1"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  placeholder="60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Niveau</Label>
                <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="débutant">Débutant</SelectItem>
                    <SelectItem value="intermédiaire">Intermédiaire</SelectItem>
                    <SelectItem value="avancé">Avancé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Décrivez votre formation, ses objectifs et ce que les participants vont apprendre..."
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Vidéo de la formation</Label>
                <div className="border-2 border-dashed border-cosmic-stellar-gold/30 rounded-lg p-6 text-center hover:border-cosmic-stellar-gold/50 transition-colors">
                  <Video className="w-12 h-12 text-cosmic-stellar-gold mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Glissez-déposez votre vidéo ou cliquez pour parcourir
                  </p>
                  <Input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    id="video-upload"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        // Logique d'upload après création de la formation
                        console.log('Video file selected:', file.name);
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('video-upload')?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choisir une vidéo
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Miniature</Label>
                <div className="border-2 border-dashed border-cosmic-stellar-gold/30 rounded-lg p-6 text-center hover:border-cosmic-stellar-gold/50 transition-colors">
                  <Image className="w-12 h-12 text-cosmic-stellar-gold mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Image de couverture pour votre formation
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="thumbnail-upload"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        console.log('Thumbnail file selected:', file.name);
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('thumbnail-upload')?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choisir une image
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" variant="stellar" disabled={loading} className="flex-1">
                {loading ? 'Création en cours...' : 'Créer la formation'}
              </Button>
              <Button type="button" variant="outline" disabled={loading}>
                Sauvegarder en brouillon
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormationUpload;