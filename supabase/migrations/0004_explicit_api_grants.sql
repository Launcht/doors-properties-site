-- Explicit Data API grants (20/10/2026).
-- From 30 Oct 2026 Supabase stops auto-granting anon/authenticated/service_role on NEW public
-- tables, which includes every table on a fresh `db reset`, a preview branch or a new project.
-- The live project keeps its existing grants; this file makes a rebuild match it exactly.
-- Access is governed by the RLS policies in 0001, so these mirror the old defaults.
-- Any table added in a later migration needs its own grant lines in that migration.
do $$
declare t text;
begin
  foreach t in array array[
    'profiles','doors_properties','doors_team','doors_settings','doors_viewing_requests',
    'doors_outreach','doors_private_introductions','doors_saved_homes','doors_viewed_homes',
    'doors_enquiries'
  ] loop
    execute format('grant select, insert, update, delete on public.%I to anon, authenticated, service_role', t);
  end loop;
end $$;
