CREATE TABLE Flowers (
    flower_id SERIAL PRIMARY KEY,
    flower_name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    images VARCHAR(255),
    stock_quantity INT
);

CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_price DECIMAL(10, 2),
    status VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE OrderItems (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    flower_id INT,
    quantity INT,
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (flower_id) REFERENCES Flowers(flower_id)
);

CREATE TABLE ShoppingCart (
    cart_id SERIAL PRIMARY KEY,
    customer_id INT,
    flower_id INT,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (flower_id) REFERENCES Flowers(flower_id)
);
