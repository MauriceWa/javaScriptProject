<?php
if($_SERVER['REQUEST_METHOD'] == "POST") {
    $mysqli = new mysqli("localhost", "my_user", "my_password", "world");

    $name = $_POST['name'];
    $countryCode = $_POST['countryCode'];
    $district = $_POST['district'];

    /* Verkeerd, SQL injection */
    // $stmt = $mysqli->prepare("INSERT INTO myCity (Name, CountryCode, District) VALUES ($name, $countryCode, $district)");

    $stmt = $mysqli->prepare("INSERT INTO myCity (Name, CountryCode, District) VALUES (?, ?, ?)");

    /* Bind variables to the prepared statement as parameters */
    $stmt->bind_param("sss", $name, $countryCode, $district);

    $stmt->execute();

    $stmt->close();
}

?>

<html>
<body>
<form method="POST" action="./">
    <input type="text" name="name" placeholder="name"><br>
    <input type="text" name="countryCode" placeholder="countryCode"><br>
    <input type="text" name="district" placeholder="district"><br>
    <input type="submit" value="Submit">
</form>
</body>
</html>