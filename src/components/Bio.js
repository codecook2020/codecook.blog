import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2)
        }}
      >
        <img
          src={profilePic}
          alt={`luz`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "50%"
          }}
        />

        <p style={{ maxWidth: 510 }}>
          喜爱deno，rust,喜欢一切酷事物, 擅长javascript + python的全栈开发者。{" "}
          {/* <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a>.{" "} */}
          &nbsp; Try making better life for the World By my code, not just
          chinese, I am earthman.
        </p>
      </div>
    );
  }
}

export default Bio;
