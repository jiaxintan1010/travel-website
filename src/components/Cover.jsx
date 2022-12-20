import React from "react";
import Button from "./Button";
import "./Cover.css";

function Cover() {
  return (
    <div className="cover-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="cover-btn-container">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          Get Started
        </Button>
        <Button buttonStyle="btn--primary" buttonSize="btn--large">
          Watch Trailer
          <i class="fa-regular fa-circle-play"></i>
        </Button>
      </div>
    </div>
  );
}

export default Cover;
