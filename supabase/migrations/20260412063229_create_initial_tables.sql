-- Events
create table events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  date_time timestamptz not null,
  location text
);

-- Board Application Open Status
create table board_application_status (
  id uuid primary key default gen_random_uuid(),
  is_open boolean not null default false
);

-- single row creation for board application status
insert into board_application_status (is_open) values (false);

-- Sponsors
create table sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  link text,
  tier text
);

-- Board Members
create table board_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  position text,
  blurb text,
  is_past boolean not null default false,
  linkedin_url text,
  photo_url text
);