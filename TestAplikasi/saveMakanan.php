<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");

  $filename = $_FILES["Img_Makanan"]["name"];
  $tempname = $_FILES["Img_Makanan"]["tmp_name"];
  $Img_Makanan = "img/".$filename;
  move_uploaded_file($tempname, $Img_Makanan);

  $Nama_Makanan = $_POST['Nama_Makanan'];
  $Desk_Makanan = $_POST['Desk_Makanan'];
  $Harga_Makanan = $_POST['Harga_Makanan'];

  $saveMakanan = mysqli_query($koneksi, "INSERT INTO datamakanan (Nama_Makanan, Desk_Makanan, Harga_Makanan, Img_Makanan, fdelete) VALUES('$Nama_Makanan', '$Desk_Makanan', '$Harga_Makanan', '$Img_Makanan', '0')") or die (mysqli_error($koneksi));
?>