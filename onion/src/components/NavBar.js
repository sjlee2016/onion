import React from 'react';
import PropTypes from 'prop-types';

import {Navbar,Form,Nav,Container,Button} from 'react-bootstrap';
const NavBar = props => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Onion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Community</Nav.Link>
                
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
          <Nav>
          <Nav.Link href="#link">Sign In</Nav.Link></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;