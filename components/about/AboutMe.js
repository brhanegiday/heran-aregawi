import React from "react";
import { Link } from "react-scroll";

function AboutMe() {
  return (
    <div className="py-10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="md:w-4/5 w-full">
          <h2 className="text-left text-xs md:text-sm pb-1 text-[#6234C8] font-bold">
            MY SKILLSET
          </h2>
          <h3 className="text-md sm:text-xl md:text-2xl text-gray-700 font-semibold">
            Fullstack developer and UI/UX designer
          </h3>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="md:block hidden"
          >
            <button
              type="button"
              className="flex group space-x-1 mt-3 items-center hover:bg-[#6234C8] shadow-md rounded-full hover:translate-x-1 transition transform ease-in-out duration-350 border-b-4 border-t-[1px] border-[#6234C8] py-2 px-5"
            >
              <p className="uppercase text-xs text-gray-700 group-hover:text-white">
                Let&apos;s make something special
              </p>
            </button>
          </Link>
        </div>
        <div>
          <p className="pt-4 text-sm text-gray-700">
            I specialize in building complex web applications, leading front-end
            teams. I always seek new opportunities for cooperation on projects
            around interesting dashboards, design systems or landing pages.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            As a web developer, I enjoy using my obsessive attention to detail,
            my unequivocal love for making things, and my mission-driven work
            ethic to literally change the world. That&apos;s why I’m excited to
            make a big impact at a high growth company.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Speaking the languages of designers, developers, and users in
            fostering smart collaboration. A humble team player leading by
            influence and genuine passion for crafting solutions.
          </p>
          <div className="block md:hidden">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                type="button"
                className="flex group space-x-1 mt-3 items-center hover:bg-[#6234C8] shadow-md rounded-full hover:translate-x-1 transition transform ease-in-out duration-350 border-b-4 border-t-[1px] border-[#6234C8] py-2 px-5"
              >
                <p className="uppercase text-xs text-gray-700 group-hover:text-white">
                  Let&apos;s make something special
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
