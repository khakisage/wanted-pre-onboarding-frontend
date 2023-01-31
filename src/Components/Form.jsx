/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
export default function Form({ children }) {
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
  return <form css={formStyle}>{children}</form>;
}
