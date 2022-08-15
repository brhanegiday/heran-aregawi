import Image from "next/image";
import React from "react";
import useInView from "react-cool-inview";

function ShowCase({ showCase }) {
  return (
    <React.Fragment>
      <div className="relative">
        <div className="relative lg:h-[22vw] xl:h-[18vw] md:h-[36vw] h-[50vw] 2xl:h-[15vw]">
          <Image
            src={showCase.image}
            alt={showCase.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="10% 50%"
            className="rounded-xl"
            priority
          />
        </div>

        <div className="absolute bottom-4 md:bottom-6 flex flex-col items-center">
          <h3 className="text-center text-xl text-white">{showCase.title}</h3>
          <p className="text-sm mt-1 text-center w-4/5 md:w-4/6 mx-auto text-white">
            {showCase.excerpt}
          </p>

          <button
            type="button"
            className="mt-2 w-2/5 hidden md:block rounded-full text-sm px-4 py-1 bg-[#6234C8] text-white hover:translate-x-2 transition duration-200 ease-in-out"
          >
            <a href={showCase.url} target="_blank" rel="noreferrer">
              View Project
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ShowCase;
