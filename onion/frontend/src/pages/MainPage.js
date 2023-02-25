import React from 'react';
import PopularCard from '../components/PopularCard';
import NavBar from '../components/NavBar';
import {Container,Image,Row,Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const MainPage = props => {
    return (
        <>
      <main>
        <Container>
          <Row className="px-4 my-5"> 
            <Col sm={7}><Image src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" fluid rounded /> </Col>
            <Col sm={5}><h1 className="font-weight-light"> What is Onion? </h1>
            <p className="mt-4"> A community where you can buy or sell secondhand items </p>
              </Col>
          </Row>
          <Row className="px-4 my-5">
              <h1 clasName="text-sm-start"> Browse Popular Items </h1>
              <Col><PopularCard/></Col>
              <Col><PopularCard/></Col>
              <Col><PopularCard/></Col>
          </Row>
        </Container>
      </main>
      </>
    );
};

MainPage.propTypes = {
    
};

export default MainPage;