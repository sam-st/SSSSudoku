import { useState } from 'react';
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
        <Modal.Body><table className='myTable'>
  <tr className='border border-primary'>
    <th className='border border-primary'>Date</th>
    <th className='border border-primary'>Difficulty</th>
    <th className='border border-primary'>Score</th>
  </tr>
  <tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr>
  <tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>Date</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr>
</table>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyScoresModal;