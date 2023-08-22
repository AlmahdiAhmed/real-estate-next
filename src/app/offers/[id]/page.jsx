import { items } from "../data";
import Image from "next/image";
const page = ({ params }) => {
  const selected = params.id - 1;

  const item = items[selected];
  const { url, title, desc, kitchen, living, stairs } = item;
  return (
    <div className="mt-[50px] pb-[30px] flex flex-col px-3 justify-center sm:flex-row items-center">
      <div className="grid w-full sm:flex-[0.9] h-[300px] sm:h-[350px] grid-cols-5 grid-rows-2 gap-1">
        <div className="relative w-full h-[200] col-span-3 row-span-1 ">
          <Image src={url} className="h-full object-cover" fill={true} />
        </div>
        <div className="relative w-full h-[200] col-span-2 row-span-1 ">
          <Image src={kitchen} className="h-full object-cover" fill={true} />
        </div>
        <div className="relative w-full  h-[200] col-span-2 row-span-1 ">
          <Image src={living} className="h-full object-cover" fill={true} />
        </div>
        <div className="relative w-full h-[200] col-span-3 row-span-1">
          <Image src={stairs} className="h-full object-cover" fill={true} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-1 py-3 sm:px-5">
        <h1 className="text-2xl font-extrabold text-[#8d99ae]">{title}</h1>
        <p className="text-[#2b2d42] text-lg">{desc}</p>
      </div>
    </div>
  );
};
export default page;
