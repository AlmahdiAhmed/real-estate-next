import Slider from "./slider/page";
const TopOffer = () => {
  return (
    <div className="bg-[#2b2d42] px-10 lg:px-[100px]" id="offers">
      <div className="">
        <h1 className="py-3 text-[#8d99ae] text-2xl font-extrabold">
          Top Offers
        </h1>
        <p className="text-lg text-[#edf2f4] pb-2">
          Fulfill your career dreams, see our top apartments and houses with the
          best price
        </p>
        <hr className="w-[20%] h-[2px] rounded-sm bg-[#d90429] outline-none border-none" />
      </div>
      <Slider />
    </div>
  );
};
export default TopOffer;
