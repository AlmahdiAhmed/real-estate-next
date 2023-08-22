import { items } from "./data";
import Image from "next/image";
import Link from "next/link";
const Offers = ({ params }) => {
  return (
    <div className="pt-[50px]">
      <div className="relative h-[130px]">
        <Image
          className="object-cover object-center "
          src="https://images.pexels.com/photos/3709361/pexels-photo-3709361.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill
        />
        <div className="bg-black flex items-center pl-[50px]  opacity-[0.7] absolute w-full h-full">
          <h1 className="text-[#edf2f4] text-3xl font-extrabold">Properties</h1>
        </div>
      </div>
      <div className="py-[50px] px-1 gap-2 flex flex-wrap justify-center">
        {items.map((item) => {
          const { id, url, title, desc } = item;
          return (
            <div className="flex rounded-md flex-col border-[#8d99ae] w-[320px] relative border-[1px] p-2">
              <div className="relative w-full h-[200px] rounded-md">
                <Image
                  src={url}
                  fill
                  alt="real estate"
                  className="rounded-md"
                />
              </div>
              <div className="w-full pt-2">
                <h1 className="text-[#2b2d42] font-bold">{title}</h1>
                {/* <p>{desc}</p> */}
                <Link
                  href={`/offers/${id}`}
                  className="text-[#8d99ae] hover:text-[#d90429]"
                >
                  Show details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Offers;
