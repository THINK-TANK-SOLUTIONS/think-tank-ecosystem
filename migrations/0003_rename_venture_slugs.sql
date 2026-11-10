-- Venture renames (MVB brief alignment): carry existing waitlist signups to the new slugs.
update venture_signups vs set venture_slug = m.new_slug
from (values
  ('terrascape-oasis', 'terraform-oasis'),
  ('terraedutainment', 'terraform-edutainment'),
  ('yourspace', 'privacy-pod')
) as m(old_slug, new_slug)
where vs.venture_slug = m.old_slug
  and not exists (
    select 1 from venture_signups x where x.user_id = vs.user_id and x.venture_slug = m.new_slug
  );
delete from venture_signups
where venture_slug in ('terrascape-oasis', 'terraedutainment', 'yourspace');
