import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;






// import { Outlet, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const header = () => {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="#home">Suite Store</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link to="/home">Home</Nav.Link>
//             <Nav.Link to="/categories">Categories</Nav.Link>
//             <Nav.Link to="/products">Products</Nav.Link>
//             <Nav.Link to="/history">History</Nav.Link>
//             <Link to="/home">Home</Link>
//             <Link to="/categories">Categories</Link>
//             <Link to="/products">Products</Link>
//             <Link to="/history">History</Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//       <Outlet />
//     </>
//   )
// };

// export default header;