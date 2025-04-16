'use client';

import { Container, Card, Form, Image, Row, Col, Dropdown } from 'react-bootstrap';
import TopMenu from '../../components/TopMenu';
import ExerciseButton from '../../components/ExerciseButton';

export default function ProfilePage() {
  return (
    <main>
      <TopMenu />

      <Container className="d-flex flex-column align-items-center mt-5">
        <Card style={{ width: '100%', maxWidth: '500px' }} className="shadow p-4 bg-white">
          <div className="row">
            <div className="col">
              <h1 className="text-2xl font-bold mb-3">My Profile</h1>

              <Form>
                <Form.Group controlId="username" className="mb-3">

                  <Form.Control type="text" placeholder="Username" />

                </Form.Group>

                <Form.Group controlId="userId" className="mb-3">

                  <Form.Control type="text" placeholder="User ID" />

                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </div>
            <div className="col">
              <div className="text-center mb-4">
                <Image src="/image.png" alt="Logo" fluid className="logo" width="90%" />
              </div>
            </div>
          </div>
        </Card>

        {/* New Schedule Card */}
        <Card className="w-100 shadow p-4 bg-white mt-5">
          <h2 className="mb-4">Schedule</h2>
          <Row className="text-center">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <Col key={day}>
                <Card className="mb-3">
                  <Card.Body>{day}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h1 className="text-2xl font-bold mb-3">Filters</h1>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Exercises
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Dumbbell Curls</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Pull-Ups</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Running</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <ExerciseButton label="Push-Ups" />
              <ExerciseButton label="Bench" />
            </div>
            <div className="col">
              <ExerciseButton label="Squat" />
              <ExerciseButton label="Curls" />
            </div>
          </div>
        </div>

      </Container>
    </main>
  );
}
