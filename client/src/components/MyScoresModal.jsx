import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "@apollo/client";
import { QUERY_meOnly } from "../utils/queries";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/style/Modal.css";

import { jwtDecode } from "jwt-decode";

function MyScoresModal() {
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const token = localStorage.getItem("id_token");

    if (token) {
      try {
        const decodeToken = jwtDecode(token);
        const getUserId = decodeToken.userId;
        setUserId(getUserId);
      } catch (error) {
        console.error('Error deconding token', error);
      }
    } else {
      console.warn("Token not present");
    }
  }, []);

  const { loading, error, data } = useQuery(QUERY_meOnly, {
    variables: { userId: userId },
  });

  if (loading) return <p>Please wait...</p>;
  if (error) {
    console.error('GraphQL query error:', error);
    return <p>Sorry, could not load user data</p>;
  }

  const userScores = data.me || [];

  return (
    <>
      <Button className="btn btn-info scoresModal m-1 " onClick={handleShow}>
        See My Scores
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Scores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                {/* <th>Name</th> */}
                <th>Score</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {userScores.data.me.map((user) => (
                <tr key={user._id}>
                  {/* <td>{user.username}</td> */}
                  <td>
                    {user.gameStat && user.gameStat[0]
                      ? user.gameStat[0].score
                      : "N/A"}
                  </td>
                  <td>
                    {user.gameStat && user.gameStat[0]
                      ? user.gameStat[0].difficulty
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyScoresModal;
