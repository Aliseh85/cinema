<?php
    // Connect to the database
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "database";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) 
    {
        die("Connection failed: " . $conn->connect_error);
    } 
    echo "Connected successfully";

    if (isset($_POST['submit'])) 
    {
        // Get the form data
        $phone = $_POST['phone'];
        $id = $_POST['id'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $subscription_range = $_POST['subscription_range'];

        // Validate and sanitize the inputs
        if (!preg_match("/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/", $phone)) {
            echo "Invalid phone number format";
            exit;
        }
        if (!preg_match("/^[0-9]{9}$/", $id)) {
            echo "Invalid ID format";
            exit;
        }
        if (!preg_match("/^[a-zA-Z0-9]{3,}$/", $username))
        {
            echo "Invalid username format";
            exit;
        }
        if (strlen($password) < 6)
        {
            echo "Password must be at least 6 characters long";
            exit;
        }
        $phone = filter_var($phone, FILTER_SANITIZE_STRING);
        $id = filter_var($id, FILTER_SANITIZE_STRING);
        $username = filter_var($username, FILTER_SANITIZE_STRING);
        $password = filter_var($password, FILTER_SANITIZE_STRING);
        $subscription_range = filter_var($subscription_range, FILTER_SANITIZE_STRING);

        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (phone, id, username, password, subscription_range)
                VALUES ('$phone', '$id', '$username', '$hashed_password', '$subscription_range')";

        if ($conn->query($sql) === TRUE) {
            echo ".\nNew record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();
?>
