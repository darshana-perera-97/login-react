import React from "react";

export default function IconSet() {
  const iconLinks = [
    {
      dis: "google",
      link: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    },
    {
      dis: "facebook",
      link: "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png",
    },
    {
      dis: "twiter",
      link: "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png",
    },
    {
      dis: "apple Id",
      link: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#939191",
        marginTop: "25px",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px",
      }}
    >
      <p style={{ marginBottom: "auto", marginTop: "auto", color: "white" }}>
        Login With
      </p>
      {iconLinks.map((val, key) => {
        return (
          <img
            alt={val.dis}
            src={val.link}
            width="30"
            height="30"
            key={key}
          ></img>
        );
      })}
    </div>
  );
}
