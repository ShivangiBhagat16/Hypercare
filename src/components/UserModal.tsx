import React from 'react';
import { User } from '../user.model';
import './UserModal.css'; 
import Image from 'react-bootstrap/Image'

// Typescript to check user modal props types
interface UserModalProps {
  selectedUser: User | null;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ selectedUser, onClose }) => {
  if (!selectedUser) return null;

  return (
    <div className="modal-overlay">
      <div className='modal-dialog'>
        <div className="modal-content d-block">
          <div className='d-flex justify-content-between'>
              <h2 className='m-0'>User Details</h2>
                <span className="close text-center" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className='card-image text-center m-4'>
            <Image src={selectedUser.avatar} roundedCircle/>
          </div>
          <p><strong>Name: </strong>{selectedUser.firstname} {selectedUser.lastname}</p>
          <p><strong>Role: </strong>{selectedUser.role}</p>
          <p><strong>Join Date: </strong>{selectedUser.join_date}</p>
          <p><strong>Description: </strong>{selectedUser.description}</p>
          <button className='btn btn-primary mt-4' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;