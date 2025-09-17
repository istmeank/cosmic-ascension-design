-- Remplacer le titre de la formation "Matriser l'art de la communication"
UPDATE formations 
SET title = 'Les mécanismes de la communication effective'
WHERE title ILIKE '%Matriser l''art de la communication%' OR title ILIKE '%Maîtriser l''art de la communication%';