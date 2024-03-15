import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormProducts = () => {
  const [values, setValues] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost/routes/categories.php")
      .then((data) => data.json())
      .then((value) => setValues(value));
  
  }, []);

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

  return (
    <>
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
    </>
  );
};

export default FormProducts;

