import React from "react";
import dynamic from "next/dynamic";
import { showCases } from "../../data/data";
const ShowCase = dynamic(() => import("./ShowCase"));

function Works() {
  return (
    <div
      className="py-5 mx-auto xl:container sm:px-16 px-10 lg:px-20"
      id="my-work"
    >
      <div className=" justify-center flex items-baseline space-x-1">
        <h3 className="text-center text-xl md:text-3xl text-gray-700 font-semibold">
          My Recent Work
        </h3>
        <div className="w-2 h-2 rounded-full bg-[#6234C8]"></div>
      </div>
      <p className="py-3 mb-6 md:text-center text-gray-700 text-sm w-full lg:w-3/5 mx-auto">
        Here are some of the projects I have worked on recently.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-x-4">
        {showCases?.map((showCase) => (
          <ShowCase showCase={showCase} key={showCase.id} />
        ))}
      </div>
    </div>
  );
}

export default Works;
