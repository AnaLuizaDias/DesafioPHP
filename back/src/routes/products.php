<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
include "../services/productsServices.php";


// Post
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo 'Criar produto <br/>';

    $name = filter_var($_POST["name"], FILTER_SANITIZE_SPECIAL_CHARS);
    $amount = filter_var($_POST["amount"]);
    $price = filter_var($_POST["price"]);
    $category = filter_var($_POST["category"]);

    $result = createProduct($name, $amount, $price, $category);
    echo $result;
}

//Get
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = readProducts();
    echo json_encode($data);
}


//Delete
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $toBeDeleted = $_GET['id'];
    $data = deleteProduct($toBeDeleted);
    echo "Produto apagado com sucesso, {$data}";
}
;

