"use client";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-[url('../../public/hero.jpg')] bg-fixed bg-cover bg-no-repeat bg-center h-[100vh] w-full flex justify-center items-end "
    >
      <div className="bg-[#2b2d42] mb-10 mx-3 p-2 rounded-xl flex flex-col items-center">
        <h1 className="text-[#8d99ae] py-2 text-center text-xl font-extrabold">
          Modern Living for everyone
        </h1>
        <p className="text-lg pb-2 font-bold text-[#edf2f4]">
          Get your complete sale and purchase real estate services.
        </p>
        <button className="bg-[#d90423] px-2 py-[3px] rounded-xl w-fit outline-none border-none hover:bg-[#edf2f4] transition-all">
          <Link
            className="h-full w-full text-[#edf2f4] hover:text-[#2b2d42] transition-all"
            to="offers"
            smooth={true}
            offset={-50}
          >
            Top Offers
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Hero;
