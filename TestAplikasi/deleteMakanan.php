<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");

  $Nama_Makanan = $_POST['Nama_Makanan'];

  $delete = mysqli_query(
  $koneksi, "UPDATE datamakanan 
  SET fdelete='1' 
  WHERE Nama_Makanan='$Nama_Makanan'"
  ) or die (mysqli_error($koneksi));
?>