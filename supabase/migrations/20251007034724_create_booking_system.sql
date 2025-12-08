/*
  # Booking System Schema

  ## Overview
  Complete booking system for B&B with rooms, bookings, availability, and pricing management.

  ## New Tables

  ### `rooms`
  - `id` (uuid, primary key)
  - `name` (text) - Room name (e.g., "Stanza Glicine")
  - `name_en` (text) - English room name
  - `description` (text) - Italian description
  - `description_en` (text) - English description
  - `capacity` (integer) - Max guests
  - `base_price` (numeric) - Base price per night in EUR
  - `features` (jsonb) - Room amenities (wifi, bathroom, etc.)
  - `image_url` (text) - Main room image
  - `is_active` (boolean) - Whether room is bookable
  - `created_at` (timestamptz)

  ### `seasonal_pricing`
  - `id` (uuid, primary key)
  - `room_id` (uuid, foreign key)
  - `start_date` (date)
  - `end_date` (date)
  - `price_per_night` (numeric)
  - `min_nights` (integer)
  - `created_at` (timestamptz)

  ### `bookings`
  - `id` (uuid, primary key)
  - `room_id` (uuid, foreign key)
  - `guest_name` (text)
  - `guest_email` (text)
  - `guest_phone` (text)
  - `check_in` (date)
  - `check_out` (date)
  - `num_guests` (integer)
  - `total_price` (numeric)
  - `status` (text) - pending, confirmed, cancelled
  - `notes` (text)
  - `created_at` (timestamptz)

  ### `blocked_dates`
  - `id` (uuid, primary key)
  - `room_id` (uuid, foreign key)
  - `blocked_date` (date)
  - `reason` (text)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public can read rooms and availability
  - Public can create bookings (for guest submissions)
  - Only authenticated users can manage rooms, pricing, and view all bookings
*/

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  name_en text NOT NULL,
  description text NOT NULL,
  description_en text NOT NULL,
  capacity integer NOT NULL DEFAULT 2,
  base_price numeric(10,2) NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  image_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create seasonal pricing table
CREATE TABLE IF NOT EXISTS seasonal_pricing (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  start_date date NOT NULL,
  end_date date NOT NULL,
  price_per_night numeric(10,2) NOT NULL,
  min_nights integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_date_range CHECK (end_date >= start_date)
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  guest_name text NOT NULL,
  guest_email text NOT NULL,
  guest_phone text,
  check_in date NOT NULL,
  check_out date NOT NULL,
  num_guests integer NOT NULL,
  total_price numeric(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  notes text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_booking_dates CHECK (check_out > check_in),
  CONSTRAINT valid_num_guests CHECK (num_guests > 0)
);

-- Create blocked dates table
CREATE TABLE IF NOT EXISTS blocked_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  blocked_date date NOT NULL,
  reason text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(room_id, blocked_date)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_bookings_room_dates ON bookings(room_id, check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_seasonal_pricing_room_dates ON seasonal_pricing(room_id, start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_blocked_dates_room_date ON blocked_dates(room_id, blocked_date);

-- Enable RLS
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE seasonal_pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for rooms
CREATE POLICY "Anyone can view active rooms"
  ON rooms FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage rooms"
  ON rooms FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for seasonal_pricing
CREATE POLICY "Anyone can view pricing"
  ON seasonal_pricing FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage pricing"
  ON seasonal_pricing FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for bookings
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage bookings"
  ON bookings FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for blocked_dates
CREATE POLICY "Anyone can view blocked dates"
  ON blocked_dates FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage blocked dates"
  ON blocked_dates FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial rooms data
INSERT INTO rooms (name, name_en, description, description_en, capacity, base_price, features, image_url) VALUES
  (
    'Camera Glicine',
    'Wisteria Room',
    'Una camera elegante con vista sul giardino, arredata con mobili d''epoca e dotata di tutti i comfort moderni.',
    'An elegant room with garden view, furnished with antique furniture and equipped with all modern comforts.',
    2,
    120.00,
    '["Wi-Fi", "Bagno privato", "Aria condizionata", "TV", "Frigorifero"]'::jsonb,
    '/STANZA FRONTE- GLICINE.jpg'
  ),
  (
    'Camera Ortensia',
    'Hydrangea Room',
    'Una camera luminosa con balcone privato, perfetta per una fuga romantica immersa nella natura.',
    'A bright room with private balcony, perfect for a romantic getaway surrounded by nature.',
    2,
    115.00,
    '["Wi-Fi", "Bagno privato", "Balcone", "Aria condizionata", "TV"]'::jsonb,
    '/ortensia-1.jpg'
  ),
  (
    'Camera Tulipano',
    'Tulip Room',
    'Una camera accogliente con angolo lettura, ideale per chi cerca tranquillità e relax.',
    'A cozy room with reading corner, ideal for those seeking peace and relaxation.',
    2,
    110.00,
    '["Wi-Fi", "Bagno privato", "Aria condizionata", "Angolo lettura"]'::jsonb,
    '/tulipano-room.jpg'
  );
