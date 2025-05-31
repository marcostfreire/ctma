-- Supabase Linter Fixes

-- Unindexed Foreign Keys
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON public.blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON public.enrollments(course_id);

-- Auth RLS Initialization Plan: Modify RLS policies to use (select auth.<function>())
-- The following policies on the 'profiles' table were identified as causing potential recursion
-- and were flagged by the linter. Apply these changes in your Supabase SQL Editor.

-- 1. For the "Admins can view all profiles" policy on 'profiles':
--    This is an ALL policy. The USING clause applies to SELECT.
--    The linter indicated this policy needs adjustment.
--    Assuming the original condition for SELECT was based on an admin role check like auth.role() = 'admin'.
ALTER POLICY "Admins can view all profiles"
  ON public.profiles
  -- For SELECT operations (part of ALL). Adjust the condition as per your actual logic.
  USING ((select auth.role()) = 'admin') 
  -- If you have WITH CHECK conditions for INSERT/UPDATE within this ALL policy,
  -- ensure they also use (select auth.role()) or (select auth.uid()) appropriately.
  -- Example for WITH CHECK if admins can insert/update any profile:
  -- WITH CHECK ((select auth.role()) = 'admin');
  ;

-- 2. For the "Users can update own profile" policy on 'profiles':
ALTER POLICY "Users can update own profile"
  ON public.profiles
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

-- 3. For the "Users can view own profile" policy on 'profiles':
ALTER POLICY "Users can view own profile"
  ON public.profiles
  USING ((select auth.uid()) = id);

-- Apply similar changes for other policies flagged by 'auth_rls_initplan' on other tables:
-- public.courses: "Only admins can modify courses"
--   Example: ALTER POLICY "Only admins can modify courses" ON public.courses USING ((select auth.role()) = 'admin') WITH CHECK ((select auth.role()) = 'admin');
-- public.enrollments: "Users can view own enrollments", "Users can create own enrollments", "Admins can view all enrollments"
--   Example for "Users can view own enrollments": ALTER POLICY "Users can view own enrollments" ON public.enrollments FOR SELECT USING ((select auth.uid()) = user_id);
-- public.donations: "Only admins can view donations"
--   Example: ALTER POLICY "Only admins can view donations" ON public.donations FOR SELECT USING ((select auth.role()) = 'admin');
-- public.blog_posts: "Only admins can modify posts"
--   Example: ALTER POLICY "Only admins can modify posts" ON public.blog_posts USING ((select auth.role()) = 'admin') WITH CHECK ((select auth.role()) = 'admin');


-- Function Search Path Mutable
-- For the function 'public.handle_new_user', ensure it has a stable search_path.
ALTER FUNCTION public.handle_new_user() SET search_path = public, extensions;
-- Or, define it explicitly within the function body if not already done:
/*
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public -- or more specific path if needed
AS $$
BEGIN
  -- insert into public.profiles (id, email) -- ensure schema is explicit
  -- values (new.id, new.email);
  -- return new;
END;
$$;
*/

-- Multiple Permissive Policies
-- Review RLS policies for tables: blog_posts, courses, enrollments, profiles.
-- Consolidate multiple permissive policies for the same role and action into fewer, more comprehensive policies.
-- E.g., if you have two policies for SELECT on 'blog_posts' for 'authenticated' users,
-- combine their conditions with OR if appropriate, or refine the logic.
-- This is a manual review and consolidation process based on your specific requirements.

-- Security Enhancements (Actions to be taken in Supabase Dashboard - not SQL)
-- 1. Enable Leaked Password Protection: Go to Auth -> Settings in your Supabase project dashboard.
-- 2. Consider enabling more MFA options: Go to Auth -> Settings in your Supabase project dashboard.

-- PLEASE REVIEW AND TEST THESE SQL STATEMENTS CAREFULLY IN A DEVELOPMENT ENVIRONMENT BEFORE APPLYING TO PRODUCTION.
-- You may need to adjust policy names or conditions if they differ slightly from the linter output or common patterns.

