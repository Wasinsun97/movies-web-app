import React from "react";

const Box = ({ children }) => {
  return (
    <div className="shadow-cyan-800 shadow-xl bg-white text-gray-700 rounded-lg p-14">
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

export default Box;
