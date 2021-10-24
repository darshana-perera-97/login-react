import React from "react";
import ReactLogo from "../Components/ReactLogo";
import HeadingText from "../Components/HeadingText";

export default function LeftText() {
  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
    >
      <ReactLogo />
      <p
        style={{
          color: "white",
          fontFamily: "Dancing Script",
          fontSize: "25px",
          marginTop: "-20px",
        }}
      >
        Learnig Web Design with HTML
      </p>
      <HeadingText val1={ "WEB UI DESIGN"} val2={ "WITH REACT"}/>
      <button
        style={{
          color: "#10151b",
          backgroundColor: "#4eefe9",
          borderColor: "#4eefe9",
          borderRadius: "25px",
          padding: "5pz 10px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
