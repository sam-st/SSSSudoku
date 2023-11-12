import { useState } from 'react';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/style/Modal.css";
function MyScoresModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn btn-warning scoresModal "onClick={handleShow}>See My Scores
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>My Scores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Score</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>

        </tr>
      </tbody>
    </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyScoresModal;