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
              <tr>
                <td>1</td>
                <td>Product Name</td>
                <td>123</td>
                <td>$10</td>
                <td>Category Name</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Product Name</td>
                <td>123</td>
                <td>$10</td>
                <td>Category Name</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Product Name</td>
                <td>123</td>
                <td>$10</td>
                <td>Category Name</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Products;
