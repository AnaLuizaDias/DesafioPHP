import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const header = () => {
  return (
    <>
      <Navbar className="purple mb-4" data-bs-theme="dark">
      <Container>
        <Link className="navrouter " id="suite" to="/">Suite Store</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className="navrouter" to="/products">Products</Link>
            <Link className="navrouter" to="/categories">Categories</Link>
            <Link className="navrouter" to="/history">History</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Outlet />
    </>
  )
};

export default header;