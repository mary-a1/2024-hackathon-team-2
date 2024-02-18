DROP TABLE IF EXISTS mental_health_resources CASCADE;
CREATE TABLE mental_health_resources (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    summary TEXT,
    link VARCHAR(255),
    keywords TEXT[],
    source VARCHAR(100)
);
