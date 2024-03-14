import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [compras, setCompra] = useState([]);
  const params = useParams();

  useEffect(() => {
    readCompra();
    console.log(params.code);
  }, []);

  const readCompra = async () => {
    try {
      const response = await axios.get(
        `http://localhost/routes/orders.php?code=${params.code}`
      );
      const data = response.data;
      setCompra(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-8">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((compra) => (
            <tr key={compra.code}>
              <td>{compra.name}</td>
              <td>{compra.amount}</td>
              <td>${compra.price}</td>
              <td>${((compra.tax/100)*compra.price*compra.amount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Detail;
