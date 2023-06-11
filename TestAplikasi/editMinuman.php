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

  $Nama_Makanan = $_POST['Nama_Minuman'];
  $Desk_Makanan = $_POST['Desk_Minuman'];
  $Harga_Makanan = $_POST['Harga_Minuman'];

  $edit = mysqli_query(
    $koneksi, "UPDATE dataminuman 
    SET Nama_Minuman='$Nama_Minuman', Desk_Minuman='$Desk_Minuman', Harga_Makanan='$Harga_Minuman', Img_Makanan='$Img_Minuman'
    WHERE Nama_Minuman='$Nama_Minuman'") or die (mysqli_error($koneksi));
?>