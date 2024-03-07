<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
include "../services/ordersServices.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $result = createOrder($data);
    echo $result;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if($_SERVER['QUERY_STRING']){
        $code = $_GET["code"];
        $data = getOderByCode($code);
    }else {
        $data = readOrders();
    }
    echo json_encode($data);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $toBeDeleted = $_GET['id'];
    $data = deleteOrder($toBeDeleted);
    echo "apagado com sucesso, {$data}";
}
;
