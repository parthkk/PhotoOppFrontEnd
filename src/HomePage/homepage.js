import React from "react";

// the homepage component
function Homepage() {
  return (
    <div>
      <h1>Welcome to my homepage!</h1>
      <p>This is where you will find some information about me and my work.</p>
      <img
        src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
        alt="My dog"
        style={{ float: "right" }}
      />
    </div>
  );
}

export default Homepage;
