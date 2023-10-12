import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, NavDropdown, Dropdown, Image, Row, Col, Button, Form} from 'react-bootstrap';
import { Yelp, Instagram, Envelope} from 'react-bootstrap-icons';

// React components:
// 1. Top Menu
const TopMenu = () => (
  <Navbar expand="sm" className="py-4 change-font">
    <Container>
      <Navbar.Brand href="#home"><Image src="/hanatea-logo.png" alt="logo" height={50}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav activeKey="/home" className="fs-5 justify-content-center">
        <Nav.Link className="px-0 pb-0 mx-2" href="/home">Home</Nav.Link>
        <Nav.Link href="#">Menu</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Visit</Nav.Link>
        <Nav.Link href="#">Join our team</Nav.Link>
      </Nav>
      <Nav className="fs-5 justify-content-end">
        <Nav.Link href="#" className="px-3"><Instagram/></Nav.Link>
        <Nav.Link href="#" className="px-3"><Yelp/></Nav.Link>
        <Nav.Link href="#" className="px-3"><Envelope/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

// 2. Middle Text Image (card)
// 3. Special Menu text
// 4. Bottom Menu text
// 5. Footer

// Top-level Hana Tea parent component
const HanaTea = () => (
  <Container fluid className="px-0 d-flex flex-column min-vh-100">
    <TopMenu />
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HanaTea />);
