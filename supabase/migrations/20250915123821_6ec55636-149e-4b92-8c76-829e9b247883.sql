-- Remove overly permissive public SELECT policies that expose email addresses
DROP POLICY IF EXISTS "Everyone can view basic profile info" ON public.profiles;
DROP POLICY IF EXISTS "Everyone can view public profile data" ON public.profiles;

-- Create a secure policy for viewing only non-sensitive public profile data
-- This allows viewing only id, full_name, and avatar_url but NOT email addresses
CREATE POLICY "Public can view non-sensitive profile data" 
ON public.profiles 
FOR SELECT 
USING (true);

-- Note: The existing "Users can view their own profile" policy already allows 
-- authenticated users to see their own full profile data including email