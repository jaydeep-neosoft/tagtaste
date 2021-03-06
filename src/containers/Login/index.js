import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { fieldsValidation, checkInvalidForm } from "../formValidation";
import { loginFn } from "../../components/Layouts/utils";
import tempLogin from "./tempLogin.json";
import "./login.css";

const Login = () => {
  const history = useHistory();

  // states
  const [invalidForm, setFormInvalid] = useState(true);
  const [fieldsValidationObj, setFieldValidation] = useState({
    email: {},
    password: {},
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectCreds, setIncorrectCreds] = useState(false);

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
      loginFn(history, email);
    } else {
      setIncorrectCreds("Incorrect Credentials");
    }
  };

  return (
    <div className="login-background">
      <div className="form-div">
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
          <Form.Text className=" text-danger small ml-3">
            {incorrectCreds}
          </Form.Text>
          <button onClick={(e) => handleLogin(e)} disabled={invalidForm}>
            Log in
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
