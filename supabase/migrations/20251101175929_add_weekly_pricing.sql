/*
  # Add Weekly Pricing

  1. Changes
    - Add seasonal pricing for weekly stays (7+ nights)
    - Glicine: €500/week
    - Ortensia: €450/week
    - Tulipano: €400/week
    - Papavero: €350/week
*/

INSERT INTO seasonal_pricing (room_id, start_date, end_date, price_per_night, min_nights)
SELECT 
  r.id,
  '2025-01-01'::date,
  '2025-12-31'::date,
  CASE 
    WHEN r.name = 'Camera Glicine' THEN 71.43
    WHEN r.name = 'Camera Ortensia' THEN 64.29
    WHEN r.name = 'Camera Tulipano' THEN 57.14
    WHEN r.name = 'Camera Papavero' THEN 50.00
  END,
  7
FROM rooms r
WHERE r.name IN ('Camera Glicine', 'Camera Ortensia', 'Camera Tulipano', 'Camera Papavero')
ON CONFLICT DO NOTHING;
