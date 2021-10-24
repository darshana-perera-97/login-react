import React from "react";
import HeadingText from "../Components/HeadingText";
import FormSet from "./FormSet";
import ButtonSet from "./ButtonSet";
import IconSet from "../Components/IconSet";

export default function Right() {
  const lbls = ["First Name", "Last Name", "User Name", "Password"];

  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center",marginBottom:"auto",marginTop:"auto" }}
    >
      <div style={{ marginTop: "35px", marginBottom: "35px" }}>
        <HeadingText val1={"Welcome"} val2={"to Web Site"} />
      </div>
      <div
        style={{
          backgroundColor: "#939191",
          width: "50vh",
          padding: "30px",
          borderRadius: "25px",
        }}
      >
        {lbls.map((val, key) => {
          return <FormSet val={val} key={key} index={key} />;
        })}
        <ButtonSet />
      </div>
      <IconSet />
    </div>
  );
}
