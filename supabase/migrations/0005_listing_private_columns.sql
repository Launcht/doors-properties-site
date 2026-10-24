-- Private listing columns (24/10/2026).
-- The site shows a public listing as a price band and an area. Before this, the anon key could
-- still read every column of a published row, so a discreet listing's exact price and street
-- address were one API call away. anon and authenticated now get every column EXCEPT
-- exact_price, address, owner_id and pipeline_stage. The studio is unaffected: it reads and
-- writes through the doors-engine function as service_role.
-- A signed-in buyer still sees the exact price and address of a home they have been introduced
-- to, through doors_introduced_details() below, which returns only those rows.
-- Guard: tests/listing-private-columns.test.js fails if any of the four columns comes back.
-- Any new doors_properties column that should be public needs adding to the grant below.

revoke select on public.doors_properties from anon, authenticated;
grant select (
  id, ref, title, area, price_band, size_sqm, erf_sqm, bedrooms, bathrooms, summary,
  image_url, video_url, character, gallery, specifics, discretion_level, status,
  is_published, is_demo, created_at
) on public.doors_properties to anon, authenticated;

create or replace function public.doors_introduced_details()
returns table (ref text, exact_price text, address text)
language sql
stable
security definer
set search_path = public
as $$
  select p.ref, p.exact_price, p.address
  from public.doors_properties p
  join public.doors_private_introductions i on i.property_ref = p.ref
  where i.user_id = auth.uid();
$$;

revoke all on function public.doors_introduced_details() from public, anon;
grant execute on function public.doors_introduced_details() to authenticated;
