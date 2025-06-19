<?php
// Include database configuration
require_once 'db-config.php';

// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle different request methods
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Get all products or a specific product
        if(isset($_GET['id'])) {
            // Get specific product
            $id = $_GET['id'];
            $stmt = $conn->prepare("SELECT * FROM products WHERE id = ?");
            $stmt->execute([$id]);
            $product = $stmt->fetch();
            
            if($product) {
                echo json_encode($product);
            } else {
                echo json_encode(["error" => "Product not found"]);
            }
        } else {
            // Get all products
            $category = isset($_GET['category']) ? $_GET['category'] : null;
            
            if($category) {
                $stmt = $conn->prepare("SELECT * FROM products WHERE category = ?");
                $stmt->execute([$category]);
            } else {
                $stmt = $conn->query("SELECT * FROM products");
            }
            
            $products = $stmt->fetchAll();
            echo json_encode($products);
        }
        break;
        
    case 'POST':
        // Add a new product
        $data = json_decode(file_get_contents('php://input'), true);
        
        if(!$data) {
            echo json_encode(["error" => "Invalid data"]);
            exit;
        }
        
        $stmt = $conn->prepare("INSERT INTO products (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)");
        $result = $stmt->execute([
            $data['name'],
            $data['description'],
            $data['price'],
            $data['category'],
            $data['image'] ?? null
        ]);
        
        if($result) {
            echo json_encode(["success" => true, "id" => $conn->lastInsertId()]);
        } else {
            echo json_encode(["error" => "Failed to add product"]);
        }
        break;
        
    default:
        echo json_encode(["error" => "Method not allowed"]);
        break;
}
?>
