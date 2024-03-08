import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Home = () => {
  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
        <Form>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="number" min="1" placeholder="Amount" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="number" min="1" placeholder="Tax" />
          </Form.Group>

          <Form.Group className="mb-3" >
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
              <th>Product</th>
              <th>Unit Price</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Name</td>
              <td>$10</td>
              <td>1</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>$10</td>
              <td>2</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>$10</td>
              <td>3</td>
              <td>$300</td>
            </tr>
          </tbody>
          <div className="">
          <Form.Group className="mb-3 mt-5 readonly" >
            <Form.Control type="number" placeholder="Tax" readOnly/>
          </Form.Group>
          <Form.Group className="mb-3 mt-3 readonly" >
            <Form.Control type="text" placeholder="Total" readOnly/>
          </Form.Group>
          </div>
        </Table>
        
        </div>
        
      </div>
    </>
  );
};

export default Home;
