<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");

  $titlePromo = $_POST['titlePromo'];

  $delete = mysqli_query(
  $koneksi, "UPDATE datapromo 
  SET fdelete='1' 
  WHERE titlePromo='$titlePromo'"
  ) or die (mysqli_error($koneksi));
?>