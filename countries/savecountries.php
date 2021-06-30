<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}


$servername = "localhost";
$username = "root";
$password = "";
$database = "countries";

$country = $_POST['country'];

$connection = new mysqli($servername, $username, $password, $database);

if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

$objectCountry = json_decode($country, true);

foreach ($objectCountry as $value) {
  
  $stmt = $connection->prepare("INSERT INTO paises (name, capital, flag) VALUES(?, ?, ?)");

  $name = $value['name'];
  $capital = $value['capital'];
  $flag = $value['flag'];

  $stmt->bind_param('sss', $name, $capital, $flag);
  
  
  echo $stmt->execute();
  
}
mysqli_close($connection);

?>