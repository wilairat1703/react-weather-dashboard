import location from "../assets/location.png";
import sun from "../assets/sun.png";
import weater from "../assets/weather.png";
function TemperatureCard() {
  return (
    <>
      <div className="row-span-1  bg-[#2389ff] flex justify-around items-center p-4 rounded-2xl shadow-lg">
        <div>
          <img src={sun} alt="Weather Icon" className="w-28 sm:w-24 lg:w-36" />
        </div>
        <div className="w--full flex flex-col text-white ">
          <p className="text-6xl font-bold">25°</p>
          <p className="text-3xl font-bold">Sunny</p>
          <div className="flex gap-1 mt-1">
            <img src={location} alt="Location" className="w-5 " />
            <p className="text-sm">Khon Kaen</p>
          </div>
        </div>
      </div>
      <div className="row-span-1  bg-[#fdb636] flex justify-around items-center p-4 rounded-2xl shadow-lg">
        <div>
          <img
            src={weater}
            alt="Weather Icon"
            className="w-28 sm:w-24 lg:w-36"
          />
        </div>
        <div className="w--full flex flex-col text-white ">
          <p className="text-6xl font-bold">20°</p>
          <p className="text-3xl font-bold">Rainy</p>
          <div className="flex gap-1 mt-1">
            <img src={location} alt="Location" className="w-5 " />
            <p className="text-sm">Khon Kaen</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemperatureCard;
