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
      setLoginUsername('');
      setLoginPassword('');
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
    <div className="">

      <Container className="w-100 h-100">
        <Row>
          <Col className='mt-4 mx-1 border border-white'>
            <h1 className=' text-white'>Login</h1>
            <Form onSubmit={handleLoginSubmit} autocomplete="off" >
              <Form.Group controlId="loginUsername">
                <Form.Label className='mt-3 fs-4 text-white'>Username</Form.Label>
                <Form.Control type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} autocomplete="off" autoComplete="new-password" />
              </Form.Group>
              <Form.Group controlId="loginPassword">
                <Form.Label className='mt-4 fs-4 text-white'>Password</Form.Label>
                <Form.Control type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} autoComplete="new-password" autocomplete="off" />
              </Form.Group>
              <Button className='mt-4' variant="warning" type="submit">Login</Button>
            </Form>
          </Col>
          <Col className='mt-4 mx-1 border border-white'>

            <h1 className='mt-1 fs-1  text-white'>Sign Up</h1>
            <Form onSubmit={handleSignupSubmit}>
              <Form.Group controlId="signupUsername">
                <Form.Label className='fs-4 text-white mb-0'>Username</Form.Label>
                <Form.Control type="text" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="signupPassword">
                <Form.Label className='fs-4 text-white mt-1 mb-0'>Password</Form.Label>
                <Form.Control type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="signupEmail">
                <Form.Label className='fs-4 text-white mt-1 mb-0'>Email</Form.Label>
                <Form.Control type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
              </Form.Group>
              <Button className='my-2' variant="warning" type="submit">Sign Up</Button>
            </Form>
          </Col>
        </Row>
        <div className=''>

          <div className="position-absolute bottom-0 start-0 mx-2 mb-2">
            {Auth.loggedIn() ? (
              <a href="/game" > <button className="btn btn-warning">
                Play
              </button>
              </a>
            ) : (
              <a href="/home" > <button className="btn btn-warning">
                Home
              </button>
              </a>
            )
            }

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;