import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          className="d-inline-block align-top ml-5"
          id="logo_header"
          alt="logo"
        />
      </Navbar.Brand>

      <Nav className="ml-auto">
        <NavDropdown
          title={<img src="/avatar.jpg" alt="avatar" id="avatar_header" />}
          id="collasible-nav-dropdown"
          className="mr-5"
        >
          <NavDropdown.Item className="mr-5 logout">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
