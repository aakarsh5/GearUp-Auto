import React from "react";
import "./Head.css";
import file from "../assets/materials/file.mp4";

function Head() {
  return (
    <div className="main">
      <video src={file} autoPlay loop muted />

      <div className="left">
        {/* <h2>Where Old Meet Gold</h2> */}
        {/* <h2>Driving Memories Forward</h2> */}
      </div>

      <div className="bottom">
        <h2>Where Every Parts Tells A Story</h2>
      </div>
    </div>
  );
}

export default Head;
