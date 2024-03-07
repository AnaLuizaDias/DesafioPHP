<?php
require_once '../index.php';
function createOrderItem(int $order_code, int $product_code, int $amount)
{

    $product = myPDO->query
    ("SELECT 
        p.name, p.price, c.tax
    from
        products as p 
    JOIN 
        categories c
    ON
        p.category_code = c.code
    WHERE
        p.code = $product_code
      ");
    $product = $product->fetch();

    $tax = $product["tax"];
    $price = $product["price"];
    $name = $product["name"];

    $createQuery = myPDO->prepare
    ("INSERT INTO   
        order_item (order_code, product_code, amount, price, tax, name)
    VALUES
        ({$order_code}, {$product_code}, {$amount}, {$price}, {$tax}, '{$name}')
    ");

    $createQuery->execute();
    atualizaEstoque($product_code, $amount);
    return array("tax" => $tax, "price" => $price, "amount" => $amount);
}
;

function deleteOrderItem(int $id)
{
    $createQuery = myPDO->prepare("delete from order_item where code={$id}");
    $createQuery->execute();

    return "Compra id={$id} deletada com sucesso";
}
;

function readOrderItem()
{
    $readAllOrderItem = myPDO->query("SELECT * FROM order_item");
    $data = $readAllOrderItem->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}

function itemEstoque(int $product_code)
{
    $itensProducts = myPDO->query("SELECT * FROM products where code = {$product_code}");
    $itemProduct = $itensProducts->fetch();
    return $itemProduct;
}
function atualizaEstoque(int $product_code, int $amount)
{
    
    $read = itemEstoque($product_code);
    $newAmount = $read['amount'] - $amount;
    $order_item = myPDO->query("UPDATE products set amount = $newAmount where code = {$product_code}");
    $order_item = $order_item->execute();
    return "foi";
}