-- Modifier les prix et descriptions des services/produits
UPDATE services_products SET 
  price = 120000,
  name = 'Programme d''accompagnement Perception - À partir de 120 000 DA Par devis'
WHERE id = '8a3341f9-8e4b-4c67-83c4-3330f168bb8b';

UPDATE services_products SET 
  price = 2500,
  name = 'LEVEL UP for Ladies - À partir de 2500 DA'
WHERE id = '38c2bfad-ac0f-4eaf-9983-588ad61c8698';

UPDATE services_products SET 
  name = 'Livre Qui suis-je le fondement d''un roi (Physique + Numérique)',
  description = 'Livre physique et numérique complet avec toutes les stratégies pour réussir dans tous les domaines de votre vie. Exclusivement disponible pour les inscrits au programme Perception.',
  features = '["Livre physique + version numérique", "200+ pages de contenu", "Exercices pratiques", "Templates prêts à utiliser", "Bonus audio", "Mises à jour gratuites", "Réservé aux inscrits programme Perception"]'::jsonb
WHERE id = '3ffbc592-f2ca-4eed-9f17-e1b01d89ca3c';