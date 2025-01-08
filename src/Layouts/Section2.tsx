import PieColor from "../components/PieColor";
import StackedAreaChart from "../components/StackedAreaChart";

function Section2() {
  return (
    <div className="w-full my-5 grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div className="col-span-1 xl:col-span-2 flex justify-center items-center bg-white rounded-2xl shadow-lg">
        <StackedAreaChart />
      </div>
      <div className="col-span-1 xl:col-span-1 flex justify-center items-center bg-white rounded-2xl  shadow-lg p-4">
        <PieColor />
      </div>
    </div>
  );
}

export default Section2;
