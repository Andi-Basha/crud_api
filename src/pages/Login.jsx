import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuthContext from "../lib/hooks/useAuthContext";
import { useValidateForm } from "../lib/hooks/useValidateForm";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { formError, checkIfInputsAreEmpty } = useValidateForm();

  const { login, loginError } = useAuthContext();

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkIfInputsAreEmpty(formData.username, formData.password)) return;

    login(formData);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="loginPage">
        <div className="p-3">
          <div className="credentials">
            <p>
              Username: <b>kminchelle</b>{" "}
            </p>
            <p>
              Password: <b>0lelplR</b>
            </p>
          </div>
        </div>
        {formError && (
          <div className="alert alert-danger" role="alert">
            {formError}
          </div>
        )}
        {loginError && (
          <div className="alert alert-danger" role="alert">
            {loginError}
          </div>
        )}
        <div className="loginCard">
          <h1>Log In :</h1>
          <Form.Group className="mb-3">
            <Form.Label>
              Username <span className="red">*</span>
            </Form.Label>
            <Form.Control
              type="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Password <span className="red">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
