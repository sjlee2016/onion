import React from 'react';
import PropTypes from 'prop-types';
import OnionImage from "../images/onion.jpg"
import {Card, Button} from 'react-bootstrap';
const PopularCard = props => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={OnionImage} style={{ objectFit: 'none', marginTop: '10px' }} />
        <Card.Body>
          <Card.Title>Item name</Card.Title>
          <Card.Text>
            Some quick text to describe the item. stored in db 
          </Card.Text>
          <Button variant="primary">Read</Button>
        </Card.Body>
      </Card>
    );
};

PopularCard.propTypes = {
    
};

export default PopularCard;