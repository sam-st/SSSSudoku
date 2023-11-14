import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "@apollo/client";
import { QUERY_me } from "../utils/queries";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/style/Modal.css";

function LeaderBoardModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const { loading, error, data } = useQuery(QUERY_me);

  // if (loading) return <p>Please wait...</p>;
  // if (error) return <p>Sorry, could not load user data</p>;

  return (
    <>
      <Button className="btn btn-warning scoresModal " onClick={handleShow}>
        Leader Board
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Scores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
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
export default LeaderBoardModal;