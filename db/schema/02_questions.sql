DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  text TEXT,
  comments TEXT,
  timer TIMESTAMP,
  category INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);