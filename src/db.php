<?php
header("Content-Type:application/json");
if (isset($_GET['numerodex']) && $_GET['numerodex']!="") {
	include('db.php');
	$numerodex = $_GET['numerodex'];
	$result = mysqli_query(
	$con,
	"SELECT * FROM `pokemon` WHERE numerodex=$numerodex");
	if(mysqli_num_rows($result)>0){
	$row = mysqli_fetch_array($result);
	$nombre = $row['nombre'];
	$imagen = $row['imagen'];
	$tipo1 = $row['tipo1'];
	response($numerodex, $nombre, $imagen,$tipo1);
	mysqli_close($con);
	}else{
		response(NULL, NULL, 200,"No Record Found");
		}
}else{
	response(NULL, NULL, 400,"Invalid Request");
	}

if (isset($_GET['']) && $_GET['numerodex']!="") {
  	include('db.php');
  	$numerodex = $_GET['numerodex'];
  	$result = mysqli_query(
  	$con,
  	"SELECT * FROM `pokemon`");
  	if(mysqli_num_rows($result)>0){
  	$row = mysqli_fetch_array($result);
  	$nombre = $row['nombre'];
  	$imagen = $row['imagen'];
  	$tipo1 = $row['tipo1'];
  	response($numerodex, $nombre, $imagen,$tipo1);
  	mysqli_close($con);
  	}else{
  		response(NULL, NULL, 200,"No Record Found");
  		}
  }else{
  	response(NULL, NULL, 400,"Invalid Request");
}

function response($numerodex,$nombre,$imagen,$tipo1){
	$response['numerodex'] = $numerodex;
	$response['nombre'] = $nombre;
	$response['imagen'] = $imagen;
	$response['tipo1'] = $tipo1;

	$json_response = json_encode($response);
	echo $json_response;
}
?>
