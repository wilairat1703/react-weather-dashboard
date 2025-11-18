import profileImg from '../assets/profile.jpg';

function CardUser() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white">
      <div className="font-bold text-center mb-5">
        <p className="text-[#2389ff] text-2xl">Today's News Anchor</p>
        <p className="text-gray-800 text-xl">From: WorkpointTV</p>
      </div>
      <div className="bg-[#2389ff] border-4 border-[#2389ff] rounded-full ">
        <div className="w-32 h-32 bg-white border-white border-4 rounded-full overflow-hidden mx-auto">
          <img
            className="w-full h-full object-cover rounded-full"
            src={profileImg}
            alt="Rounded avatar"
          />
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="font-bold text-[#2389ff] text-xl">Miss. Dazy Leen</p>
        <div>
          <span className="font-bold text-gray-700">Time:</span>
          <span className="text-gray-600">11:00AM-03:00PM</span>
        </div>
      </div>
      <div className="mt-5 flex justify-evenly w-full font-bold text-center">
        <div>
          <p className="text-gray-800 text-xl">254K</p>
          <p className="text-gray-500 text-sm">Followers</p>
        </div>
        <div>
          <p className="text-gray-800 text-xl">3,567</p>
          <p className="text-gray-500 text-sm">Following</p>
        </div>
      </div>
    </div>
  );
}

export default CardUser;
