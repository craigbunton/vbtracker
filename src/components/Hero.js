import React from "react";

import volleyball from "../assets/volleyball.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img
      className="mb-3 app-logo"
      src={volleyball}
      alt="VBTracker"
      width="120"
    />
    <h1 className="mb-4">VB Tracker</h1>

    <p className="lead">league tracking web app v 0.1.0</p>
  </div>
);

export default Hero;
