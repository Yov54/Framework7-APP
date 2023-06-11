<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");
  
  $dataMinuman = array();
  $quer = "SELECT * FROM dataminuman WHERE fdelete=0";
  $input_minuman = mysqli_query($koneksi,$quer);
  while($row = mysqli_fetch_object($input_minuman)){
    $dataMinuman[] = $row;
  }
  echo(json_encode($dataMinuman))
?>