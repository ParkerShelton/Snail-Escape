<?php
require_once './SnailFunctions.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: X-Requested-With");


//Recieves the data from the front end and decodes it from a string to json object
$data = trim(file_get_contents("php://input"));
$dataObj = json_decode($data);

$h = $dataObj->h;
$u = $dataObj->u;
$d = $dataObj->d;
$f = $dataObj->f;

$snailFunctions = new SnailFunctions();

//Calling the function that calculates the snails attemp to escape and encodes the data returned from it
$returnObj = $snailFunctions->SnailTest($h, $u, $d, $f);
$returnData = json_encode($returnObj);

echo $returnData;

?>