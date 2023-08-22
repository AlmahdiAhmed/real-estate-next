import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
const Footer = () => {
  const footerItems = [
    {
      title: "Company",
      links: [
        {
          link: "About Us",
          href: "#",
        },
        {
          link: "Our Services",
          href: "#",
        },
        {
          link: "Privacy Policy",
          href: "#",
        },
      ],
    },
    {
      title: "Get Help",
      links: [
        {
          link: "FAQ",
          href: "#",
        },
        {
          link: "Returns",
          href: "#",
        },
        {
          link: "Payment Options",
          href: "#",
        },
      ],
    },
  ];
  return (
    <div
      className="flex justify-center bg-[#2b2d42] px-5 sm:px-[70px] lg:px-[200px]"
      id="contact"
    >
      <div className="flex flex-col w-full sm:flex-row justify-between items-start bg-[#2b2d42] flex-wrap py-6  ">
        {footerItems.map((item) => {
          return (
            <div className="mb-3">
              <h2 className="text-2xl pt-1 text-[#edf2f4]">{item.title}</h2>
              <hr className="h-[2px] border-none outline-none rounded w-[40%] bg-[#d90429]" />
              {item.links.map((link) => {
                return (
                  <div className="flex flex-col pt-1 text-[#8d99ae] transition-all hover:text-[#d90429]">
                    <Link href={link.href}>{link.link}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div>
          <h2 className="text-2xl py-1 text-[#edf2f4]">Follow Us</h2>
          <hr className="h-[2px] border-none outline-none rounded w-[40%] bg-[#d90429]" />
          <div className="flex gap-2 pt-1 text-[#8d99a">
            <Link href="#">
              <FaFacebook className="text-[#8d99ae] transition-all hover:text-[#d90429] py-1 text-3xl" />
            </Link>
            <Link href="#">
              <BsTwitter className="text-[#8d99ae] transition-all hover:text-[#d90429] py-1 text-3xl" />
            </Link>
            <Link href="#">
              <AiOutlineInstagram className="text-[#8d99ae] transition-all hover:text-[#d90429] py-1 text-3xl" />
            </Link>
            <Link href="#">
              <BiLogoLinkedin className="text-[#8d99ae] transition-all hover:text-[#d90429] py-1 text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
