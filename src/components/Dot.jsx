import React from "react";

const Dot = ({ color }) => {
  return (
    <div className="">
      <div className={`h-[15px] w-[15px] rounded-full ${color}`}></div>
    </div>
  );
};

export default Dot;
