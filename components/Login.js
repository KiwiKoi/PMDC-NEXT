import React, { useState } from "react";

import { useRouter } from "next/router";
import { Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push("/map");
  };

  return (
    <div className="flex-container">
      <img src="landing.jpg" />{" "}
      <Card className="form-card">
        <Form onSubmit={(e) => handleOnClick(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail({ email: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPassword({ password: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
