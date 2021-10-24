import React from "react";
import SingleButton from "../Components/SingleButton";

export default function ButtonSet() {
  const btn = [
    { name: "submit", clr: "green" },
    { name: "cancel", clr: "red" },
  ];

  return (
    <div style={{ marginTop: "10px",display:"flex",justifyContent:"space-evenly"}}>
      {btn.map((val, key) => {
        return <SingleButton val={val} key={key}/>;
      })}
    </div>
  );
}
