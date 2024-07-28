import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";


interface RewardModalProps {
  show: boolean;
  onHide: () => void;
}

const RewardModal: React.FC<RewardModalProps> = (props) => {
  return (
    <Modal
      data-bs-theme="dark"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>

        <Image
          src="/img/medals/cum-worker.webp"
          alt="JS Mantra"
          className="test"
          width={1000}
          height={1000}
          priority
          style={{
            borderRadius: "3rem",
          }}
        />

        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RewardModal;
