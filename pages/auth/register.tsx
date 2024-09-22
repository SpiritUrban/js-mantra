import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { setAuthData } from "@/lib/RTK/slices/authSlice";
import React, { FormEvent } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function Register() {
  const dispatch = useDispatch();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    dispatch(setAuthData({ email, password }));

    console.log("sdsd");

    // Пример с axios

    // Используем fetch для отправки POST-запроса
    axios
      .post(
        "/api/auth/register",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Response:", response.data);
      });
  };

  return (
    <Container>
      <Card style={{ width: "25rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>Register</Card.Title>

          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;
