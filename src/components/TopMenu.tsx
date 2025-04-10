'use client';

import { Navbar, Container, Nav, Image } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar className="navbar" expand="lg">
    <Container className="contright">
      <Nav className="me-auto">
        <Navbar.Brand href="#home"><Image src="/image.png" alt="" fluid className="logo" /></Navbar.Brand>
      </Nav>
      <Navbar.Text className="nav-link">
        Home
      </Navbar.Text>
      <Navbar.Text className="nav-link">
        Explore
      </Navbar.Text>
      <Navbar.Text className="nav-link">
        Sign In
      </Navbar.Text>
    </Container>
  </Navbar>
);

export default TopMenu;
