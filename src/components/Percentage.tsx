import React from "react";

function Percentage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <div className="w-full text-2xl font-bold text-center">
        Overall Water Percentage
      </div>
      <div
        className="radial-progress bg-gray-100 text-[#2389ff]  size-64 flex justify-center items-center lg:size-64"
        style={
          {
            "--value": 70,
            "--size": "16rem",
            "--thickness": "2rem",
          } as React.CSSProperties
        }
        role="progressbar"
      >
        <span className="text-3xl font-bold">70%</span>
      </div>
    </div>
  );
}

export default Percentage;
