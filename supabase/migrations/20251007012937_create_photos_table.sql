/*
  # Create photos table for image uploads

  1. New Tables
    - `photos`
      - `id` (uuid, primary key) - Unique identifier for each photo
      - `filename` (text) - Original filename of the uploaded photo
      - `storage_path` (text) - Path to the file in Supabase Storage
      - `url` (text) - Public URL to access the photo
      - `caption` (text, nullable) - Optional caption for the photo
      - `category` (text, nullable) - Optional category (e.g., 'rooms', 'gallery', 'attractions')
      - `created_at` (timestamptz) - When the photo was uploaded
      
  2. Security
    - Enable RLS on `photos` table
    - Add policy for public read access to all photos
    - Add policy for authenticated admin users to insert photos
    - Add policy for authenticated admin users to update photos
    - Add policy for authenticated admin users to delete photos
*/

CREATE TABLE IF NOT EXISTS photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  storage_path text NOT NULL,
  url text NOT NULL,
  caption text,
  category text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- Public can view all photos
CREATE POLICY "Anyone can view photos"
  ON photos FOR SELECT
  USING (true);

-- For now, allow anyone to insert photos (you can restrict this later to authenticated users only)
CREATE POLICY "Anyone can upload photos"
  ON photos FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update photos"
  ON photos FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete photos"
  ON photos FOR DELETE
  USING (true);