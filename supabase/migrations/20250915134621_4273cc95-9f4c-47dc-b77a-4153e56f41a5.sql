-- Fix critical security vulnerability: Remove all public access to profiles table
-- This prevents anyone from accessing customer email addresses

-- Drop the public policy that allows anyone to view profile data
DROP POLICY IF EXISTS "Public can view non-sensitive profile data" ON public.profiles;

-- The remaining policies ensure:
-- 1. Users can only view their own profile (including email)
-- 2. Users can only update their own profile  
-- 3. Users can only insert their own profile
-- This follows the principle of least privilege and prevents email harvesting