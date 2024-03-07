<?php
include '../index.php';
 
function createProduct(String $name, Int $amount, Float $price, Int $category) {
    $createQuery = myPDO->prepare("insert into products (name, amount, price, category_code) values ('{$name}', {$amount}, {$price}, {$category})");
    $createQuery->execute();
 
    return "criado com sucesso!";
};
 
function deleteProduct(Int $id) {
    $createQuery = myPDO->prepare("delete from Products where code={$id}");
    $createQuery->execute();
 
    return "produto id={$id} deletada com sucesso";
};
 
function readProducts(){
    // $readAllProducts = myPDO->query("SELECT * FROM products");
    // $data = $readAllProducts->fetchAll(PDO::FETCH_ASSOC);
    // return $data;
 
 
    $readAllProducts = myPDO->query("SELECT
    products.code,
    products.name,
    products.price,
    products.amount,
    categories.tax,
    categories.name as category,
    trunc((categories.tax / 100 * products.price), 2) as tax_unit
    from
        products
    JOIN
        categories
    ON
    products.category_code = categories.code");;
    $data = $readAllProducts->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}
?>