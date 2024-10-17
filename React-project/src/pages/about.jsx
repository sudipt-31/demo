import React from "react";
import CardPages from "./CardPages";
// import Card from "../components/Card";
const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-7">
      <h2 className="text-white text-center text-2xl mb-5">About Us</h2>
      <div className="flex justify-center items-center flex-wrap">
        <CardPages />
      </div>
    </div>
  );
};

export default About;
