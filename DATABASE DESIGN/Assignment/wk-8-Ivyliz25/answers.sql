CREATE DATABASE TechGadget_Store;
USE TechGadget_Store;
-- Create Tables
CREATE TABLE Customers (
Customer_id INT PRIMARY KEY,
Customer_name VARCHAR (50),
Customer_email VARCHAR (100),
Phone_number VARCHAR(25),
Registration_date DATE,
City  VARCHAR (50),
Country VARCHAR (50)
);

CREATE TABLE Products (
Product_id VARCHAR(10) PRIMARY KEY,
Product_name VARCHAR (50),
Category VARCHAR (50),
Price DECIMAL (10,2),
Stock_quantity	INT, 
Supplier VARCHAR (50),	
Added_date DATE
);

CREATE TABLE Orders (
Order_id INT PRIMARY KEY,
Customer_id INT,
Order_date DATE,
Total_amount DECIMAL (10,2),
Order_status VARCHAR (50),
Shipping_address VARCHAR (255),
FOREIGN KEY (Customer_id) REFERENCES Customers (Customer_id)
);

CREATE TABLE Order_Items (
Order_item_id INT,
Order_id INT,
Product_id	VARCHAR (50),
Quantity INT,
Unit_price DECIMAL (10,2),
PRIMARY KEY (Order_item_id, Order_id),
FOREIGN KEY (Order_id) REFERENCES Orders (Order_id),
FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
);

CREATE TABLE Payments (
Payment_id VARCHAR(50) PRIMARY KEY,	
Order_id INT,
Payment_date DATE,
Payment_method VARCHAR (55),
Amount	DECIMAL (10,2),
Payment_status VARCHAR (50),
FOREIGN KEY (Order_id) REFERENCES Orders(Order_id)
);

-- Insert values 
INSERT INTO Customers (Customer_id, Customer_name, Customer_email, Phone_number, Registration_date, City, Country)
VALUES 
('1001', 'Sarah Johnson', 'sarah.j@email.com', '+1-555-0101', '2024-01-15', 'New York', 'USA'),
('1002', 'Mike Chen', 'mike.chen@email.com', '+1-555-0102', '2024-01-20', 'Los Angeles', 'USA'),
('1003', 'Emma Davis', 'emma.d@email.com', '+44-20-7946-0958', '2024-02-05', 'London', 'UK'),
('1004', 'Raj Patel', 'raj.patel@email.com', '+91-9876543210', '2024-02-12', 'Mumbai', 'India'),
('1005', 'Maria Garcia', 'maria.g@email.com', '+34-915-123-456', '2024-03-01', 'Madrid', 'Spain');

INSERT INTO Products (Product_id, Product_name, Category, Price, Stock_quantity, Supplier, Added_date)
VALUES
('P001', 'Wireless Bluetooth Headphones', 'Electronics', '99.99', '50', 'AudioTech Inc', '2024-01-10'),
('P002', 'Smart Fitness Watch', 'Electronics', '199.99', '30', 'FitGear Co', '2024-01-12'),
('P003', 'Laptop Backpack', 'Accessories', '49.99', '100', 'BagWorld Ltd', '2024-01-15'),
('P004', 'USB-C Charging Cable', 'Electronics', '19.99', '200', 'CablePro', '2024-02-01'),
('P005', 'Phone Case - iPhone 15', 'Accessories', '29.99', '150', 'CaseMasters', '2024-02-10'),
('P006', 'Portable Power Bank', 'Electronics', '79.99', '75', 'PowerSolutions', '2024-02-20');

INSERT INTO Orders (Order_id, Customer_id, Order_date, Total_amount, Order_status, Shipping_address)
VALUES 
('5001', '1001', '2024-03-01', '149.98', 'Delivered', '123 Main St, New York'),
('5002', '1002', '2024-03-02', '299.98', 'Processing', '456 Oak Ave, Los Angeles'),
('5003', '1003', '2024-03-03', '79.99',	'Shipped', '789 Park Lane, London'),
('5004', '1001', '2024-03-05', '129.98', 'Delivered', '123 Main St, New York'),
('5005', '1004', '2024-03-06', '199.99', 'Processing',	'101 Gandhi Rd, Mumbai');

INSERT INTO Order_Items (Order_item_id, Order_id, Product_id, Quantity, Unit_price)
VALUES 
('1', '5001', 'P001', '1', '99.99'),
('2', '5001', 'P004', '2', '19.99'),
('3', '5002', 'P002', '1', '199.99'),
('4', '5002', 'P003', '2', '49.99'),
('5', '5003', 'P006', '1', '79.99'),
('6', '5004', 'P005', '3', '29.99'),
('7', '5004', 'P004', '1', '19.99'),
('8', '5005', 'P002', '1', '199.99');

INSERT INTO Payments (Payment_id, Order_id, Payment_date, Payment_method, Amount, Payment_status)
VALUES 
('PAY7001', '5001', '2024-03-01', 'Credit Card', '149.98', 'Completed'),
('PAY7002', '5002',	'2024-03-02', 'PayPal', '299.98', 'Completed'),
('PAY7003', '5003',	'2024-03-03', 'Credit Card', '79.99', 'Completed'),
('PAY7004', '5004',	'2024-03-05', 'Apple Pay', '129.98', 'Completed'),
('PAY7005', '5005',	'2024-03-06', 'Credit Card', '199.99', 'Pending');