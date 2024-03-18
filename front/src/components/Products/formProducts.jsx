import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import AddButton from "../Buttons/addButton";
import InputComp from "../Input/inputComp";

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
          <InputComp
            className="mb-3 ml w-100"
            id="name"
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputComp
            className="mb-3 ml w-100"
            id="amount"
            type="number"
            min="1"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <InputComp
            className="mb-3 ml w-100"
            id="price"
            type="number"
            min="1"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Form.Select
            id="category"
            className="mb-3 select w-100 ml"

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

          <AddButton texto="Add Category"/>
        </Form>
      </div>
    </>
  );
};

export default FormProducts;
