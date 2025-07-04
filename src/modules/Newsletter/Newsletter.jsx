import React from "react";
import "./Newsletter.css";
import newsletterImg from "../assets/newsletter.jpg"; // if image is in src

function Newsletter() {
  return (
    <div
      className="newsletter"
      style={{
        backgroundImage: `url(${newsletterImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Get Updated On Gmail</h1>
      <p>Subscribe To Newsletter</p>
      <div className="input">
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
