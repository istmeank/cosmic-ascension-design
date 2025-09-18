-- Fix security issue: Ensure profiles table properly restricts access to authenticated users only
-- First, let's see what policies exist and drop them with the exact names
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Authenticated users can view only their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Authenticated users can insert only their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Authenticated users can update only their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Deny all access to anonymous users" ON public.profiles;

-- Create new, more secure policies that explicitly require authentication
CREATE POLICY "secure_profiles_select" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "secure_profiles_insert" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "secure_profiles_update" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Explicitly deny all access to anonymous/unauthenticated users
CREATE POLICY "deny_anon_profiles" 
ON public.profiles 
FOR ALL 
TO anon
USING (false);