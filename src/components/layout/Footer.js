import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            &copy; {new Date().getFullYear()} School Management System
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
