import howToPlay from '../assets/howtoplay.png';
import howNotToPlay from '../assets/hownottoplay.png';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/style/Modal.css";


function InstructionsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="instructionsModal" onClick={handleShow}>
        How to Play      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              Have each 3x3 square, each row, and each column have a number from 1 - 9.
            </li>
            <img src={howToPlay} className="img-fluid  card-img-top rounded" style={{ width: "40%" }} alt="site pictures"></img>
            <li>
              No repeat numbers allowed per row, column, or 3x3 square.
            </li>
            <img src={howNotToPlay} className="img-fluid  card-img-top rounded" style={{ width: "40%" }} alt="site pictures"></img>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InstructionsModal;