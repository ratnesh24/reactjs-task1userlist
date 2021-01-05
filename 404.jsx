import React from "react";
import { Link } from "react-router-dom";

class Error404 extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Error 404</h1>
        <p style={{ textAlign: "center" }}>
          Content not...
          <br />
          <br />
          <Link to="/" className="btn text-white">
            Go to Home{" "}
          </Link>
        </p>
      </div>
    );
  }
}
export default Error404;
