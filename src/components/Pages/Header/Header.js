import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-light p-3 m-2' href="#"><h2>Next-Learning 2.0</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 p-4 m-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-light'><b>Home</b></Nav.Link>
            <Nav.Link href="#action2" className='text-light'>Courses</Nav.Link>
            
            <Nav.Link href="#" className='text-light'>
              Pricing
            </Nav.Link>
            <Nav.Link href="#" className='text-light'>
              About Us
            </Nav.Link>
            <Nav.Link href="#" className='text-light'>
               Blog
            </Nav.Link>
            <Nav.Link href="#" className='text-light'>
              Contact us
            </Nav.Link>
          </Nav>
         
          
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form> */}
          <Button variant="info" className='m-2'>Sign Up</Button>
          <Button variant="success">Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;