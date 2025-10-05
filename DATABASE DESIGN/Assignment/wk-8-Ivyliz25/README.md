📋 Project Overview
This database manages an e-commerce store specializing in technology gadgets and accessories. It handles customers, products, orders, payments, and inventory management.

🗃️ Database Schema
Tables Structure
1. Customers Table
Stores customer information and registration details.

sql
CREATE TABLE Customers (
    Customer_id INT PRIMARY KEY,
    Customer_name VARCHAR(50),
    Customer_email VARCHAR(100),
    Phone_number VARCHAR(25),
    Registration_date DATE,
    City VARCHAR(50),
    Country VARCHAR(50)
);
2. Products Table
Manages product catalog and inventory.

sql
CREATE TABLE Products (
    Product_id VARCHAR(10) PRIMARY KEY,
    Product_name VARCHAR(50),
    Category VARCHAR(50),
    Price DECIMAL(10,2),
    Stock_quantity INT, 
    Supplier VARCHAR(50),	
    Added_date DATE
);
3. Orders Table
Tracks customer orders and shipping information.

sql
CREATE TABLE Orders (
    Order_id INT PRIMARY KEY,
    Customer_id INT,
    Order_date DATE,
    Total_amount DECIMAL(10,2),
    Order_status VARCHAR(50),
    Shipping_address VARCHAR(255),
    FOREIGN KEY (Customer_id) REFERENCES Customers(Customer_id)
);
4. Order_Items Table
Contains individual items within each order (bridge table).

sql
CREATE TABLE Order_Items (
    Order_item_id INT,
    Order_id INT,
    Product_id VARCHAR(50),
    Quantity INT,
    Unit_price DECIMAL(10,2),
    PRIMARY KEY (Order_item_id, Order_id),
    FOREIGN KEY (Order_id) REFERENCES Orders(Order_id),
    FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
);
5. Payments Table
Manages payment transactions for orders.

sql
CREATE TABLE Payments (
    Payment_id VARCHAR(50) PRIMARY KEY,	
    Order_id INT,
    Payment_date DATE,
    Payment_method VARCHAR(55),
    Amount DECIMAL(10,2),
    Payment_status VARCHAR(50),
    FOREIGN KEY (Order_id) REFERENCES Orders(Order_id)
);
🔗 Relationships
text
Customers (1) ←→ (Many) Orders
Orders (1) ←→ (Many) Order_Items
Products (1) ←→ (Many) Order_Items
Orders (1) ←→ (1) Payments
📊 Sample Data
Customers (5 records)
Sarah Johnson (USA)

Mike Chen (USA)

Emma Davis (UK)

Raj Patel (India)

Maria Garcia (Spain)

Products (6 records)
Electronics: Wireless Headphones, Smart Watch, Charging Cable, Power Bank

Accessories: Laptop Backpack, Phone Case

Orders (5 records)
Various orders with statuses: Delivered, Processing, Shipped

💾 Key Features
Customer Management: Track customer details and registration

Product Catalog: Manage products, categories, and suppliers

Order Processing: Handle order creation, status tracking, and shipping

Inventory Management: Track stock quantities

Payment Processing: Manage payment methods and statuses

Sales Reporting: Analyze order totals and customer spending

🛠️ Useful Queries
1. Customer Order History
sql
SELECT c.Customer_name, o.Order_id, o.Order_date, o.Total_amount
FROM Customers c
JOIN Orders o ON c.Customer_id = o.Customer_id
ORDER BY c.Customer_name, o.Order_date;
2. Product Sales Report
sql
SELECT p.Product_name, SUM(oi.Quantity) as Total_Sold
FROM Order_Items oi
JOIN Products p ON oi.Product_id = p.Product_id
GROUP BY p.Product_name
ORDER BY Total_Sold DESC;
3. Revenue by Category
sql
SELECT p.Category, SUM(oi.Quantity * oi.Unit_price) as Revenue
FROM Order_Items oi
JOIN Products p ON oi.Product_id = p.Product_id
GROUP BY p.Category;
4. Pending Payments
sql
SELECT o.Order_id, c.Customer_name, p.Amount, p.Payment_status
FROM Payments p
JOIN Orders o ON p.Order_id = o.Order_id
JOIN Customers c ON o.Customer_id = c.Customer_id
WHERE p.Payment_status = 'Pending';
⚠️ Important Notes
Product IDs: Use 'P001', 'P002' format (VARCHAR)

Order IDs: Numeric values (5001, 5002, etc.)

Payment IDs: Use 'PAY7001' format

Phone Numbers: Stored as VARCHAR to support international formats

Prices: Decimal with 2 decimal places precision

🚀 Setup Instructions
Create database: CREATE DATABASE TechGadget_Store;

Use database: USE TechGadget_Store;

Run table creation scripts in order

Insert sample data using provided INSERT statements

Verify setup with sample queries

📈 Future Enhancements
Add user authentication system

Implement discount and promotion tables

Add product reviews and ratings

Create shipping and logistics tracking

Add wishlist functionality

Implement inventory alert system

This database provides a solid foundation for a fully functional e-commerce platform for technology products.

