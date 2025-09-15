-- Insérer quelques formations d'exemple
INSERT INTO public.formations (title, description, price, duration, level, is_published) VALUES 
('Maîtriser l''Art de la Communication', 'Développez votre charisme et votre capacité à captiver votre audience dans toutes les situations professionnelles et personnelles.', 197.00, 120, 'intermédiaire', true),
('Leadership & Management d''Excellence', 'Apprenez les techniques avancées de leadership pour mener vos équipes vers le succès et l''excellence.', 297.00, 180, 'avancé', true),
('Développement Personnel Niveau 1', 'Les fondamentaux pour débuter votre transformation personnelle et professionnelle en toute confiance.', 97.00, 90, 'débutant', true);

-- Insérer quelques services et produits d'exemple
INSERT INTO public.services_products (name, description, price, type, features, is_active) VALUES 
('Coaching Individuel Premium', 'Accompagnement personnalisé one-to-one pour atteindre vos objectifs les plus ambitieux.', 350.00, 'service', '["Séances individuelles de 90 minutes", "Plan d''action personnalisé", "Suivi par email illimité", "Outils exclusifs", "Garantie résultats"]'::jsonb, true),
('Masterclass Groupe VIP', 'Formation intensive en petit groupe pour une transformation rapide et durable.', 1500.00, 'service', '["Groupe limité à 8 personnes", "3 jours intensifs", "Suivi 3 mois", "Accès vie aux replays", "Certification"]'::jsonb, true),
('Guide Ultime du Succès', 'Livre numérique complet avec toutes les stratégies pour réussir dans tous les domaines de votre vie.', 47.00, 'product', '["200+ pages de contenu", "Exercices pratiques", "Templates prêts à utiliser", "Bonus audio", "Mises à jour gratuites"]'::jsonb, true),
('Kit de Développement Personnel', 'Pack complet d''outils et de ressources pour votre développement personnel et professionnel.', 127.00, 'product', '["Workbook de 100 pages", "Audio de méditation", "Planificateur mensuel", "Check-lists d''objectifs", "Accès communauté privée"]'::jsonb, true);