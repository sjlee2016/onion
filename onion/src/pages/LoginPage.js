import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container,Row, Col} from 'react-bootstrap';
const LoginPage = props => {
    return (
        <Container>
       <Row className="px-4 my-5"> 
       <Col>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="w-50" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="w-50" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form></Col>
      </Row></Container>
        );
};

LoginPage.propTypes = {
    
};

export default LoginPage;