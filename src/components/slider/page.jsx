"use client";
import Image from "next/image";
import { useState } from "react";
import {
  BsArrowRightSquare,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./style.scss";
import Link from "next/link";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      url: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: 1,
      title: "Enjoy this luxury mansion with a swimming pool",
    },
    {
      url: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: 2,
      title: "A unique modern house with garage perfect for a small family",
    },
    {
      url: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: 3,
      title: "Enjoy this luxurious villa with a sea view",
    },
    {
      url: "https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: 4,
      title: "For green lovers. A modern looking house surrounded with nature",
    },
  ];
  const next = () => {
    if (index == slides.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prev) => prev + 1);
  };
  const prev = () => {
    if (index == 0) {
      setIndex(slides.length - 1);
      return;
    }
    setIndex((prev) => prev - 1);
  };
  return (
    <div className="flex justify-center items-center w-full relative py-[30px]">
      <div onClick={prev}>
        <BsChevronLeft className="text-[#8d99ae] text-lg font-extrabold mr-2" />
      </div>
      <div
        className="slide_container relative w-[70%] rounded-xl h-[250px] sm:w-[50%] sm:h-[280px] bg-cover bg-center bg-no-repeat duration-500"
        style={{ backgroundImage: `url(${slides[index].url})` }}
      >
        <div className="w-full h-full items-end flex">
          <div className="p-2 w-full flex flex-col items-center text-xl text-[#8d99ae]">
            <p>{slides[index].title}</p>
            <button>
              <Link
                href={`offers/${index + 1}`}
                className="text-[#edf2f4] transition-all hover:text-[#d90429]"
              >
                More details
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div onClick={next}>
        <BsChevronRight className="text-[#8d99ae] ml-2 font-extrabold" />
      </div>
    </div>
  );
};
export default Slider;
