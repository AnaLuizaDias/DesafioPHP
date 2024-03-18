import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const TableProducts = () => {
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    readProduto();
    fetch("http://localhost/routes/categories.php")
      .then((data) => data.json())
      .then((value) => setValues(value));
  }, []);

  const readProduto = async () => {
    try {
      const response = await axios.get("http://localhost/routes/products.php");
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduto = async (id) => {
    await fetch(`http://localhost/routes/products.php?id=${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <>
      <div className="col-5">
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Code</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.code}>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.amount}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteProduto(product.code)}
                    className="gbt ml"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TableProducts;
