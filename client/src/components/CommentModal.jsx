import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "@apollo/client";
import { QUERY_meThoughts } from "../utils/queries";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/style/Modal.css";

function LeaderBoardModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { loading, error, data } = useQuery(QUERY_meThoughts);

  if (loading) return <p>Please wait...</p>;
  if (error) return <p>Sorry, could not load Comments</p>;

  const comments = data.me.filter( user => user.thoughts && user.thoughts[0])

  return (
    <>
    
      <Button className="btn btn-info scoresModal m-1 " onClick={handleShow}>
        Comments
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((user) => (
                <tr key={user._id}>
                  <td>{user.thoughts[0].thoughtAuthor}</td>
                  <td>{user.thoughts[0].thoughtText}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default LeaderBoardModal;
