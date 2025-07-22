<?php
session_start();

// Simple hardcoded login credentials (you can update this)
$admin_user = "Elayu Micheal";
$admin_pass = "1058";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['username'] === $admin_user && $_POST['password'] === $admin_pass) {
        $_SESSION['admin_logged_in'] = true;
        header("Location: admin_messages.php");
        exit();
    } else {
        $error = "Invalid username or password.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Admin Login – Serere Township SS</title>
  <style>
    body {
      font-family: Arial;
      background-color: #f1f2f6;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .login-box {
      background-color: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }

    .login-box h2 {
      margin-bottom: 20px;
      color: #0984e3;
    }

    .login-box input {
      width: 100%;
      padding: 10px;
      margin: 10px 0 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .login-box button {
      background-color: #0984e3;
      color: white;
      padding: 12px;
      border: none;
      border-radius: 5px;
      width: 100%;
      cursor: pointer;
    }

    .login-box button:hover {
      background-color: #74b9ff;
    }

    .error {
      color: red;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="login-box">
    <h2>Admin Login</h2>
    <?php if (!empty($error)) echo "<div class='error'>$error</div>"; ?>
    <form method="post">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</html>
