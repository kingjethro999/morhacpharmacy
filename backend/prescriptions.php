<?php
// Include database configuration
require_once 'config/database.php';

// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle different request methods
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Get all prescriptions (admin only - would need authentication)
        $stmt = $conn->query("SELECT * FROM prescriptions");
        $prescriptions = $stmt->fetchAll();
        echo json_encode($prescriptions);
        break;
        
    case 'POST':
        // Submit a new prescription refill request
        $data = json_decode(file_get_contents('php://input'), true);
        
        if(!$data) {
            echo json_encode(["error" => "Invalid data"]);
            exit;
        }
        
        $stmt = $conn->prepare("INSERT INTO prescriptions (name, phone, email, prescription_number, doctor_name, message, status) VALUES (?, ?, ?, ?, ?, ?, 'pending')");
        $result = $stmt->execute([
            $data['name'],
            $data['phone'],
            $data['email'],
            $data['prescription_number'],
            $data['doctor_name'],
            $data['message'] ?? null
        ]);
        
        if($result) {
            echo json_encode(["success" => true, "id" => $conn->lastInsertId()]);
        } else {
            echo json_encode(["error" => "Failed to submit prescription refill request"]);
        }
        break;
        
    default:
        echo json_encode(["error" => "Method not allowed"]);
        break;
}
?>
