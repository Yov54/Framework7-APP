<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");

  $Nama_Minuman = $_POST['Nama_Minuman'];

  $delete = mysqli_query(
  $koneksi, "UPDATE dataminuman 
  SET fdelete='1' 
  WHERE Nama_Minuman='$Nama_Minuman'"
  ) or die (mysqli_error($koneksi));
?>