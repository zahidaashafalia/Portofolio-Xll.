/*
# Create messages table for portfolio contact form

1. New Tables
- `messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) - sender's name
  - `email` (text, not null) - sender's email
  - `message` (text, not null) - message content
  - `read` (boolean, default false) - whether Zahida has read the message
  - `created_at` (timestamptz, default now()) - when the message was sent
2. Security
- Enable RLS on `messages`.
- Allow anyone (anon + authenticated) to INSERT messages (public contact form).
- No SELECT/UPDATE/DELETE for anon or authenticated (only the dashboard/service role can read them).
3. Notes
- This is a single-tenant portfolio with no sign-in screen. The contact form is public,
  so anyone can submit a message. Reading/deleting messages is reserved for the
  service role (Zahida's private dashboard), not exposed via the anon key.
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert a new message via the public contact form
DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages" ON messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
