import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { fieldsValidation, checkInvalidForm } from "../formValidation";
import tempLogin from "./tempLogin.json";
import "./login.css";

const Login = (props) => {
  const [invalidForm, setFormInvalid] = useState(true);
  const [fieldsValidationObj, setFieldValidation] = useState({
    email: {},
    password: {},
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputChange = (e, field) => {
    const { value } = e.target;
    const validation = fieldsValidation(field, value);

    const newValidation = { ...fieldsValidationObj };
    newValidation[field] = validation;
    setFieldValidation(newValidation);
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }

    const formValidation = checkInvalidForm(newValidation);
    setFormInvalid(formValidation);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (tempLogin?.email === email && tempLogin?.password === password) {
      console.log("hi", email, password);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="background">
      <Container>
        <h2>Log in</h2>
        <Form>
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
          <button onClick={(e) => handleLogin(e)} disabled={invalidForm}>
            Log in
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
