import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Products = () => {
  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
        <Form>
          <Form.Group className="mb-3" >
            <Form.Control type="email" placeholder="Product Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" min="1" placeholder="Amount" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" min="1" placeholder="Category" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" min="1" placeholder="Price" />
          </Form.Group>

          <Button variant="dark" type="submit" className="mt-4 purple">
            Submit
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Product Name</td>
                <td>123</td>
                <td>$10</td>
                <td>Category Name</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Product Name</td>
                <td>123</td>
                <td>$10</td>
                <td>Category Name</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Product Name</td>
                <td>123</td>
                <td>$10</td>
                <td>Category Name</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Products;
