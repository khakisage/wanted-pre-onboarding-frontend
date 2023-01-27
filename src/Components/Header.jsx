/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function Header() {
  const header = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "left",
    padding: "0 20px",
    height: "60px",
    backgroundColor: "white",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  });
  return (
    <div css={header}>
      <button>회원가입</button>
      <button>로그인</button>
      <button>todo</button>
    </div>
  );
}
