import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Categories = () => {
  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
          <Form>
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
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Code</th>
                <th>Category Name</th>
                <th>Tax</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Category Name</td>
                <td>10%</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>002</td>
                <td>Category Name</td>
                <td>10%</td>
                <td>
                  <Button variant="light" type="submit" className="gbt ml">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>003</td>
                <td>Category Name</td>
                <td>10%</td>
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

export default Categories;
