import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import axios from "axios";

const HistoryComp = () => {
  const [compras, setCompra] = useState([]);

  useEffect(() => {
    readCompra();
  }, []);

  const readCompra = async () => {
    try {
      const response = await axios.get("http://localhost/routes/orders.php");
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
            <th>Code</th>
            <th>Tax</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {compras.map((compra) => (
            <tr key={compra.code}>
              <td>{compra.code}</td>
              <td>${compra.tax}</td>
              <td>${compra.total}</td>

              <td>
                <button type="button" className="gbt ml">
                  <Link className="navrouter" to={`/detail/${compra.code}`}>
                    View
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryComp;
