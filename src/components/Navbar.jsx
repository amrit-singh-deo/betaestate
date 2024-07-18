<<<<<<< HEAD
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { Divide as Hamburger } from "hamburger-react";
import { MdOutlineSupportAgent as SupportAgent } from "react-icons/md";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MenuList } from "../components/index";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const onClickNav = contextSafe((toggled) => {
    if (toggled) {
      gsap.to("#navBar", {
        xPercent: -100,
        duration: 0.5,
      });
    } else {
      gsap.to("#navBar", {
        xPercent: 100,
        duration: 0.5,
      });
    }
  });

  return (
    <div className="w-screen h-20 flex items-center justify-center sticky top-0 z-30 bg-white">
      <div
        ref={container}
        className="lg:w-[90%] w-[95%] h-full flex items-center justify-between"
      >
        <div className="flex items-center justify-center ">
          <span className="font-bold text-3xl">Logo</span>
        </div>

        <div className="flex items-center justify-center lg:w-[70%] h-full ">
          <MenuList nav={false} />
        </div>

        <div
          // ref={container}
          className="flex items-center justify-between w-[40%] md:w-[25%] lg:w-[15%] h-full"
        >
          <div className="cursor-pointer border-2 hover:border-green-400 flex items-center justify-center h-10 w-10 rounded-full hover:text-green-400 hover:scale-105 transition duration-200">
            <SupportAgent size={25} />
          </div>
          <div className="cursor-pointer border-2 hover:border-green-400 flex items-center justify-center h-10 w-10 rounded-full hover:text-green-400 hover:scale-105 transition duration-200">
            <FaUser size={20} />
          </div>
          <div className="flex items-center justify-center h-12 w-12 rounded-full lg:hover:text-green-400 z-50 ">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onToggle={onClickNav}
              size={25}
              rounded
            />
          </div>
        </div>

        <div
          id="navBar"
          // ref={container}
          className="flex flex-col items-center justify-start absolute top-0 right-0 h-[70vh] w-[65%] md:w-[55%] lg:w-[25%] z-40 p-6 sm:px-12 bg-white/80 backdrop-blur-sm translate-x-[100%]"
        >
          <MenuList nav={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
=======
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { Divide as Hamburger } from "hamburger-react";
import { MdOutlineSupportAgent as SupportAgent } from "react-icons/md";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MenuList } from "../components/index";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const onClickNav = contextSafe((toggled) => {
    if (toggled) {
      gsap.to("#navBar", {
        xPercent: -100,
        duration: 0.5,
      });
    } else {
      gsap.to("#navBar", {
        xPercent: 100,
        duration: 0.5,
      });
    }
  });

  return (
    <div className="w-screen h-20 flex items-center justify-center sticky top-0 z-30 bg-white">
      <div
        ref={container}
        className="lg:w-[90%] w-[95%] h-full flex items-center justify-between"
      >
        <div className="flex items-center justify-center ">
          <span className="font-bold text-3xl">Logo</span>
        </div>

        <div className="flex items-center justify-center lg:w-[70%] h-full ">
          <MenuList nav={false} />
        </div>

        <div
          // ref={container}
          className="flex items-center justify-between w-[40%] md:w-[25%] lg:w-[15%] h-full"
        >
          <div className="cursor-pointer border-2 hover:border-green-400 flex items-center justify-center h-10 w-10 rounded-full hover:text-green-400 hover:scale-105 transition duration-200">
            <SupportAgent size={25} />
          </div>
          <div className="cursor-pointer border-2 hover:border-green-400 flex items-center justify-center h-10 w-10 rounded-full hover:text-green-400 hover:scale-105 transition duration-200">
            <FaUser size={20} />
          </div>
          <div className="flex items-center justify-center h-12 w-12 rounded-full lg:hover:text-green-400 z-50 ">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onToggle={onClickNav}
              size={25}
              rounded
            />
          </div>
        </div>

        <div
          id="navBar"
          // ref={container}
          className="flex flex-col items-center justify-start absolute top-0 right-0 h-[70vh] w-[65%] md:w-[55%] lg:w-[25%] z-40 p-6 sm:px-12 bg-white/80 backdrop-blur-sm translate-x-[100%]"
        >
          <MenuList nav={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
>>>>>>> cfd55ba0bcef38e9e30dedd423ec87af8498d47f
