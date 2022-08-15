import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-[#f5f5f5] ">
      <div className="xl:container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-10 lg:px-20 w-full">
          <div className="flex gap-x-3 items-center">
            <div className="bg-[#6234C8] h-[55px] w-[55px] md:h-[80px] md:w-[80px] rounded-full">
              <img
                src="/home/brhane-giday.png"
                alt="Brhane Giday"
                height="80px"
                width="80px"
              />
            </div>
            <div>
              <h3 className="text-xs  mb-1">Brhane Giday</h3>
              <h4 className="text-sm text-gray-700 sm:font-semibold">
                Full Stack Developer
              </h4>
            </div>
          </div>
          <h3 className="text-sm text-gray-700 mx-auto w-full sm:w-5/6 mt-5">
            Designed & Developed by me <span className="">&copy; 2021</span>
            <br />
            Made with{" "}
            <a
              href="https://nextjs.org/"
              rel="noopener"
              target="_blank"
              className="text-[#6234C8]"
            >
              NextJs
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com/"
              rel="noopener"
              target="_blank"
              className="text-[#6234C8]"
            >
              Tailwindcss
            </a>
          </h3>
          <div className="hidden lg:block">
            <h4 className="text-sm mb-1 text-gray-700 sm:font-semibold">
              Let's get social
            </h4>
            <p className="text-sm text-gray-700 ">
              Follow me on{" "}
              <span>
                <a
                  href="https://instagram.com/brhane_giday/"
                  rel="noopener"
                  target="_blank"
                  className="text-[#6234C8] sm:font-semibold"
                >
                  Instagram
                </a>
              </span>
              {", "}
              <span>
                <a
                  href="https://github.com/brhanegiday/"
                  rel="noopener"
                  target="_blank"
                  className="text-[#6234C8] sm:font-semibold"
                >
                  Github
                </a>
              </span>{" "}
              and{" "}
              <span>
                <a
                  href="https://linkedin.com/in/brhane-giday/"
                  rel="noopener"
                  target="_blank"
                  className="text-[#6234C8] sm:font-semibold"
                >
                  LinkedIn
                </a>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
