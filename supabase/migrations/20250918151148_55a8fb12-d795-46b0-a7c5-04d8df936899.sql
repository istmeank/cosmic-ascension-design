-- Fix security vulnerability: Remove overly permissive RLS policy on formations table
-- This policy allows unrestricted access to all formations, including unpublished ones
DROP POLICY IF EXISTS "Enable read access for all users" ON public.formations;

-- Keep only the secure policy that restricts access to published formations
-- The policy "Tout le monde peut voir les formations publiées" already exists and is correct