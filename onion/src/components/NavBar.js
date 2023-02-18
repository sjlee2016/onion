import React from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap'

import {Navbar,Form,Nav,Container,Button} from 'react-bootstrap';
const NavBar = props => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Onion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/post">
              <Nav.Link>Community</Nav.Link>
              </LinkContainer>
            </Nav> 
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
             <LinkContainer to="/read">
            <Button variant="outline-success">Search</Button>
          </LinkContainer>
          </Form>
          <Nav>
          <Nav.Link href="/register">Sign In</Nav.Link></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;