CREATE TABLE plans (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT (now() at time zone 'JST'),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT (now() at time zone 'JST')
);
