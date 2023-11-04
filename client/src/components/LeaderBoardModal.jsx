import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LeaderBoardModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>See Leader Board
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>High Scores</Modal.Title>
        </Modal.Header>
        <Modal.Body><table>
  <tr className='border border-primary'>
    <th className='border border-primary'>User Name</th>
    <th className='border border-primary'>Difficulty</th>
    <th className='border border-primary'>Score</th>
  </tr>
  <tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr>
  <tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr><tr className='border border-primary'>
    <td className='border border-primary'>User</td>
    <td className='border border-primary'>Level</td>
    <td className='border border-primary' >Score</td>
  </tr>
 
</table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LeaderBoardModal;