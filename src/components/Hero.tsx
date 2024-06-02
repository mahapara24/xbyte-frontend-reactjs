import Header from "./Header"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="relative top-0 h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4" // Replace with your video URL
        autoPlay
        loop
        muted
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to top right, rgba(4, 0, 41, 0.918), rgba(0, 0, 0, 0.5))",
        }}
      ></div>
      <Header />
      <div className="relative flex items-center justify-between h-full text-white z-40">
        <div className="bg-opacity-70 p-8 rounded-lg w-full mx-8 ml-0 sm:mx-8 md:mx-16 lg:ml-24 xl:ml-32">
          <h1 className="text-gray-400 text-3xl font-extrabold">
            WE ARE xBYTE.IO
          </h1>
          <div>
            <h2 className="text-white text-[40px] sm:text-5xl leading-10 lg:text-6xl font-bold sm:font-extrabold mt-4">
              Custom Product & <br /> Software Development <br /> Focused On
              Your Success
            </h2>
          </div>
          <button className="text-white bg-transparent border-4 border-purple-700 mt-10 hover:bg-purple-700 focus:ring-4 focus:ring-purple-blue-300 font-bold rounded-full text-[12px] sm:text-[15px] px-6 sm:px-9 py-3 dark:bg-transparent dark:border-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 whitespace-nowrap">
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
