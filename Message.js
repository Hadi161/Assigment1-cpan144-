"use client";
import React from "react";

// Message component with props
const Message = ({ text, color }) => {
  return (
    <div style={{ color: color, margin: "8px" }}>
      <h2>Message Component</h2>
      <p>{text}</p>
    </div>
  );
};

export default Message;
