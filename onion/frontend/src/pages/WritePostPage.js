import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container,Row, Col} from 'react-bootstrap';
import UploadButton from '../components/UploadButton';
const WritePostPage = props => {
    return (
        <>
        <Container>
        <Row className="px-4 my-5"> 
        <Col>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Title</Form.Label>
           <Form.Control className="w-50" type="email" placeholder="Describe the item in a short sentence" />
         </Form.Group>
           <UploadButton/> 
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>text area</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
         <Button variant="success" type="submit">
           Post
         </Button>
       </Form></Col>
       </Row></Container>
       
        </>
    );
};

WritePostPage.propTypes = {
    
};

export default WritePostPage; 