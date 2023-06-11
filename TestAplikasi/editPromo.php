<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");

  $filename = $_FILES["imgPromo"]["name"];
  $tempname = $_FILES["imgPromo"]["tmp_name"];
  $imgPromo = "img/".$filename;
  move_uploaded_file($tempname, $imgPromo);

  $titlePromo = $_POST['titlePromo'];
  $capPromo = $_POST['capPromo'];
  $skPromo = $_POST['skPromo'];

  $edit = mysqli_query(
    $koneksi, "UPDATE datapromo 
    SET titlePromo='$titlePromo', capPromo='$capPromo', skPromo='$skPromo', imgPromo='$imgPromo'
    WHERE titlePromo='$titlePromo'") or die (mysqli_error($koneksi));
?>