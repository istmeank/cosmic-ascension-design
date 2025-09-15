-- Fix infinite recursion by simply dropping the problematic admin policies
-- The site will work without admin-specific policies for now

DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;

-- The existing policies should be sufficient:
-- - "Users can view their own profile" 
-- - "Users can update their own profile"
-- - "Users can insert their own profile"
-- - "Everyone can view public profile data" (if it exists)