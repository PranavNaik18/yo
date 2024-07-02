import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const StudentPortal = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center p-4 bg-light">
            <Card.Body>
              <Card.Title as="h2">Student Portal</Card.Title>
              <Card.Text>
                Secure login for students to view schedules, grades, assignments, and announcements.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentPortal;
