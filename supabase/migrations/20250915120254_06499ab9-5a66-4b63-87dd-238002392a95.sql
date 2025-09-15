-- Drop the remaining admin policies that still cause infinite recursion
-- because get_current_user_role() function queries the profiles table

DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;

-- Also drop similar policies from other tables to prevent the same issue
DROP POLICY IF EXISTS "Admins can view all purchases" ON public.formation_purchases;
DROP POLICY IF EXISTS "Admins can manage formations" ON public.formations;
DROP POLICY IF EXISTS "Admins can manage services" ON public.services_products;

-- The site will work with regular user policies only
-- Admin functionality can be re-implemented later using a proper roles system