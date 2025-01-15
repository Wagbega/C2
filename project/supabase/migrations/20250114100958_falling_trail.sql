/*
  # Initial Schema Setup for Church PWA

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `date` (timestamptz)
      - `description` (text)
      - `location` (text)
      - `image_url` (text)
      - `created_at` (timestamptz)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `date` (timestamptz)
      - `video_url` (text)
      - `description` (text)
      - `thumbnail_url` (text)
      - `preacher` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date timestamptz NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are viewable by everyone"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date timestamptz NOT NULL,
  video_url text NOT NULL,
  description text NOT NULL,
  thumbnail_url text,
  preacher text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are viewable by everyone"
  ON services
  FOR SELECT
  TO public
  USING (true);

-- Insert mock data for events
INSERT INTO events (title, date, description, location, image_url) VALUES
('Easter Sunday Service', '2024-03-31 09:00:00-00', 'Join us for our special Easter celebration service', 'Main Sanctuary', 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80'),
('Youth Conference 2024', '2024-04-15 14:00:00-00', 'Annual youth conference focusing on spiritual growth', 'Fellowship Hall', 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80'),
('Community Outreach', '2024-04-20 10:00:00-00', 'Serving our local community through various activities', 'Community Center', 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80');

-- Insert mock data for services
INSERT INTO services (title, date, video_url, description, thumbnail_url, preacher) VALUES
('The Power of Faith', '2024-03-10 09:00:00-00', 'https://example.com/video1', 'A powerful message about faith in action', 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80', 'Pastor John Smith'),
('Walking in Love', '2024-03-03 09:00:00-00', 'https://example.com/video2', 'Understanding God''s love in our daily lives', 'https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?auto=format&fit=crop&q=80', 'Pastor Sarah Johnson'),
('Building Strong Foundations', '2024-02-25 09:00:00-00', 'https://example.com/video3', 'Essential principles for spiritual growth', 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80', 'Pastor Michael Brown');