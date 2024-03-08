import Table from "react-bootstrap/Table";

const History = () => {
  return (
    <div className="col-8">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Code</th>
            <th>Tax</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$10</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$20</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$30</td>
            <td>$300</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default History;
