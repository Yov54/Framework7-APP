<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");
  
  $data = array();
  $Nama_Makanan = $_GET['Nama_Makanan'];
  $quer = "SELECT * FROM datamakanan WHERE Nama_Makanan='$Nama_Makanan'";
  $hasil = mysqli_query($koneksi,$quer);
  while($row = mysqli_fetch_object($hasil)){
    $data[] = $row;
  }
  echo(json_encode($data))
?>