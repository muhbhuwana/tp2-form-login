import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TimeoutModal = ({ showModal }) => {
  return <Modal isOpen={showModal} toggle={false} keyboard={false} backdrop="static">
    <ModalHeader>Session Timeout!</ModalHeader>
    <ModalBody>
      Your session is about to expire in 5 seconds due to inactivity. You will be redirected to the login page.
    </ModalBody>
    <ModalFooter>
      
      <Button color="danger" >Stop</Button>
    </ModalFooter>
  </Modal>
}

export default TimeoutModal;