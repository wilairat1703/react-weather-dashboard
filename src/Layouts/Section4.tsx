import React from "react";
import CardUser from "../components/CardUser";
import Percentage from "../components/Percentage";
import TemperatureCard from "../components/TemperatureCard";

const Section4: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-4 mb-5">
      <div className="col-span-1 w-full flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg p-10">
        <CardUser />
      </div>
      <div className="col-span-1 xl:col-span-2 w-full flex">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="col-span-1 w-full justify-center items-center bg-white rounded-2xl shadow-lg p-4">
            <Percentage />
          </div>
          <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-4">
            <TemperatureCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
