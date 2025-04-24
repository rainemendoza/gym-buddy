'use client';

import { Card, Col, Badge } from 'react-bootstrap';
// eslint-disable-next-line import/extensions
import { ProfileCardData } from '@/lib/ProfileCardData';
import TooltipImage from './TooltipImage';

// Add Filter

const ProfileCard = ({ profile }: { profile: ProfileCardData }) => (
  <Col>
    <Card className="h-100 border-0 rounded-4 overflow-hidden">
      <div className="position-relative">
        {/* Green background for header */}
        <div
          style={{
            height: '75px',
            backgroundColor: '#024731',
          }}
        />

        {/* Card content - moved outside the background div */}
        <div className="px-3" style={{ marginTop: '-60px' }}>
          <div className="d-flex mb-3">
            <TooltipImage
              className="border border-3 border-white shadow-sm"
              src={profile.picture ? profile.picture : ''}
              name={profile.email}
              width={50}
              roundedCircle
            />
            <div className="ms-3 d-flex flex-column justify-content-center">
              <h5 className="mb-0 fw-bold text-white">
                {profile.firstName}
                {profile.lastName}
              </h5>
              <Badge
                pill
                bg="light"
                text="dark"
                className="mt-1 border"
                style={{
                  width: '100px',
                }}
              >
                {profile.experience}
              </Badge>
            </div>
          </div>

          <p className="text-muted small mb-3">{profile.bio}</p>

          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <div className="me-2 text-muted small fw-bold">NEXT:</div>
              <Badge bg="light" text="dark" className="border border-light-subtle py-1 px-2">
                {profile.nextSession}
              </Badge>
            </div>

            <div>
              <div className="text-muted small fw-bold mb-1">SCHEDULE:</div>
              <div className="d-flex flex-wrap gap-1">
                {['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'].map((day) => (
                  <Badge
                    key={day}
                    bg={profile.schedule.includes(day) ? 'light' : 'light-subtle'}
                    text={profile.schedule.includes(day) ? 'dark' : 'secondary'}
                    className={`border ${profile.schedule.includes(day) ? 'border-dark' : 'border-light-subtle'}`}
                    style={{
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {day.charAt(0)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Col>
);

export default ProfileCard;
