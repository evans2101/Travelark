import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Bootcamp</Navbar.Brand>
            <Navbar.Offcanvas
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Discovery</Nav.Link>
                  <Nav.Link href="#action2">Destination</Nav.Link>
                  <Nav.Link href="#action2">Package</Nav.Link>
                  <Nav.Link href="#action2">About us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;