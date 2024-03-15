import { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";

const TableCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    readCategoria();
  }, []);

  const readCategoria = async () => {
    try {
      const response = await axios.get(
        "http://localhost/routes/categories.php"
      );
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategoria = async (id) => {
    await fetch(`http://localhost/routes/categories.php?id=${id}`, {
      method: "DELETE",
    }),
      window.location.reload();
  };

  return (
    <>
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
    </>
  );
};

export default TableCategories;
