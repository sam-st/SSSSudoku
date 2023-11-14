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

  const { loading, error, data } = useQuery(QUERY_me);
  console.log(data);
  if (loading) return <p>Please wait...</p>;
  if (error) return <p>Sorry, could not load user data</p>;

  // Sorts users by score in leading order from highest to lowest
  const LeaderBoardUsers = data.me.filter(
    (user) => user.gameStat && user.gameStat[0]
  );
  const sortedLeaderBoardUsers = LeaderBoardUsers.slice().sort((high, low) => {
    const scoresHigh = high.gameStat[0].score;
    const scoresLow = low.gameStat[0].score;
    return scoresLow - scoresHigh;
  });

  return (
    <>
      <Button className="btn btn-warning scoresModal " onClick={handleShow}>
        LeaderBoard
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leading Scores</Modal.Title>
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
              {sortedLeaderBoardUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.gameStat && user.gameStat[0].score}</td>
                  <td>{user.gameStat && user.gameStat[0].difficulty}</td>
                </tr>
              ))}
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
