import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { isLoggedIn } from "../utils";

const Dashboard = (props) => {
  const history = useHistory();

  useEffect(() => {
    const userLoggedIn = isLoggedIn();
    if (!userLoggedIn) history.replace("/login");
  }, []);

  return (
    <div className="background">
      <Container>
        <h2>Dashboard</h2>
        {/* <Form>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => inputChange(e, "email")}
            />
            <Form.Text className=" text-danger small ml-3">
              {fieldsValidationObj.email.error}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => inputChange(e, "password")}
            />
            <Form.Text className=" text-danger small ml-3">
              {fieldsValidationObj.password.error}
            </Form.Text>
          </Form.Group>
          <Form.Text className=" text-danger small ml-3">
            {incorrectCreds}
          </Form.Text>
          <button onClick={(e) => handleLogin(e)} disabled={invalidForm}>
            Log in
          </button>
        </Form> */}
      </Container>
    </div>
  );
};

export default Dashboard;
