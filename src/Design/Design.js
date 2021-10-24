import React from "react";
import Left from "./Layouts/Left";
import Right from "./Layouts/Right";

export default function Design() {
  return (
    <div style={{ display: "flex" }}>
      <Left />
      <Right />
    </div>
  );
}
