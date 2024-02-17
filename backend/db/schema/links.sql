DROP TABLE IF EXISTS games CASCADE;
CREATE TABLE mental_health_resources (
    id SERIAL PRIMARY KEY,
    website_link VARCHAR(255),
    keywords TEXT[]
);