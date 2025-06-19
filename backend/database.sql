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
('Paracetamol', 'Pain reliever and fever reducer', 800.00, 'medication', '/images/paracetamol.jpg'),
('Ibuprofen', 'Anti-inflammatory pain reliever', 1200.00, 'medication', '/images/ibuprofen.jpg'),
('Vitamin C', 'Immune system support supplement', 400.00, 'supplements', '/images/vitamin-c.jpg'),
('Wellkid Multivitamin', 'Complete daily vitamin supplement for children with 21 nutrients', 3500.00, 'supplements', '/images/wellkid-multivitamin.jpg'),
('Aneroid Sphygmomanometer', 'Manual blood pressure monitoring device with analog gauge', 15000.00, 'equipment', '/images/aneroid-sphygmomanometer.jpg'),
('Digital Thermometer', 'Non-contact infrared thermometer for safe temperature measurement', 10000.00, 'equipment', '/images/infrared-thermometer.jpg'),
('Glucose D', 'Instant glucose energy supplement for quick energy boost', 2500.00, 'supplements', '/images/glucose.jpg'),
('Non-Alcoholic Wine', 'Premium sparkling grape juice beverage', 20000.00, 'grocery', '/images/wine.jpg'),
('Body Spray Set', 'Collection of premium deodorant body sprays in assorted fragrances', 1500.00, 'grocery', '/images/body-spray.jpg'),
('Mentos', 'Chewy lemon flavored candy roll', 250.00, 'grocery', '/images/mentos.png'),
('Colgate Toothpaste', 'Cavity protection toothpaste for daily oral care', 1800.00, 'grocery', '/images/toothpaste.png'),
('Milo', 'Chocolate malt drink mix for energy and nutrition', 1200.00, 'grocery', '/images/milo.jpg');
