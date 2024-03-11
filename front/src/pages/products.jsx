import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Products = () => {
  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Product Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" min="1" placeholder="Amount" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" min="1" placeholder="Price" />
            </Form.Group>

            <Form.Select className="mb-3 select">
              <option>Category</option>
              <option>Default select</option>
              <option>Default select</option>
            </Form.Select>

            <Button variant="light" type="submit" className="mt-4 purple">
              Add Product
            </Button>
          </Form>
        </div>
        <div className="col-5">
          <Table responsive="sm" id="tbProduto">
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
            <tbody></tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
const readProduto = async () => {
  const response = await fetch("http://localhost/routes/products.php");
  const data = await response.json();
  return data;
};
const clearTable = () => {
  const rows = document.querySelectorAll("#tbProduto>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};
const updateTable = async () => {
  clearTable();
  const dbProduto = await readProduto();
  dbProduto.forEach((product, index) => {
    createRow(product, index);
  });
};
updateTable();
const createRow = (product, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>00${product.code}</td>
      <td>${product.name}</td>
      <td>${product.amount}</td>
      <td>$${product.price}</td>
      <td>${product.category}</td>
      <td class="tdbutton">
        <button type="button" onclick="deleteProduto(${product.code})">Delete</button>
      </td>

    `;
  document.querySelector("#tbProduto>tbody").appendChild(newRow);
};

export default Products;
