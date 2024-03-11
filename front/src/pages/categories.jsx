import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";


const Categories = () => {
  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
          <Form id="form">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Category name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" min="1" placeholder="Tax" />
            </Form.Group>

            <Button variant="light" className="mt-4 purple" type="submit">
              Add Category
            </Button>
          </Form>
        </div>

        <div className="col-5">
          <Table responsive="sm" id="tbCategoria">
            <thead>
              <tr>
                <th>Code</th>
                <th>Category Name</th>
                <th>Tax</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </div>
    </>
  );
};


const readCategoria = async () => {
  const response = await fetch("http://localhost/routes/categories.php");
  const data = await response.json();
  return data;
};
const clearTable = () => {
  const rows = document.querySelectorAll("#tbCategoria>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};
const updateTable = async () => {
  clearTable();
  const dbCategoria = await readCategoria();
  dbCategoria.forEach((category, index) => {
    createRow(category, index);
  });
};
updateTable();

const createRow = (category) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>00${category.code}</td>
    <td>${category.name}</td>
    <td>${category.tax}%</td>
    <td class="tdbutton">
        <button type="button" onclick="deleteCategoria(${category.code})">Delete</button>
    </td>
    
  `;
  document.querySelector("#tbCategoria>tbody").appendChild(newRow);
};

export default Categories;
