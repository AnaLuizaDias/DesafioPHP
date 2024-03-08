import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Categories = () => {
  return (
    <>
      <div className="conteiner col-12">
        <div className="col-5">
        <Form>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Category name" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="number" min="1" placeholder="Tax" />
          </Form.Group>

          <Button variant="dark" className="mt-4 purple" type="submit">
            Submit
          </Button>
        </Form>
        </div>

        <div className="col-5">
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category Name</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Category Name</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Category Name</td>
              <td>10%</td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </>
  );
};

export default Categories;
