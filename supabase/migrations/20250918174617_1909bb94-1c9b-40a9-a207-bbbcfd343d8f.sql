-- Add RLS policies for formations table to restrict INSERT/UPDATE to admin users only

-- Policy for INSERT: Only admins can create new formations
CREATE POLICY "Seuls les admins peuvent créer des formations" 
ON public.formations 
FOR INSERT 
TO authenticated
WITH CHECK (public.get_current_user_role() = 'admin');

-- Policy for UPDATE: Only admins can update formations
CREATE POLICY "Seuls les admins peuvent modifier des formations" 
ON public.formations 
FOR UPDATE 
TO authenticated
USING (public.get_current_user_role() = 'admin')
WITH CHECK (public.get_current_user_role() = 'admin');

-- Policy for DELETE: Only admins can delete formations
CREATE POLICY "Seuls les admins peuvent supprimer des formations" 
ON public.formations 
FOR DELETE 
TO authenticated
USING (public.get_current_user_role() = 'admin');