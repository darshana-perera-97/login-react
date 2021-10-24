import React from "react";
import background from "./back1.png";
import LeftText from "./LeftText";

export default function Left() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        width: "80vh",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#10151b",
        backgroundSize: "100% 100%",
      }}
    >
      <LeftText />
    </div>
  );
}
