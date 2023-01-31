/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";
export default function Signup() {
  const [isEnable, setIsEnabled] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const validation = () => {
    if (account.email.includes("@") && account.password.length >= 8) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };
  useEffect(() => {
    validation();
  });
  const url = `https://pre-onboarding-selection-task.shop`;
  const handleSignup = async (e) => {
    e.preventDefault();
    await fetch(`${url}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: account.email,
        password: account.password,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/signin");
          console.log("회원가입 성공");
        }
      })
      .catch((err) => alert("회원가입 실패"));
  };

  return (
    <>
      <Form>
        <h1>회원가입</h1>
        <fieldset>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            data-testid="password-input"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <br />
          {isEnable ? (
            <Button
              type="submit"
              data-testid="signup-button"
              onClick={handleSignup}
            >
              Join
            </Button>
          ) : (
            <Button type="submit" data-testid="signup-button" disabled>
              Join
            </Button>
          )}
        </fieldset>
      </Form>
    </>
  );
}
