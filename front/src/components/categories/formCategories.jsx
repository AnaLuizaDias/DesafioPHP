import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormCategories = () => {
  const [name, setName] = useState([]);
  const [tax, setTax] = useState([]);

  const createCategoria = () => {
    let data = new FormData();
    data.append("name", name);
    data.append("tax", tax);
    fetch("http://localhost/routes/categories.php", {
      method: "POST",
      body: data,
    });
  };

  return (
    <>
      <div className="col-5">
        <Form onSubmit={createCategoria}>
          <Form.Group className="mb-3">
            <Form.Control
              id="name"
              type="text"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              id="tax"
              type="number"
              min="1"
              placeholder="Tax"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
          </Form.Group>

          <Button variant="light" type="submit" className="mt-4 purple">
            Add category
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormCategories;
