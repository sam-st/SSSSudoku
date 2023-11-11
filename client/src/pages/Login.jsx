import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import "../style.css";
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';


function Login() {
  const button2Style = {
    margin: "0 10px", // Add margin between buttons
    width: "180px",
    backgroundColor: '#ddd',
    border: 'none',
    color: 'black',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '16px'
  };

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [login, { error }] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log(`Login Username: ${loginUsername}, Login Password: ${loginPassword}`);
    try {
      const { data } = await login({ variables: { username: loginUsername, password: loginPassword } });
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(`Signup Username: ${signupUsername}, Signup Password: ${signupPassword}, Signup Email: ${signupEmail}`);
    try {
      const { data } = await addUser({ variables: { username: signupUsername, password: signupPassword, email: signupEmail } });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Login</h1>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="loginUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </Form.Group>
            <a href="/Comment" className="btn" style={button2Style}>
                Login
              </a>
          </Form>
        </Col>
        <Col>
          <h1>Sign Up</h1>
          <Form onSubmit={handleSignupSubmit}>
            <Form.Group controlId="signupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="signupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="signupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
            </Form.Group>
            <a href="/Comment" className="btn" style={button2Style}>
                Sign Up
              </a>


          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
