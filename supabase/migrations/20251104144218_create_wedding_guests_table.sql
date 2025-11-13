/*
  # Create Wedding Guests Table

  1. New Tables
    - `wedding_guests`
      - `id` (uuid, primary key)
      - `name` (text) - Tên khách mời
      - `guests` (integer) - Số lượng người tham dự
      - `attending` (boolean) - Có tham dự hay không
      - `message` (text) - Lời chúc
      - `created_at` (timestamptz) - Thời gian xác nhận

  2. Security
    - Enable RLS on `wedding_guests` table
    - Add policy for anyone to insert (public submissions)
    - Add policy for authenticated users to read all records

  3. Notes
    - Table stores guest RSVP information for wedding invitation
    - Public insert access allows guests to submit without authentication
    - Only authenticated users (couple) can view all submissions
*/

CREATE TABLE IF NOT EXISTS wedding_guests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  attending boolean NOT NULL DEFAULT true,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wedding_guests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RSVP"
  ON wedding_guests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all guests"
  ON wedding_guests
  FOR SELECT
  TO authenticated
  USING (true);
