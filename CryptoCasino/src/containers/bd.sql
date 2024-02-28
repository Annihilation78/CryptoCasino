
-- Create the users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL, -- consider using a hashed password for security
  wallet DECIMAL(10, 2) NOT NULL DEFAULT 0.00 -- wallet for the user
);

-- Insert a sample user
INSERT INTO users (username, password, wallet) VALUES ('user1', 'password1', 100.00);
