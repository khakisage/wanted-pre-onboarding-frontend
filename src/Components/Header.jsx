/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const header = css({
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "left",
    padding: "0 20px",
    height: "60px",
    backgroundColor: "white",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  });
  const moveToSignup = () => {
    navigate("/signup");
  };
  const moveToSignin = () => {
    navigate("/signin");
  };
  const moveToTodo = () => {
    navigate("/todo");
  };
  const logout = () => {
    localStorage.removeItem("JWT");
    navigate("/");
  };

  return (
    <div css={header}>
      <Button onClick={moveToSignup}>회원가입</Button>
      {localStorage.getItem("JWT") ? (
        <Button onClick={logout}>로그아웃</Button>
      ) : (
        <Button onClick={moveToSignin}>로그인</Button>
      )}
      <Button onClick={moveToTodo}>todo</Button>
    </div>
  );
}
