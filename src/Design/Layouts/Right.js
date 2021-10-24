import React from "react";
import HeadingText from "../Components/HeadingText";
import FormSet from "./FormSet";

export default function Right() {
  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
    >
      <div style={{ marginTop: "30px",marginBottom:"35px" }}>
        <HeadingText val1={"Welcome"} val2={"to Web Site"} />
      </div>
      <FormSet />
    </div>
  );
}
