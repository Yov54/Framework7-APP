<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Credentials:true");
  header("Access-Control-Allow-Methods: POST, GET, OUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 604800");
  header("Access-Control-Request-Headers: x-requested-with");
  header("Access-Control-Allow-Headers: x-requested-with, x-request-by");
  include("koneksi.php");
  
  $Username = $_POST ['Username'];
  $Password = $_POST ['Password'];

  $quer = "SELECT * FROM loginAdmin WHERE Username='$Username' and Password = '$Password'";
  $hasil = mysqli_query($koneksi,$quer);
  $data = mysqli_fetch_array($hasil);
  $amount = mysqli_num_rows($hasil);
  if ($amount >= 1){
    $output ['pesan'] = "Berhasil Login!";
    $output ['id_admin'] = $data ['id_admin'];
    $output ['Username'] = $data ['Username'];
  }
  else {
    $output ['error'] = true;
    $output ['pesan'] = "Gagal Login!";
  }

  echo json_encode($output);
  
?>