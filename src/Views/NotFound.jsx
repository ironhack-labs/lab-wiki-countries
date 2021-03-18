import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>You are lost my friend!</h2>
      <Link to="/">Go back home !</Link>
    </div>
  );
};

export default NotFound;
