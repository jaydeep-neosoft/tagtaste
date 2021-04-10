import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./login.css";

const Login = (props) => {
  return (
    <div className="background">
      <Container>
        <h2>Log in</h2>
        <Form>
          <Form.Group>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button variant="primary" type="submit">
            Log in
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
