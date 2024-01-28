import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Random Users Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A basic react application whrere you can search for random users and see
        their profiles details. .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-black mr-2">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-black ml-1">Akobe Peter</a>
      </p>
    </div>
  );
};

export default About;
