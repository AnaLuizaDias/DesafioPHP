import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    updateTable();
  });
  
  const readCategoria = async () => {
    const response = await fetch("http://localhost/routes/categories.php");
    const data = await response.json();
    return data;
  };

  const updateTable = async () => {
    const dbCategoria = await readCategoria();
    setCategories(dbCategoria);
  };
  updateTable();

  const deleteCategoria = async (id) => {
    await fetch(`http://localhost/routes/categories.php?id=${id}`, {
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
              <Form.Control type="text" placeholder="Category Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" min="1" placeholder="Tax" />
            </Form.Group>

            <Button variant="light" type="submit" className="mt-4 purple">
              Add category
            </Button>
          </Form>
        </div>

        <div className="col-5">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Code</th>
                <th>Category</th>
                <th>Tax</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr>
                  <td>{category.code}</td>
                  <td>{category.name}</td>
                  <td>{category.tax}%</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteCategoria(category.code)}
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

export default Categories;

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";

// const categorys = () => {
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
//                 <th>category</th>
//                 <th>Amount</th>
//                 <th>Unit Price</th>
//                 <th>categorys</th>
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

// const readCategoria = async () => {
//   const response = await fetch("http://localhost/routes/categorys.php");
//   const data = await response.json();
//   return data;
// };
// const clearTable = () => {
//   const rows = document.querySelectorAll("#tbProduto>tbody tr");
//   rows.forEach((row) => row.parentNode.removeChild(row));
// };
// const updateTable = async () => {
//   clearTable();
//   const dbCategoria = await readCategoria();
//   dbCategoria.forEach((category, index) => {
//     createRow(category, index);
//   });
// };
// updateTable();
// const createRow = (category, index) => {
//   const newRow = document.createElement("tr");
//   newRow.innerHTML = `
//       <td>00${category.code}</td>
//       <td>${category.name}</td>
//       <td>${category.amount}</td>
//       <td>$${category.price}</td>
//       <td>${category.categorys}</td>
//       <td class="tdbutton">
//         <button type="button" onclick="deleteCategoria(${category.code})">Delete</button>
//       </td>

//     `;
//   document.querySelector("#tbProduto>tbody").appendChild(newRow);
// };

// export default categorys;
