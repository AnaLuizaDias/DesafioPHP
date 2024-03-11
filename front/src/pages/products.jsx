import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    updateTable();
  });
  
  const readProduto = async () => {
    const response = await fetch("http://localhost/routes/products.php");
    const data = await response.json();
    return data;
  };

  const updateTable = async () => {
    const dbProduto = await readProduto();
    setProducts(dbProduto);
  };
  updateTable();

  const deleteProduto = async (id) => {
    await fetch(`http://localhost/routes/products.php?id=${id}`, {
      method: "DELETE",
    }),
      window.location.reload();
  };

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
              {products.map((product) => (
                <tr>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.amount}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteProduto(product.code)}
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
      </div>
    </>
  );
};

export default Products;

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";

// const Products = () => {
//   return (
//     <>
//       <div className="conteiner col-12">
//         <div className="col-5">

//         </div>
//         <div className="col-5">
//           <Table responsive="sm" id="tbProduto">
//             <thead>
//               <tr>
//                 <th>Code</th>
//                 <th>Product</th>
//                 <th>Amount</th>
//                 <th>Unit Price</th>
//                 <th>products</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody></tbody>
//           </Table>
//         </div>
//       </div>
//     </>
//   );
// };

// const readProduto = async () => {
//   const response = await fetch("http://localhost/routes/products.php");
//   const data = await response.json();
//   return data;
// };
// const clearTable = () => {
//   const rows = document.querySelectorAll("#tbProduto>tbody tr");
//   rows.forEach((row) => row.parentNode.removeChild(row));
// };
// const updateTable = async () => {
//   clearTable();
//   const dbProduto = await readProduto();
//   dbProduto.forEach((product, index) => {
//     createRow(product, index);
//   });
// };
// updateTable();
// const createRow = (product, index) => {
//   const newRow = document.createElement("tr");
//   newRow.innerHTML = `
//       <td>00${product.code}</td>
//       <td>${product.name}</td>
//       <td>${product.amount}</td>
//       <td>$${product.price}</td>
//       <td>${product.products}</td>
//       <td class="tdbutton">
//         <button type="button" onclick="deleteProduto(${product.code})">Delete</button>
//       </td>

//     `;
//   document.querySelector("#tbProduto>tbody").appendChild(newRow);
// };

// export default Products;
