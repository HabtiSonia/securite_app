
<?php

$link = mysqli_connect("localhost", "root", "", "web");

if($link){
  echo "connection etablie";

}
else {
  die(mysqli_connect_error());
}
?>
