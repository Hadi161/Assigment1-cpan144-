"use client";
import React, { useState } from "react";

// component to toggle the switch

const Toggle = ({ lablel }) => {
  // state to keep track of the status of the switch
  const [isOn, setIsOn] = useState(false);
  // function to toggle the switch
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ padding: "18px", border: "3px solid #ccc", margin: "8px" }}>
       <h2>Toggle Feature</h2>
    <p className={isOn ? "toggle-on" : "toggle-off"}>
      The switch is {isOn ? "on" : "off"}
    </p>
    <button onClick={toggleSwitch}>
      {isOn ? "Turn Off" : "Turn On"}
    </button>
  </div>
  );
};

export default Toggle;