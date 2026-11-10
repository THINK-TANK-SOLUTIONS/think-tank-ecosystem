alter table drip_status add column if not exists day1_email_id text;
alter table drip_status add column if not exists day1_sent_at timestamptz;
