-- Changer les 2 services
UPDATE services_products 
SET name = 'Programme d''accompagnement Perception'
WHERE id = '8a3341f9-8e4b-4c67-83c4-3330f168bb8b';

UPDATE services_products 
SET name = 'LEVEL UP for Ladies'
WHERE id = '38c2bfad-ac0f-4eaf-9983-588ad61c8698';

-- Changer le premier produit
UPDATE services_products 
SET name = 'Livre Qui suis-je le fondement d''un roi'
WHERE id = '3ffbc592-f2ca-4eed-9f17-e1b01d89ca3c';