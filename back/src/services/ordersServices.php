<?php
require_once '../index.php';
require_once '../services/orderItemServices.php';

function createOrder($orderProducts)
{
    $code = 1;
    $orders = myPDO->query("SELECT * FROM orders");
    $orders = $orders->fetchALL();
    $code += count($orders);

    $createQuery = myPDO->prepare("insert into orders (total, tax) values (0, 0)");
    $createQuery->execute();

    foreach ($orderProducts as $product) {
        $itemInfo = createOrderItem($code, $product["code"], $product["amount"]);
        updateOrderInfo($code, $itemInfo);
    }

    return true;
}
;

function deleteOrder(int $id)
{
    $createQuery = myPDO->prepare("delete from orders where code={$id}");
    $createQuery->execute();

    return "Compra id={$id} deletada com sucesso";
}
;

function readOrders()
{
    $readAllOrders = myPDO->query("SELECT * FROM orders");
    $data = $readAllOrders->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}

function updateOrderInfo($code, $itemInfo)
{
    $order = myPDO->query("SELECT tax, total from orders where code = $code");
    $order = $order->fetch();
    $tax = $order["tax"];
    $total = $order["total"];

    $tax += $itemInfo["price"] * $itemInfo["amount"] * ($itemInfo["tax"] / 100);
    $total += $itemInfo["price"] * $itemInfo["amount"] + $itemInfo["price"] * $itemInfo["amount"] * ($itemInfo["tax"] / 100);
    $updateOrder = myPDO->prepare
    ("UPDATE orders set tax = $tax, total = $total where code = $code");
    $updateOrder->execute();

}

function getOderByCode($code)
{
    $orderitems = myPDO->query("SELECT * FROM order_item where order_code = $code");
    $orderitems = $orderitems->fetchALL();
    return $orderitems;
}

