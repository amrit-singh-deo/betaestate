import React, { useEffect, useRef } from "react";
import categories from "../data/category";

const MenuList = (props) => {
  const { nav } = props;

  return (
    <ul
      className={
        nav
          ? `flex items-start justify-center font-semibold w-full flex-col sm:h-[60%] h-[65%] lg:h-[90%] text md:text-2xl lg:text-base mt-10 md:mt-16 lg:mt-10`
          : `hidden lg:flex items-center justify-between w-full font-semibold h-full`
      }
    >
      {categories[0].map((item, index) => (
        <li
          key={item.id}
          className=" lg:hover:scale-105 hover:text-green-400 transition duration-200 cursor-pointer flex items-center justify-center h-full"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
