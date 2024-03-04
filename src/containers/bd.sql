CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL, 
  wallet DECIMAL(10, 2) NOT NULL DEFAULT 0.00 
);


INSERT INTO users (username, password, wallet) VALUES ('usuario1', 'contraseña1', 100.00);
INSERT INTO users (username, password, wallet) VALUES ('usuario2', 'contraseña2', 200.00);
INSERT INTO users (username, password, wallet) VALUES ('usuario3', 'contraseña3', 300.00);



/*
CREATE TABLE blackjack (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  bet DECIMAL(10, 2) NOT NULL,
  result VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE roulette (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  bet DECIMAL(10, 2) NOT NULL,
  result VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE scoreboard (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  game VARCHAR(255) NOT NULL,
  score INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);*/
