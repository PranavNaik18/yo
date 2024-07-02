import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ParentPortal = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title as="h2">Parent Portal</Card.Title>
              <Card.Text>
                Secure login for parents to monitor their children's progress, view announcements, and communicate with teachers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ParentPortal;
