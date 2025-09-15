-- Créer les tables pour le système de formations
CREATE TABLE public.formations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  video_url TEXT,
  thumbnail_url TEXT,
  duration INTEGER, -- durée en minutes
  level TEXT CHECK (level IN ('débutant', 'intermédiaire', 'avancé')) DEFAULT 'débutant',
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Créer la table des achats de formations
CREATE TABLE public.formation_purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  formation_id UUID NOT NULL REFERENCES public.formations(id) ON DELETE CASCADE,
  purchase_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
  amount DECIMAL(10,2) NOT NULL,
  UNIQUE(user_id, formation_id)
);

-- Créer la table des services et produits
CREATE TABLE public.services_products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  type TEXT CHECK (type IN ('service', 'product')) NOT NULL,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  features JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur toutes les tables
ALTER TABLE public.formations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.formation_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services_products ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour formations (lecture publique, écriture admin)
CREATE POLICY "Tout le monde peut voir les formations publiées" 
ON public.formations 
FOR SELECT 
USING (is_published = true);

-- Politiques RLS pour les achats (utilisateurs voient leurs achats)
CREATE POLICY "Les utilisateurs voient leurs achats" 
ON public.formation_purchases 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent acheter des formations" 
ON public.formation_purchases 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Politiques RLS pour services/produits (lecture publique)
CREATE POLICY "Tout le monde peut voir les services/produits actifs" 
ON public.services_products 
FOR SELECT 
USING (is_active = true);

-- Créer les buckets de stockage pour les vidéos et images
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('formation-videos', 'formation-videos', false),
  ('formation-thumbnails', 'formation-thumbnails', true),
  ('service-images', 'service-images', true);

-- Politiques de stockage pour les vidéos (accès restreint aux acheteurs)
CREATE POLICY "Accès vidéos formations pour acheteurs"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'formation-videos' AND
  EXISTS (
    SELECT 1 FROM public.formation_purchases fp
    JOIN public.formations f ON f.id = fp.formation_id
    WHERE fp.user_id = auth.uid() 
    AND fp.payment_status = 'completed'
    AND storage.filename(name) LIKE f.id::text || '%'
  )
);

-- Politiques pour les miniatures (publiques)
CREATE POLICY "Miniatures formations publiques"
ON storage.objects
FOR SELECT
USING (bucket_id = 'formation-thumbnails');

-- Politiques pour les images de services (publiques)
CREATE POLICY "Images services publiques"
ON storage.objects
FOR SELECT
USING (bucket_id = 'service-images');

-- Trigger pour mettre à jour updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_formations_updated_at
  BEFORE UPDATE ON public.formations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_products_updated_at
  BEFORE UPDATE ON public.services_products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();