import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, Image, Row, Col, Button, Card} from 'react-bootstrap';
import { Yelp, Instagram, Envelope} from 'react-bootstrap-icons';

// React components:
// 1. Top Menu
const TopMenu = () => (
  <Navbar expand="lg" className="py-4 change-font">
    <Container className="py-2">
      <Navbar.Brand href="#home"><Image src="/hanatea-logo.png" alt="logo" height={50}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home" className="fs-5 justify-content-end">
          <Nav.Link className="px-0 pb-0 me-2" href="/home">Home</Nav.Link>
          <Nav.Link href="#">Menu</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Visit</Nav.Link>
          <Nav.Link href="#">Join our team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="fs-5 justify-content-end">
          <Nav.Link href="#" className="me-2"><Instagram/></Nav.Link>
          <Nav.Link href="#" className="me-2"><Yelp/></Nav.Link>
          <Nav.Link href="#"><Envelope/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// 2. Middle Text Image (card)
const BodyImageText = () => (
  <Card className="text-white">
    <Image src="/hanatea-backdrop-edit.jpeg" className="card-img" alt="Backdrop Image"/>
    <Container fluid className="card-img-overlay">
      <Container fluid className="row align-content-center justify-content-end" id="mainText">
        <Col className="text-end me-3">
          <h1 className="display-2 mb-4"><strong>Dillingham Hours:</strong></h1>
          <h2 className="my-4">Unfortunately our Dillingham location is Closed as we look for a new location.</h2>
          <h2 className="my-4">Mahalo and thank you for your patience.</h2>
          <h1 className="display-2 my-5"><strong>Pearl City Hours:</strong></h1>
          <h2 className="my-4">Tuesday - Thursday, Sunday: 11:30am-8:00pm</h2>
          <h2 className="my-4">Friday, Saturday: 11:30AM - 9:00PM</h2>
          <h2 className="display-5 my-5">Monday: closed</h2>
          <Button type="button" variant="light" size="lg" className="py-3 px-4">Pearl City Order</Button>
        </Col>
      </Container>
    </Container>
  </Card>
);

// 3. Special Menu text
const SpecialMenu = () => (
  <Row className="align-content-center justify-content-center pt-5" id="middle">
    <Col lg={10} className="text-center py-5 mb-5">
      <Container className="p-1 change-font">
        <h5 className="mb-4">During special hours, only certain drinks are available.</h5>
        <h3 className="my-5">‖   In-store   and   online   ordering   available   ‖</h3>
        <h5 className="my-4 change-font">We accept phone order. Please call (808)376-8139.</h5>
      </Container>
      <Container className="p-1">
        <Button type="button" variant="dark" className="py-3 px-4">Special Menu</Button>
      </Container>
    </Col>
    <Nav activeKey="/home" className="justify-content-center ms-4 mt-5 py-5">
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home" aria-current="page">Home</Nav.Link></Nav.Item>
      <div className="fs-3">||</div>
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home">Special Menu</Nav.Link></Nav.Item>
      <div className="fs-3">||</div>
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home">About</Nav.Link></Nav.Item>
      <div className="fs-3">||</div>
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home">Visit</Nav.Link></Nav.Item>
    </Nav>
  </Row>
);


// 4. Footer
const FooterMenu = () => (
  <footer className="mt-auto pb-3" id="footer">
    <Container className="text-center">
      <Row className="py-3">
        <p><b>DILLINGHAM</b> | <b>m.</b> (808)376-8139 | 1111 Dillingham Blvd, Unit E-2, Honolulu, HI 96817</p>
        <p><b>PEARL CITY</b> | <b>m.</b> (808)600-5024  |  1160 Kuala street, Unit 204, Pearl City, HI, 96782</p>
      </Row>
      <Row>
        <p className="change-font">© Hana Tea • All rights reserve</p>
      </Row>
    </Container>
  </footer>
);

// Top-level Hana Tea parent component
const HanaTea = () => (
  <Container fluid className="px-0 d-flex flex-column min-vh-100">
    <TopMenu />
    <BodyImageText />
    <SpecialMenu />
    <FooterMenu />
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HanaTea />);
