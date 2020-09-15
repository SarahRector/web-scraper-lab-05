DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  rating TEXT,
  price TEXT NOT NULL,
  supply TEXT
);
