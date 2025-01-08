import snow from "../assets/snow.png";
import sun from "../assets/sun.png";
import rain from "../assets/weather.png";

function CardDays() {
  const Days = [
    { day: "Sun", image: sun, C: "15", T: "-2", bgColor: "bg-[#2389ff]", bgHover: "hover:bg-[#0174FF]", textColor:"text-white"},
    { day: "Mon", image: rain, C: "12", T: "2", bgColor: "bg-white", bgHover: "hover:bg-gray-100", textColor:"text-gray-400" },
    { day: "Tue", image: snow, C: "9", T: "3", bgColor: "bg-white", bgHover: "hover:bg-gray-100", textColor:"text-gray-400" },
    { day: "Wed", image: rain, C: "8", T: "-1", bgColor: "bg-white", bgHover: "hover:bg-gray-100", textColor:"text-gray-400" },
    { day: "Thu", image: sun, C: "5", T: "-2", bgColor: "bg-white", bgHover: "hover:bg-gray-100", textColor:"text-gray-400" },
    { day: "Fri", image: sun, C: "4", T: "-4", bgColor: "bg-white", bgHover: "hover:bg-gray-100", textColor:"text-gray-400" },
    { day: "Sat", image: snow, C: "3", T: "-3", bgColor: "bg-white", bgHover: "hover:bg-gray-100", textColor:"text-gray-400" },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
      {Days.map((Day) => (
        <div
          key={Day.day}
          className={`flex flex-col ${Day.bgColor} ${Day.bgHover} px-10 py-5 justify-center items-center rounded-2xl gap-1 shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer`}
        >
          <div>
            <img src={Day.image} alt="Weather Icon" className="w-10 sm:w-12 lg:w-14" />
          </div>
          <div className="font-bold">{Day.day}</div>
          <div className="flex gap-1">
            <span className="font-bold">{Day.C}<sup>°</sup></span>{" "}
            <span className={`${Day.textColor}`}>{Day.T}<sup>°</sup></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDays;
