/*
  # Add Camera Papavero

  1. New Data
    - Add Camera Papavero room with pricing and details
    
  2. Changes
    - Insert new room into rooms table
*/

INSERT INTO rooms (name, name_en, description, description_en, capacity, base_price, features, image_url, is_active)
VALUES (
  'Camera Papavero',
  'Poppy Room',
  'Accogliente camera doppia con due posti letto, perfetta per coppie o amici.',
  'Cozy double room with two beds, perfect for couples or friends.',
  2,
  70.00,
  '["Wi-Fi", "Bagno privato", "Aria condizionata"]'::jsonb,
  NULL,
  true
)
ON CONFLICT DO NOTHING;
