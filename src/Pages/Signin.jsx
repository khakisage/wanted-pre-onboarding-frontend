/** @jsxImportSource @emotion/react */
import React from "react";
import { useState, useEffect } from "react";
import Form from "../Components/Form";
import Button from "../Components/Button";
export default function Signin() {
  const [isEnable, setIsEnabled] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
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
  const handleSignin = async (e) => {
    e.preventDefault();
    await fetch(`${url}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: account.email,
        password: account.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.accessToken) {
          localStorage.setItem("JWT", res.accessToken);
        }
      });
  };

  return (
    <>
      <Form>
        <h1>로그인</h1>
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
              onClick={handleSignin}
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
