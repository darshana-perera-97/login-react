import React from "react";

export default function SingleButton(prop) {
  const { name, clr } = prop.val;
  console.log(clr);
  return (
    <button
      style={{
        textAlign: "center",
        color:"white",
        backgroundColor:  clr,
        borderRadius: "15px",
        border: "2px solid white",
        padding: " 2px 10px",
      }}
    >
      {name}
    </button>
  );
}
