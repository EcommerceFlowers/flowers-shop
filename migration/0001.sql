CREATE TABLE Flowers (
    flower_id SERIAL PRIMARY KEY,
    flower_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    images VARCHAR(255) NOT NULL,
    stock_quantity INT
);

CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE OrderItems (
    order_item_id SERIAL PRIMARY KEY ,
    order_id INT NOT NULL,
    flower_id INT NOT NULL,
    quantity INT NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (flower_id) REFERENCES Flowers(flower_id)
);

CREATE TABLE ShoppingCart (
    cart_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    flower_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (flower_id) REFERENCES Flowers(flower_id)
);



DROP TABLE IF EXISTS Flowers cascade;
DROP TABLE IF EXISTS Customers cascade;
DROP TABLE IF EXISTS Orders cascade;
DROP TABLE IF EXISTS OrderItems;
DROP TABLE IF EXISTS ShoppingCart;
