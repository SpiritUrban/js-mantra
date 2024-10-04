import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { setAuthData } from "@/lib/RTK/slices/authSlice";
import React, { FormEvent } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { playSound } from "@/utils";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const chackSession = async () => {
    const response = await fetch("/api/auth/check-session");
    const data = await response.json();

    if (response.ok) {
      console.log("User session:", data.user);
    } else {
      console.log("Session not found or expired");
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    dispatch(setAuthData({ email, password }));

    console.log("sdsd");

    try {
      const response = await axios.post(
        "/api/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      if (response.data.ok) {
        successToast(response.data.message);
        router.push("/auth/login");
      } else {
        errorToast(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const errorToast = (message: string) => {
    playSound("/sound/noInternet.mp3");
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const successToast = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <Container>
      <Card style={{ width: "25rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>

          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Button
        style={{ width: " 91px", marginLeft: "370px" }}
        variant="primary"
        onClick={() => {
          errorToast("the toast");
        }}
      >
        button
      </Button>

      <Button
        style={{ width: " 91px", marginLeft: "370px" }}
        variant="primary"
        onClick={() => {
          successToast("success");
        }}
      >
        Button
      </Button>

      <Button
        onClick={() => {
          chackSession();
        }}
      >
        Chack-Session
      </Button>
    </Container>
  );
}

export default Login;
