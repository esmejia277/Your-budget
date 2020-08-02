import React from "react";

const Error = ({ message }) => (
  <p className="alert alert-danger error">
    <strong>{message}</strong>
  </p>
);

export default Error;
