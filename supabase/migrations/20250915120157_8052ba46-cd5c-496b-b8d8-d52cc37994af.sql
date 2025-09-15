-- Fix ALL infinite recursion issues in RLS policies
-- The problem is that admin policies are querying the same tables they're protecting

-- Step 1: Drop all problematic recursive policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can manage formations" ON public.formations;
DROP POLICY IF EXISTS "Admins can manage services" ON public.services_products;
DROP POLICY IF EXISTS "Admins can view all purchases" ON public.formation_purchases;

-- Step 2: Create a proper security definer function to check admin role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Step 3: Create non-recursive admin policies using the function

-- Profiles table policies
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can update all profiles" 
ON public.profiles 
FOR UPDATE 
USING (public.get_current_user_role() = 'admin');

-- Formations table policies  
CREATE POLICY "Admins can manage formations" 
ON public.formations 
FOR ALL
USING (public.get_current_user_role() = 'admin');

-- Services/products table policies
CREATE POLICY "Admins can manage services" 
ON public.services_products 
FOR ALL
USING (public.get_current_user_role() = 'admin');

-- Formation purchases policies
CREATE POLICY "Admins can view all purchases" 
ON public.formation_purchases 
FOR SELECT
USING (public.get_current_user_role() = 'admin');

-- Step 4: Ensure everyone can view published content (no auth required)
CREATE POLICY "Everyone can view published formations" 
ON public.formations 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Everyone can view active services" 
ON public.services_products 
FOR SELECT 
USING (is_active = true);

-- Step 5: Also add a simple public view policy for profiles
CREATE POLICY "Everyone can view basic profile info" 
ON public.profiles 
FOR SELECT 
USING (true);