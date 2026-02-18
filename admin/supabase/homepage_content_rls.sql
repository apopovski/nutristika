-- Run this in Supabase SQL Editor for production hardening.
-- Purpose: allow only admin users to read/write homepage_content.

alter table public.homepage_content enable row level security;

-- Remove old policies safely before recreating.
drop policy if exists homepage_content_admin_select on public.homepage_content;
drop policy if exists homepage_content_admin_insert on public.homepage_content;
drop policy if exists homepage_content_admin_update on public.homepage_content;
drop policy if exists homepage_content_admin_delete on public.homepage_content;

-- Admin detection via app_metadata role claim.
-- You can set this through Supabase Auth admin APIs.
create policy homepage_content_admin_select
  on public.homepage_content
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy homepage_content_admin_insert
  on public.homepage_content
  for insert
  to authenticated
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy homepage_content_admin_update
  on public.homepage_content
  for update
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy homepage_content_admin_delete
  on public.homepage_content
  for delete
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
