import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Home = () => {
  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
          <Form>
            <Form.Select className="mb-3 select">
              <option>Product</option>
              <option>Default select</option>
              <option>Default select</option>
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Control type="number" min="1" placeholder="Amount" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" min="1" placeholder="Tax" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" min="1" placeholder="Price" />
            </Form.Group>

            <Button variant="light" type="submit" className="mt-4 purple">
              Add Product
            </Button>
          </Form>
        </div>

        <div className=" col-5">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Amount</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Product Name</td>
                <td>$10</td>
                <td>1</td>
                <td>$100</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>

              <tr>
                <td>Product Name</td>
                <td>$10</td>
                <td>2</td>
                <td>$200</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Product Name</td>
                <td>$10</td>
                <td>3</td>
                <td>$300</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
            <div className="col-12">
              <Form.Group className="mb-3 mt-5 ml readonly">
                <Form.Control type="number" placeholder="Tax" readOnly />
              </Form.Group>
              <Form.Group className="mb-3 ml mt-3 readonly">
                <Form.Control type="text" placeholder="Total" readOnly />
              </Form.Group>
              <Button variant="light" type="submit" className="mt-4 gbt ml">
                Cancel
              </Button>
              <Button variant="light" type="submit" className="mt-4 ml purple">
                Finish
              </Button>
            </div>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Home;
