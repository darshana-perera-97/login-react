import React from "react";

export default function HeadingText(prop) {
  return (
    <div>
      <p
        style={{
          marginBottom: "0px",
          marginTop: "-10px",
          color: "#4eefe9",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        {prop.val1}
        <br />
        {prop.val2}
      </p>
    </div>
  );
}
