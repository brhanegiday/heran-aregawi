import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

function MobileMenu({ setOpenMenu, openMenu }) {
  return (
    <div className="bg-white fixed top-0 left-0 min-h-screen min-w-full z-20 py-10 overflow-hidden">
      <nav className="w-4/5 mx-auto">
        {openMenu && (
          <div className="mb-10">
            <XIcon
              role="closeIcon"
              className="w-8 h-8 font-bold text-[#6234C8]"
              onClick={() => setOpenMenu(false)}
            />
          </div>
        )}
        <ul className="space-y-6 text-gray-800">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              // hashSpy={true}
              smooth={true}
              offset={-70}
              onClick={() => setOpenMenu(false)}
              duration={500}
              className="text-gray-700 text-md hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              // hashSpy={true}
              offset={-70}
              onClick={() => setOpenMenu(false)}
              duration={500}
              className="text-gray-700 text-md hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="my-work"
              spy={true}
              smooth={true}
              // hashSpy={true}
              offset={-70}
              onClick={() => setOpenMenu(false)}
              duration={500}
              className="text-gray-700 text-md hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer"
            >
              Work
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              // hashSpy={true}
              offset={-70}
              onClick={() => setOpenMenu(false)}
              duration={500}
              className="text-gray-700 text-md hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
