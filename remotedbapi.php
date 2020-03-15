<?php

header("Access-Control-Allow-Origin: *");         #Used rest api from remote moodle site
include("../example/resource/db.php");                                               #safeSql is my method to handle SQLinjection delete it or use your own
if ($_GET["args"] != "" && isset($_GET["args"]) && md5("Salty".$_GET["key"]) == "") {   #md5 + salt of a key
    $sql = "SELECT * FROM table WHERE Titolo LIKE '%".safeSql($_GET['args'])."%' ;";
    $result = $conn->query($sql);               #my method of handle the sql query
    $result = $result->fetch_assoc();
    echo json_encode($result);
}
else {
  echo "invalid key";
}





 ?>
