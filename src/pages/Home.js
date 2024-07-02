import React from 'react';
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  return (
    <Container className="my-5">
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sahyadri.edu.in/2021-22/images/Sahyadri%20Web%20Banner%20New%20Campus.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our School</h3>
            <p>Providing quality education for a brighter future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3303/2018/8/9/Sahyadri-Mech-Tech-Lab-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Explore Our Programs</h3>
            <p>Discover a wide range of academic and extracurricular activities.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://sahyadri.edu.in/2021-22/images/mega-menu/food_court.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Stay Updated</h3>
            <p>Get the latest news and updates from our school community.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Welcome Section */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Welcome to the School Management System</h1>
              <p className="col-md-8 fs-4">
                Overview of the school, mission statement, upcoming events, and recent news.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Feature Cards Section */}
      <Row className="justify-content-center">
        <CardGroup className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Academic Programs</Card.Title>
              <Card.Text>
                Explore our diverse academic programs designed to nurture talent and innovation.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Events and Activities</Card.Title>
              <Card.Text>
                Stay updated with upcoming events, competitions, and cultural activities.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>News and Announcements</Card.Title>
              <Card.Text>
                Read the latest news and announcements from our school community.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>

      {/* About Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="p-4 mb-4 bg-light rounded-3">
            <h2 className="display-6">About Our School</h2>
            <p className="col-md-8 fs-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris ac sem porta
              efficitur.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
