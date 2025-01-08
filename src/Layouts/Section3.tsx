import React from "react";
import UserTable from "../components/UserTable";

const Section3: React.FC = () => {
  return (
    <>
      <div className="flex text-start w-full font-bold text-xl my-4 sm:text-xl lg:text-2xl">
        Average Temperature for Each Month
      </div>
      <UserTable />
    </>
  );
};

export default Section3;
