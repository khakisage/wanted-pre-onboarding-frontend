/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
export default function Signup() {
  const [isEnable, setIsEnabled] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  console.log("account", account);
  const validation = () => {
    if (account.email.includes("@") && account.password.length >= 8) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  //const validation = !(account.email.includes("@") && account.password.length);
  const formStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    "& fieldset": {
      border: "1px solid grey",
      "& label": {
        fontSize: "20px",
        fontWeight: "bold",
      },
      "& input": {
        width: "300px",
        height: "30px",
        margin: "5px",
        fontSize: "15px",
        border: "1px solid #afafaf",
        borderRadius: "5px",
        "&:focus": {
          outline: "none",
          border: "1px solid #e5e5e5",
          boxShadow: "0 0 5px #2ca9fd",
        },
      },
    },
  });
  const btnStyle = css({
    width: "100px",
    height: "50px",
    margin: "5px",
    backgroundColor: "lightgrey",
    border: "1px solid #e5e5e5",
    borderRadius: "5px",
    color: "black",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "grey",
      color: "white",
    },
    "&:active": {
      backgroundColor: "black",
      color: "white",
    },
  });
  return (
    <>
      <form css={formStyle}>
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
          <Button
            type="submit"
            data-testid="signup-button"
            disabled={validation}
          >
            Join
          </Button>
        </fieldset>
      </form>
    </>
  );
}
