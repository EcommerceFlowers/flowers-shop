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
    id SERIAL PRIMARY KEY,
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

CREATE OR REPLACE FUNCTION create_order_with_items(
    _customer_id INT,
    _order_date DATE,
    _total_price DECIMAL(10, 2),
    _status VARCHAR(20),
    _items JSONB[]
)
RETURNS TABLE (
    order_id INT,
    customer_id INT,
    order_date DATE,
    total_price DECIMAL(10, 2),
    status VARCHAR(20)
) AS $$
DECLARE
    _order_id INT;
BEGIN
    -- Create the order
    INSERT INTO Orders (customer_id, order_date, total_price, status)
    VALUES (_customer_id, _order_date, _total_price, _status)
    RETURNING id INTO _order_id;

    -- Create the order items
    FOR i IN 1..array_length(_items, 1) LOOP
      IF _items[i]->>'flower_id' IS NOT NULL AND _items[i]->>'quantity' IS NOT NULL THEN
          INSERT INTO OrderItems (order_id, flower_id, quantity)
          VALUES (_order_id, (_items[i]->>'flower_id')::INT, (_items[i]->>'quantity')::INT);
      END IF;
    END LOOP;

    -- Return the order
    RETURN QUERY SELECT * FROM orders  WHERE orders.id = _order_id;
END;
$$ LANGUAGE plpgsql;


SELECT * FROM create_order_with_items(
    _customer_id := 1, 
    _order_date := '2022-01-01', 
    _total_price := 100.00, 
    _status := 'Pending', 
    _items := ARRAY['{"flower_id": "1", "quantity": "2"}'::jsonb, '{"flower_id": "2", "quantity": "3"}'::jsonb]
);