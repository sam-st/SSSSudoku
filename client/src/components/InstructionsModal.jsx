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
      <Button className="btn btn-lg btn-info instructionsModal" onClick={handleShow}>
        How to Play      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className='text-black fs-1'>How to Play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li className='fs-5 text-black'>
              Have each 3x3 square, each row, and each column have a number from 1 - 9.
            </li>
            <img src={howToPlay} className="img-fluid  card-img-top rounded" style={{ width: "40%" }} alt="site pictures"></img>
            <li className='text-black fs-5'>
              No repeat numbers allowed per row, column, or 3x3 square.
            </li>
            <img src={howNotToPlay} className="img-fluid  card-img-top rounded" style={{ width: "40%" }} alt="site pictures"></img>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-info' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default InstructionsModal;