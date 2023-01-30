/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button({ children, onClick, disabled }) {
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
    <button css={btnStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
