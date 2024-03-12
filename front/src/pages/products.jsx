import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState([]);
  useEffect(() => {
    fetch("http://localhost/routes/categories.php")
      .then((data) => data.json())
      .then((val) => setValues(val));
    updateTable();
  }, []);

  const readProduto = async () => {
    const response = await fetch("http://localhost/routes/products.php");
    const data = await response.json();
    return data;
  };

  const updateTable = async () => {
    const dbProduto = await readProduto();
    setProducts(dbProduto);
  };
  updateTable();

  const deleteProduto = async (id) => {
    await fetch(`http://localhost/routes/products.php?id=${id}`, {
      method: "DELETE",
    }),
      window.location.reload();
  };

  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control id="name" type="text" placeholder="Product Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                id="amount"
                type="number"
                min="1"
                placeholder="Amount"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                id="price"
                type="number"
                min="1"
                placeholder="Price"
              />
            </Form.Group>
            <Form.Select
              className="mb-3 select"
              onChange={(e) => setOptions(e.target.value)}
            >
              {values.map((opts, i) => (
                <option key={i}>{opts.name}</option>
              ))}
            </Form.Select>

            <Button variant="light" type="submit" className="mt-4 purple">
              Add Product
            </Button>
          </Form>
        </div>

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
              {products.map((product) => (
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
      </div>
    </>
  );
};

export default Products;
