import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { User } from "../user.model";

// Typescript to check user props types
interface UserCardProps {
    users: User[];
    onOpen: (id: string) => void;
  }

const UserCard: React.FC<UserCardProps> = ({users, onOpen}) => {
    return (
        <Row xs={2} md={5} className="g-4">
        {
          users.map(user => 
            <Col key={user.id} className='text-center'>
              <Card className=''>
                <div className='card-image p-4 bg-primary'><Image src={user.avatar} roundedCircle/></div>
                <div className='abc'>
                <Card.Body className='bg-white'>
                  <Card.Title>{user.firstname}</Card.Title>
                  <Card.Title>{user.lastname}</Card.Title>
                  <Button variant="primary" className='mt-3 px-4' onClick={() => onOpen(user.id)}>View More</Button>
                </Card.Body>
                </div>
              </Card>
              </Col>
          ) 
        }
      </Row>
    );
}

export default UserCard;