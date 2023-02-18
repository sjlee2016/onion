import React from 'react';
import PropTypes from 'prop-types';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
  
import OnionImage from "../images/onion.jpg"
import { Container, Row, Col, Card,Button,ListGroup } from 'react-bootstrap';
const PostContent = props => {
    return (
        <>
        <Card style={{ width: '30rem' }}>
            <Container>
<Row className="px-4">
    <Col sm={7}>
        <img src={OnionImage}  style={{  marginTop: '10px' }} class="card-img-top embed-responsive-item" alt="tree"/>
     </Col> 
     <Col sm={5} >
     <button class="btn btn-primary" style={{ marginRight: 5, marginTop: 30, marginBottom: 5 }}>
    Buy
  </button>
     </Col>  
     </Row>
     </Container>
        <Card.Body>
          <Card.Title>Test Item Test Item</Card.Title>
          <Card.Text>@sjlee2016 3 hours ago</Card.Text>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id pellentesque enim, ut volutpat felis. In a orci id leo malesuada varius. Vivamus varius fringilla diam, at commodo magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id lorem non augue egestas venenatis at ut erat. Nam rhoncus a massa eget tincidunt. Donec mattis faucibus dolor sit amet porta. Morbi auctor massa vel consequat fringilla. Maecenas vel dolor eget elit blandit dictum id in ipsum. Aliquam erat volutpat. Donec tempus ligula vitae enim posuere sollicitudin. Praesent vulputate pharetra orci, quis aliquam arcu luctus et. Pellentesque neque eros, tincidunt nec maximus quis, facilisis et massa.
</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Comments</ListGroup.Item>
        </ListGroup>
      </Card>
          <MDBContainer  style={{ maxWidth: "1000px" }}>
          <MDBRow>
            <MDBCol md="8" lg="6">
              <MDBCard
                className="shadow-0 border"
                style={{ backgroundColor: "#f0f2f5" }}
              >
                <MDBCardBody>
                  <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label="+ Add a note" />
    
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <p>Type your note, and hit enter to add it</p>
    
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                            alt="avatar"
                            width="25"
                            height="25"
                          />
                          <p className="small mb-0 ms-2">Martha</p>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <p className="small text-muted mb-0">Upvote?</p>
                          <MDBIcon
                            far
                            icon="thumbs-up mx-2 fa-xs text-black"
                            style={{ marginTop: "-0.16rem" }}
                          />
                          <p className="small text-muted mb-0">3</p>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  </MDBRow>
                  </MDBContainer>
                  </>
    );
};

PostContent.propTypes = {
    
};

export default PostContent;