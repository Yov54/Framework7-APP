<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");

  $filename = $_FILES["Img_Minuman"]["name"];
  $tempname = $_FILES["Img_Minuman"]["tmp_name"];
  $Img_Minuman = "img/".$filename;
  move_uploaded_file($tempname, $Img_Minuman);

  $Nama_Minuman = $_POST['Nama_Minuman'];
  $Desk_Minuman = $_POST['Desk_Minuman'];
  $Harga_Minuman = $_POST['Harga_Minuman'];

  $saveMinuman = mysqli_query($koneksi, "INSERT INTO dataminuman (Nama_Minuman, Desk_Minuman, Harga_Minuman, Img_Minuman, fdelete) VALUES('$Nama_Minuman', '$Desk_Minuman', '$Harga_Minuman', '$Img_Minuman', '0')") or die (mysqli_error($koneksi));
?>