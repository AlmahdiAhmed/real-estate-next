"use client";
import { BsBuildingsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [linksShow, setLinksShow] = useState(false);
  const links = [
    {
      title: "Home",
      href: "home",
    },
    {
      title: "About",
      href: "about",
    },
    {
      title: "Offers",
      href: "offers",
    },
    {
      title: "Contact us",
      href: "contact",
    },
  ];
  return (
    <div className="section navbar">
      <nav className="bg-[#edf2f4] fixed top-0 left-0 w-full h-[50px] z-10 px-8 flex justify-between items-center shadow-lg">
        <div className="h-full">
          <Link
            smooth={true}
            to="home"
            className="h-full cursor-pointer flex items-center justify-center text-[30px] text-[#2b2d42]"
          >
            <BsBuildingsFill />
          </Link>
        </div>
        <div className={`hidden sm:flex justify-center items-center h-full`}>
          {/* desktop nav */}
          {links.map((link) => (
            <Link
              className={`cursor-pointer h-full flex items-center mx-1 p-1 text-[19px] text-[#2b2d42] transition-all hover:text-[#d90429]
               
              `}
              to={link.href}
              key={link.title}
              smooth={true}
              offset={-50}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div
          className="flex h-full items-center text-[23px] text-[#2b2d42] sm:hidden"
          onClick={() => {
            setLinksShow(!linksShow);
          }}
        >
          <FiMenu />
        </div>
        {/* mobile nav */}
        <div
          className={`flex absolute top-[50px] right-0 bg-[#8d99ae] flex-col w-full px-2 py-1 transition-all hover:text-[#d90429] ${
            linksShow ? "" : "translate-x-full"
          } transition-all sm:hidden`}
        >
          {links.map((link) => (
            <Link
              className={`h-full flex w-full justify-center items-center mx-1 p-1 text-[19px] text-[#2b2d42] 
               
              `}
              onClick={() => setLinksShow(false)}
              to={link.href}
              key={link.title}
              smooth={true}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
