CREATE DATABASE healthcare;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE health_data (
    id SERIAL PRIMARY KEY,
    user_id INT,
    heart_rate INT,
    bp INT,
    symptoms TEXT,
    risk_level VARCHAR(10)
);