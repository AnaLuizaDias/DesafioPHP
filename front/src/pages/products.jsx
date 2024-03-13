import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    readProduto()
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

  const createProduto = () => {
    let data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("amount", amount);
    data.append("category", category);

    fetch("http://localhost/routes/products.php", {
      method: "POST",
      body: data,
    }).then(readProduto());
  };

  const deleteProduto = async (id) => {
    await fetch(`http://localhost/routes/products.php?id=${id}`, {
      method: "DELETE",
    })
    window.location.reload();
  };

  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
          <Form onSubmit={createProduto}>
            <Form.Group className="mb-3">
              <Form.Control
                id="name"
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                id="amount"
                type="number"
                min="1"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                id="price"
                type="number"
                min="1"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Select
              id="category"
              className="mb-3 select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Category</option>
              {values.map((opts, i) => (
                <option key={i} value={opts.code}>
                  {opts.name}
                </option>
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
      </div>
    </>
  );
};

export default Products;

