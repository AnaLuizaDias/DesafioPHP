import { useState } from "react";
import Form from "react-bootstrap/Form";
import AddButton from "../Buttons/addButton";
import InputComp from "../Input/inputComp";

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

          <InputComp
            className="mb-3 ml w-100"
            id="name"
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputComp
            className="mb-3 ml w-100"
            id="tax"
            type="number"
            min="1"
            placeholder="Tax"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
          />

          <AddButton
            texto="Add Category"
          />
        </Form>
      </div>
    </>
  );
};

export default FormCategories;
