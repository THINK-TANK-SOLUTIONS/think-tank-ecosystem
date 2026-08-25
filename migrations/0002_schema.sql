create table if not exists business_plans (
  id serial primary key,
  user_id text not null,
  skill text not null,
  zip text not null,
  budget text not null,
  title text not null,
  city text,
  state text,
  niche text,
  plan_json text not null,
  created_at timestamptz not null default now()
);
create index if not exists business_plans_user_id_idx on business_plans (user_id);

create table if not exists drip_status (
  user_id text primary key,
  plan_id integer not null,
  current_day integer not null default 1,
  started_at timestamptz not null default now(),
  completed boolean not null default false
);

create table if not exists drip_completions (
  user_id text not null,
  day integer not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, day)
);

create table if not exists venture_signups (
  id serial primary key,
  user_id text not null,
  venture_slug text not null,
  created_at timestamptz not null default now(),
  unique (user_id, venture_slug)
);
create index if not exists venture_signups_user_id_idx on venture_signups (user_id);
