DROP TABLE IF EXISTS items;

CREATE TABLE items(
  id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(32) NOT NULL,
  name VARCHAR(64) NOT NULL,
  price NUMERIC(7) NOT NULL,
  sku VARCHAR(32) NOT NULL,
  quantity SMALLINT NOT NULL,
  date_created date NOT NULL DEFAULT CURRENT_TIMESTAMP,
  date_updated date NOT NULL DEFAULT CURRENT_TIMESTAMP
);