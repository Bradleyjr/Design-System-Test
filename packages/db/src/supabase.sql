-- Example SQL policies for Supabase auth/storage configuration
create table if not exists storage.buckets (
  id text primary key,
  name text,
  created_at timestamp with time zone default now()
);

-- Storage policies are provided as documentation only
-- apply via Supabase CLI or dashboard.
