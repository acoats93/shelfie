CREATE TABLE products (
product_id SERIAL PRIMARY KEY NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES account(user_id),
product_name VARCHAR(150) NOT NULL,
price DECIMAL NOT NULL,
image_url VARCHAR(300) NOT NULL
)

CREATE TABLE account (
user_id SERIAL PRIMARY KEY NOT NULL,
user_name VARCHAR(150) NOT NULL
)