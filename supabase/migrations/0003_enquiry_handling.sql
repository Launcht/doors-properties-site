-- DOORS: let the team see and handle website enquiries.
--
-- Found 30/09/2026 while working brief v4: the site saves every seller and
-- buyer enquiry to doors_enquiries, but nothing on the team side read that
-- table, so a real enquiry would have sat where nobody at DOORS looks. This
-- gives each enquiry a status, an owner from doors_team and a team note, which
-- the Studio's Enquiries tab reads and writes through the doors-engine edge
-- function (service role). The public still has INSERT only, never read.
--
-- Also applies 0002 (consent columns), which the site has been sending since
-- 11/08 and falling back from because the columns were never created.
--
-- property_category is deliberately free text with no check constraint: the six
-- categories in brief v4 are "proposed inputs" the client has not approved yet.
--
-- Target: Chris's own Supabase project (DOORS, ref stgpdnxengnhsliqwavh).
-- Idempotent: safe to re-run.

-- 0002, idempotent
alter table public.doors_enquiries
  add column if not exists contact_consent    boolean not null default false,
  add column if not exists consented_at       timestamptz,
  add column if not exists viewing_requested  boolean not null default false;

alter table public.doors_enquiries
  add column if not exists status            text not null default 'new',
  add column if not exists owner_id          uuid references public.doors_team(id) on delete set null,
  add column if not exists team_note         text,
  add column if not exists handled_at        timestamptz,
  add column if not exists property_category text;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'doors_enquiries_status_check') then
    alter table public.doors_enquiries
      add constraint doors_enquiries_status_check
      check (status in ('new', 'contacted', 'in_progress', 'closed', 'staff'));
  end if;
end $$;

comment on column public.doors_enquiries.status is
  'new -> contacted -> in_progress -> closed. staff = a team member''s own test or login, excluded from lead reporting.';
comment on column public.doors_enquiries.owner_id is
  'The team member handling this enquiry. Null until someone takes it.';
comment on column public.doors_enquiries.team_note is
  'Internal note from the team. Never shown to the person who enquired.';
comment on column public.doors_enquiries.handled_at is
  'When the status last moved off new.';
comment on column public.doors_enquiries.property_category is
  'Sector of the property, once the client approves the category list. Free text until then.';

-- A website visitor can only ever create a fresh, unowned enquiry: whatever the
-- browser sends for the handling columns is overwritten unless the writer is the
-- service role (the doors-engine function).
create or replace function public.doors_enquiries_public_insert_guard()
returns trigger
language plpgsql
as $$
begin
  if coalesce(auth.role(), '') <> 'service_role' then
    new.status := 'new';
    new.owner_id := null;
    new.team_note := null;
    new.handled_at := null;
  end if;
  return new;
end $$;

drop trigger if exists doors_enquiries_public_insert_guard on public.doors_enquiries;
create trigger doors_enquiries_public_insert_guard
  before insert on public.doors_enquiries
  for each row execute function public.doors_enquiries_public_insert_guard();

create index if not exists doors_enquiries_status_created_idx
  on public.doors_enquiries (status, created_at desc);

-- The two team logins saved as buyer enquiries on 17/08 and 19/08 (labelled in
-- their message on 30/09) move to the staff status so they stay out of the
-- team's working list and any lead count.
update public.doors_enquiries
   set status = 'staff'
 where source = 'signin-register'
   and message like '[Staff login registration, not an enquiry.%'
   and status = 'new';
