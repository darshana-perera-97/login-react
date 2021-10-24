import React from "react";

export default function FormSet(prop) {
  return (
    <div>
      <form style={{ textAlign: "left" }}>
        <label
          style={{
            border: "none",
            width: "100%",
            padding: "5px 0px",
            margin: "2px 0px",
            boxSizing: "border-box",
            backgroundColor: "#939191",
            fontWeight:"bold"
          }}
        >
          {prop.val}
        </label>
        <br />
        <input
          type="text"
          name="fname"
          style={{
            border: "none",
            backgroundColor: "#939191",
            borderBottom: "2px solid #02635f",
            boxSizing: "border-box",
            width: "100%",
            marginBottom:"20px"
          }}
        />
        <br />
      </form>
    </div>
  );
}
