import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(`Login Username: ${loginUsername}, Login Password: ${loginPassword}`);
    // Add your login logic here
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    console.log(`Signup Username: ${signupUsername}, Signup Password: ${signupPassword}, Signup Email: ${signupEmail}`);
    // Add your sign up logic here
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <label>
              Username:
              <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login" />
          </form>
        </Col>
        <Col>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignupSubmit}>
            <label>
              Username:
              <input type="text" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
            </label>
            <input type="submit" value="Sign Up" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;