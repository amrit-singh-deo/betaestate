import React, { useState } from "react";
import { MdGpsFixed } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import categories from "../data/category";
import { FiSearch } from "react-icons/fi";

const Bar = () => {
  const [isSelected, setIsSelected] = useState(categories[1]);

  const handleClick = (item) => {
    let updatedState = isSelected.map((isSelectedItem) =>
      isSelectedItem.id === item.id
        ? { ...isSelectedItem, clicked: true }
        : { ...isSelectedItem, clicked: false }
    );
    setIsSelected(updatedState);
  };

  return (
    <div className="bg-white absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] lg:w-[70%] w-[95%] flex flex-col z-20 font-semibold rounded-lg">
      <div className="lg:flex items-center justify-center h-[50%] border-b py-4 px-6 hidden">
        <ul className="flex items-center justify-between w-full">
          {isSelected.map((item) => (
            <li
              className={
                item.clicked
                  ? `bg-green-400 text-white cursor-pointer px-4 py-2 rounded-lg transition duration-200`
                  : `cursor-pointer px-4 py-2 rounded-lg transition duration-200 hover:text-green-400`
              }
              key={item.id}
              onClick={() => handleClick(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full lg:h-[50%] flex items-center justify-between border-t shadow-lg py-3 px-6 rounded-b-lg">
        <div className="hidden lg:flex items-center justify-center">
          All Residential
        </div>
        <div className="lg:w-[50%] flex relative w-full">
          <input
            className="w-full lg:p-2 px-4 py-2 rounded-lg border-[1.5px] focus:outline outline-green-400"
            type="text"
            placeholder="Search City"
          />
          <div className="flex lg:hidden items-center justify-center absolute top-[50%] translate-y-[-50%] right-[6%] md:right-[3%]">
            <FiSearch size={20} />
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between w-[28%]">
          <div className="hover:text-green-400 hover:border-green-400 transition duration-200 cursor-pointer border-2 rounded-full w-10 h-10 hidden lg:flex items-center justify-center">
            <MdGpsFixed size={20} />
          </div>
          <div className="hover:text-green-400 hover:border-green-400 transition duration-200 cursor-pointer border-2 rounded-full w-10 h-10 hidden lg:flex items-center justify-center">
            <FaMicrophone size={20} />
          </div>
          <div>
            <button className="px-5 py-3 rounded-lg bg-slate-100 hover:bg-green-400 hover:text-white transition duration-200 hidden lg:flex">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
