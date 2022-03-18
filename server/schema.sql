DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  message TEXT(255) NOT NULL,
  roomname VARCHAR(30) NOT NULL,
  user_id INT,
  -- meetroom_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE meeting_rooms (
--   id INT NOT NULL AUTO_INCREMENT,
--   room_name VARCHAR(35) NOT NULL,
--   PRIMARY KEY (id)
-- );

ALTER TABLE messages
ADD FOREIGN KEY (user_id) REFERENCES users(id);
-- ADD FOREIGN KEY (meetroom_id) REFERENCES meeting_rooms(id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

INSERT INTO users (username) VALUES ('Dora');
INSERT INTO users (username) VALUES ('David');

INSERT INTO messages (message, roomname, user_id) VALUES ('this is a message', 'lobby1', 1);
INSERT INTO messages (message, roomname, user_id) VALUES ('this is a message2', 'lobby2', 2);
INSERT INTO messages (message, roomname, user_id) VALUES ('this is a messag3', 'lobby1', 2);
INSERT INTO messages (message, roomname, user_id) VALUES ('this is a messag4', 'lobby2', 1);