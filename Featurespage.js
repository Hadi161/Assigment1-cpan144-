
"use client";
import React from "react";
import Counter from "../components/Counter";
import Toggle from "../components/Toggle";
import Message from "../components/Message";

const FeaturesPage = () => {
  return (
    <div>
      <h1>Features Page</h1>
      <p>Welcome to the page where diffrent features are used.</p>
      <Counter initalValue={4} />
      <Toggle lablel="Light switch" />
      <Message text="This is a message" color="red" />
    </div>
  );
}

export default FeaturesPage;



