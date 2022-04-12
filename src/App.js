// npm config set legacy-peer-deps true
// npm i web-vitals --save-dev

import "./App.css";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.init";
import { Button, Form } from "react-bootstrap";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePassBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
       
        const user1 = userCredential.user;
        console.log(userCredential);
        console.log(user1);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <div className="registration container w-50 my-5 py-5 mx-auto">
        <h2 className="text-primary">Please Register!! </h2>
        <Form className="" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted ">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassBlur}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
