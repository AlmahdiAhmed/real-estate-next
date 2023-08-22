import Image from "next/image";
import exterior from "../../../public/about/exterior.jpg";
import kitchen from "../../../public/about/kitchen.jpg";
import living from "../../../public/about/living.jpg";
import stairs from "../../../public/about/stairs.jpg";
import styles from "./style.css";
import {
  BsFillHouseGearFill,
  BsFillHouseUpFill,
  BsHouseAddFill,
  BsHouseCheckFill,
} from "react-icons/bs";
const About = () => {
  return (
    <>
      <div
        className="py-2 sm:px-5 lg:px-20 flex flex-col sm:flex-row items-center"
        id="about"
      >
        <div className="w-full sm:flex-[0.9] grid grid-cols-5 grid-rows-2 gap-1  ">
          <div className=" relative h-[200px]  col-span-3 row-span-1 ">
            <Image
              src={exterior}
              className="h-full object-cover"
              placeholder="blur"
            />
          </div>
          <div className="relative h-[200px] img col-span-2  row-span-1">
            <Image
              src={kitchen}
              className="h-full object-cover"
              placeholder="blur"
            />
          </div>
          <div className="relative h-[180px] img col-span-2  row-span-1 ">
            <Image
              src={living}
              className="h-full object-cover"
              placeholder="blur"
            />
          </div>
          <div className="relative h-[180px] img col-span-3  row-span-1">
            <Image
              src={stairs}
              className="h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="sm:flex-1 flex flex-col">
          <h1 className="px-2 text-[#8d99ae] text-2xl font-extrabold">
            About us
          </h1>
          <p className="px-2 text-[#2b2d42] text-lg font-[500]">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate
          </p>
          <p className="px-2 text-[#2b2d42] text-lg font-[500]">
            We have connection to all banks, so we can solve everything under
            one roof. We move forward and offer above standard services
          </p>
        </div>
      </div>
      <div className=" bg-gray-400 p-4">
        <h2 className="text-center font-extrabold text-2xl text-[#2b2d42]">
          All what you need
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center  py-[20px] gap-3">
          <div className="bg-[#edf2f4] w-[150px] flex flex-col justify-center items-center py-[20px] rounded-lg">
            <BsFillHouseUpFill className="text-gray-400 text-3xl" />
            <h2 className="text-[#2b2d42] text-lg font-bold">Sell your home</h2>
          </div>
          <div className="bg-[#edf2f4] w-[150px] flex flex-col justify-center items-center py-[20px] rounded-lg">
            <BsHouseCheckFill className="text-gray-400 text-3xl" />
            <h2 className="text-[#2b2d42] text-lg font-bold">Buy a home</h2>
          </div>
          <div className="bg-[#edf2f4] w-[150px] flex flex-col justify-center items-center py-[20px] rounded-lg">
            <BsHouseAddFill className="text-gray-400 text-3xl" />
            <h2 className="text-[#2b2d42] text-lg font-bold">Rent your home</h2>
          </div>
          <div className="bg-[#edf2f4] w-[150px] flex flex-col justify-center items-center py-[20px] rounded-lg">
            <BsFillHouseGearFill className="text-gray-400 text-3xl" />
            <h2 className="text-[#2b2d42] text-lg font-bold">Free marketing</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
