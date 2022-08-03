import HeroBannerImage from "../assets/images/banner.png";

export function HeroBanner() {
  return (
    <div className="xl:mt-40  sm:mt-16 sm:ml-12 relative p-5">
      <h1 className="font-bold text-lg text-red-600 mt-5 mb-5">Fitness Club</h1>
      <strong className="text-4xl xl:text-5xl">
        Sweat, Smile <br /> and Repeat
      </strong>
      <p className="text-sm lg:text-lg leading-8 mt-6 mb-5">
        Check out the most effective exercises
      </p>
      <button
        onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
        className="bg-red-600 border-none rounded p-2 mb-4 text-white hover:bg-red-700 transition-colors duration-200"
      >
        Explore Exercises
      </button>
      <img
        className=" hidden xl:block absolute  top-[-300px] right-[100px] w-[700px] h-[900px] "
        src={HeroBannerImage}
        alt="Banner"
      />
      <p className="hidden lg:block text-red-600 font-bold text-[200px] opacity-10 mt-5">
        Exercise
      </p>
    </div>
  );
}
