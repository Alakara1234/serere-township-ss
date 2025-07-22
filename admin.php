<?php
$conn = new mysqli("localhost", "root", "", "serere_contact_db");
$result = $conn->query("SELECT * FROM messages ORDER BY sent_at DESC");

echo "<h2>Messages from Serere Township SS Website</h2><table border='1' cellpadding='10'>";
echo "<tr><th>Name</th><th>Email</th><th>Subject</th><th>Message</th><th>Sent At</th></tr>";
while($row = $result->fetch_assoc()) {
  echo "<tr>
          <td>{$row['name']}</td>
          <td>{$row['email']}</td>
          <td>{$row['subject']}</td>
          <td>{$row['message']}</td>
          <td>{$row['sent_at']}</td>
        </tr>";
}
echo "</table>";
?>

<a href="logout.php" style="float:right;">Logout</a>
