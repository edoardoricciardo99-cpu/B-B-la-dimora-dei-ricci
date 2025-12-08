/*
  # Create Admin Authentication System

  ## Summary
  Sets up admin user management for the B&B administration panel using Supabase Auth.

  ## Changes Made

  ### 1. New Tables
  - `admin_users`
    - `id` (uuid, primary key) - References auth.users
    - `email` (text, unique) - Admin email address
    - `full_name` (text) - Admin full name
    - `role` (text) - Admin role (super_admin, manager)
    - `is_active` (boolean) - Whether admin account is active
    - `created_at` (timestamptz) - Account creation timestamp
    - `last_login` (timestamptz) - Last login timestamp

  ### 2. Security
  - Enable RLS on `admin_users` table
  - Add policy for authenticated admins to read their own data
  - Add policy for authenticated admins to update their last_login

  ### 3. Important Notes
  - Admin users must be created in auth.users first
  - Then reference added to admin_users table
  - Role-based access control through role field
  - Default role is 'manager'
*/

CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  role text NOT NULL DEFAULT 'manager' CHECK (role IN ('super_admin', 'manager')),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read own data"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can update own last_login"
  ON admin_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
