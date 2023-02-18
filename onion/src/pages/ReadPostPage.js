import React from 'react';
import PropTypes from 'prop-types';
import PostTable from '../components/PostTable';
import { Row,Col,Container } from 'react-bootstrap';
import PostContent from '../components/PostContent';
const ReadPostPage = props => {
    return (
        <Container>
          <Row className="px-4 my-5"> 
            <Col sm={5}><PostTable/> </Col>
            <Col sm={7}><PostContent/>
              </Col>
          </Row>
         
        </Container>
    );
};

ReadPostPage.propTypes = {
    
};

export default ReadPostPage;