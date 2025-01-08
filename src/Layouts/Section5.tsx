import CalenderCard from "../components/CalenderCard";
import CustomBarChart from "../components/CustomBarChart";

function Section5() {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-4 my-4">
      <div className="col-span-1 xl:col-span-2 w-full flex bg-white rounded-2xl shadow-lg pt-10 pb-10">
        <CustomBarChart />
      </div>
      <div className="col-span-1 xl:col-span-1 flex justify-center items-center bg-white rounded-2xl shadow-lg">
        <CalenderCard/>
      </div>
    </div>
  );
}

export default Section5;
