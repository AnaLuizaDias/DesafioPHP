import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState([]);
  const [tax, setTax] = useState([]);
  useEffect(() => {
    readCategoria();
  },[]);

  const readCategoria = async () => {
    try{
      const response = await axios.get("http://localhost/routes/categories.php");
      const data = response.data;
      setCategories(data);
    }catch (error){
      console.error(error);
    }
  };

  const createCategoria = () => {
      let data = new FormData();
      data.append("name",name)
      data.append("tax",tax)
      fetch(
          "http://localhost/routes/categories.php", {
            method: "POST",
            body: data,
          }).then(readCategoria());
      } 
    
  

  const deleteCategoria = async (id) => {
    await fetch(`http://localhost/routes/categories.php?id=${id}`, {
      method: "DELETE",
    }),
      window.location.reload();
  };

  return (
    <>
      <div className="conteiner col-12">
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

        <div className="col-5">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Code</th>
                <th>Category</th>
                <th>Tax</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.code}>
                  <td>{category.code}</td>
                  <td>{category.name}</td>
                  <td>{category.tax}%</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteCategoria(category.code)}
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

export default Categories;
