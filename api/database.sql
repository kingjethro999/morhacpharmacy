-- Create database
CREATE DATABASE IF NOT EXISTS morhac_db;
USE morhac_db;

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Prescription refill requests table
CREATE TABLE IF NOT EXISTS prescriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    prescription_number VARCHAR(100) NOT NULL,
    doctor_name VARCHAR(255) NOT NULL,
    message TEXT,
    status ENUM('pending', 'processing', 'completed', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact form submissions table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample products
INSERT INTO products (name, description, price, category, image) VALUES
('Paracetamol', 'Pain reliever and fever reducer', 5.99, 'medication', 'paracetamol.jpg'),
('Vitamin C', 'Immune system support supplement', 12.50, 'supplements', 'vitamin-c.jpg'),
('Blood Pressure Monitor', 'Digital blood pressure monitoring device', 45.99, 'equipment', 'bp-monitor.jpg'),
('Fresh Apples', 'Organic fresh apples (1kg)', 3.99, 'grocery', 'apples.jpg'),
('Whole Wheat Bread', 'Freshly baked whole wheat bread', 2.50, 'grocery', 'bread.jpg');
