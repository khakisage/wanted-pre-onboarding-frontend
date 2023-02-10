/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";
import ValidationForm from "../Components/ValidationForm";
import instance from "../\bAPI/api";
export default function Signup() {
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    if (account.email && !account.email.includes("@")) {
      setEmailError(true);
    }
    if (account.password && !account.password.length >= 8) {
      setPwError(true);
    }
    if (account.email.includes("@")) {
      setEmailError(false);
    }
    if (account.password.length >= 8) {
      setPwError(false);
    }
    if (account.email.includes("@") && account.password.length >= 8) {
      setPwError(false);
      setEmailError(false);
    }
  };
  //   const token = localStorage.getItem("JWT");
  //   setJwt(token);
  // }, []);
  // if (jwt) return <Navigate to="/todo" />;
  // const emailValidation = () => {
  //   account.email.includes("@") ? setEmailEnable(true) : setEmailEnable(false);
  // };
  // const pwValidation = () => {
  //   account.password.length >= 8 ? setPwEnable(true) : setPwEnable(false);
  // };
  // useEffect(() => {
  //   emailValidation();
  // }, [account.email]);
  // useEffect(() => {
  //   pwValidation();
  // }, [account.password]);
  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   await fetch(`${url}/auth/signup`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: account.email,
  //       password: account.password,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.status === 201) {
  //         navigate("/signin");
  //         console.log("회원가입 성공");
  //       }
  //     })
  //     .catch((err) => alert("회원가입 실패"));
  // };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (account.email.includes("@") && account.password.length >= 8) {
      instance
        .post("/auth/signup", account)
        .then((res) => {
          navigate("/signin");
        })
        .catch((err) => alert("회원가입 실패"));
    }
  };

  return (
    <>
      <Form onClick={handleSubmit}>
        <h1>회원가입</h1>
        <fieldset>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            data-testid="email-input"
            value={account.email}
            autoComplete="off"
            onChange={onChange}
          />
          <br />
          <ValidationForm>
            {account.email.includes("@")
              ? "좋아요"
              : "올바른 이메일 형식이 아닙니다!"}
          </ValidationForm>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            data-testid="password-input"
            value={account.password}
            autoComplete="off"
            onChange={onChange}
          />
          <br />
          <ValidationForm>
            {account.password.length >= 8
              ? "좋아요"
              : "올바른 비밀번호 형식이 아닙니다!"}
          </ValidationForm>
          <Button
            type="submit"
            data-testid="signup-button"
            onClick={handleSignup}
            disabled={
              account.email.includes("@") && account.password.length >= 8
                ? false
                : true
            }
          >
            Join
          </Button>
        </fieldset>
      </Form>
    </>
  );
}
