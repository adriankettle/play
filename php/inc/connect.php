<?php

$conn = mysqli_connect('localhost', 'root', '24Strawberry', 'mall');
 if (!$conn){
   die("Coul not connect: " .mysqli_error($conn));
 }

?>
