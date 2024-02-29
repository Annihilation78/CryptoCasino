

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL, 
  wallet DECIMAL(10, 2) NOT NULL DEFAULT 0.00 
);


INSERT INTO users (username, password, wallet) VALUES ('user1', 'password1', 100.00);
