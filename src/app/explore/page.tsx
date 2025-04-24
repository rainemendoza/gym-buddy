import { Container, Row, Col } from 'react-bootstrap';
import { FunnelFill } from 'react-bootstrap-icons';
import TopMenu from '../../components/TopMenu';
import FooterMenu from '../../components/FooterMenu';
import ProfileCard from '../../components/ProfileCard';
import '../style.css';

// Sample profile data until database is set up
const sampleProfiles = [
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    experience: 'Intermediate',
    bio: 'Looking forward to meeting new gym buddies!',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    schedule: ['M', 'W', 'F'],
    nextSession: 'Legs',
  },
  {
    firstName: 'Sarah',
    lastName: 'Chen',
    email: 'sarah.chen@example.com',
    experience: 'Advanced',
    bio: 'Looking forward to meeting new gym buddies!',
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    schedule: ['T', 'Th', 'Su'],
    nextSession: 'Chest',
  },
  {
    firstName: 'Miguel',
    lastName: 'Rodriguez',
    email: 'miguel.r@example.com',
    experience: 'Beginner',
    bio: 'Looking forward to meeting new gym buddies!',
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    schedule: ['Sa', 'Su'],
    nextSession: 'Back',
  },
  {
    firstName: 'Emily',
    lastName: 'Taylor',
    email: 'emily.t@example.com',
    experience: 'Intermediate',
    bio: 'Looking forward to meeting new gym buddies!',
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    schedule: ['Su', 'M', 'T'],
    nextSession: 'Arms',
  },
  {
    firstName: 'David',
    lastName: 'Kim',
    email: 'david.kim@example.com',
    experience: 'Athlete',
    bio: 'Looking forward to meeting new gym buddies!',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    schedule: ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'],
    nextSession: 'Abs',
  },
];

const Explore = () => (
  <main className="bg-light min-vh-100">
    <TopMenu />

    <Container className="py-5">
      <Col className="d-flex justify-content-between mb-4">
        <div>
          <h2 className="fw-bold mb-0">Find Your Gym Partner</h2>
        </div>
        <div>
          <button type="button" className="btn btn-outline-dark">
            <FunnelFill />
          </button>
        </div>
      </Col>

      <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
        {sampleProfiles.map((profile) => (
          <ProfileCard key={profile.email} profile={profile} />
        ))}
      </Row>
    </Container>

    <FooterMenu />
  </main>
);

export default Explore;
