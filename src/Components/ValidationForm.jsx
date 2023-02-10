/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ValidationForm({ children }) {
  const style = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10px",
    width: "100%",
    margin: "0 auto",
    padding: "0",
    color: "red",
    fontSize: "8px",
  });
  return <div css={style}>{children}</div>;
}
