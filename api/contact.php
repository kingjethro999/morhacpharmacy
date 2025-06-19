<?php
// Include database configuration
require_once 'db-config.php';

// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle different request methods
$method = $_SERVER['REQUEST_METHOD'];

if($method === 'POST') {
    // Process contact form submission
    $data = json_decode(file_get_contents('php://input'), true);
    
    if(!$data) {
        echo json_encode(["error" => "Invalid data"]);
        exit;
    }
    
    // Validate required fields
    if(empty($data['firstName']) || empty($data['lastName']) || empty($data['email']) || empty($data['message'])) {
        echo json_encode(["error" => "All fields are required"]);
        exit;
    }
    
    // Insert into database
    $stmt = $conn->prepare("INSERT INTO contact_messages (first_name, last_name, email, message, created_at) VALUES (?, ?, ?, ?, NOW())");
    $result = $stmt->execute([
        $data['firstName'],
        $data['lastName'],
        $data['email'],
        $data['message']
    ]);
    
    if($result) {
        // Optional: Send email notification
        $to = "info@morhac.com";
        $subject = "New Contact Form Submission";
        $message = "Name: " . $data['firstName'] . " " . $data['lastName'] . "\n";
        $message .= "Email: " . $data['email'] . "\n\n";
        $message .= "Message:\n" . $data['message'];
        $headers = "From: website@morhac.com";
        
        mail($to, $subject, $message, $headers);
        
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "Failed to submit contact form"]);
    }
} else {
    echo json_encode(["error" => "Method not allowed"]);
}
?>
