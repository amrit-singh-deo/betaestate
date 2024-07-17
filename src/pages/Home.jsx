import React, { useEffect, useRef } from "react";
import { EmblaCarousel, Bar, BasicCarousel } from "../components/index";

const Home = () => {
 
  return (
    <main className="h-screen">
      <EmblaCarousel
        slides={Array.from(Array(5).keys())}
        options={{ loop: true }}
      />
      <div className="h-0 w-full relative bg-purple-400">
        <Bar />
      </div>
      <div className="w-[90%] mx-auto relative lg:pt-20 pt-16 lg:mt-10">
        <div className="">
          <div className="flex items-center justify-center">
            <span className="font-semibold sm:text-base text-sm text-center">
              GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
            </span>
          </div>
          <BasicCarousel
            slides={Array.from(Array(8).keys())}
            options={{ align: "start" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
