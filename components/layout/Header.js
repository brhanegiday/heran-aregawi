import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { DocumentIcon } from "@heroicons/react/solid";
import { SunIcon, MoonIcon, MenuIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-[#f5f5f5] py-4 sticky top-0 z-50 drop-shadow-md">
      <nav className="flex items-center justify-between xl:container px-10 mx-auto sm:px-16 lg:px-20">
        <div className="cursor-pointer group flex space-x-2">
          <div className="block lg:hidden cursor-pointer">
            <MenuIcon
              role="menuIcon"
              className="w-5 h-5 font-extrabold text-[#6234C8]"
              onClick={() => setOpenMenu(true)}
            />
          </div>
          <NextLink rel="noreferrer" href="/">
            <a className="font-semi-bold cursor-pointer" rel="noreferrer">
              <img
                src="/home/heran-aregawi.svg"
                alt="Heran Aregawi"
                width="184px"
                height="26px"
              />
            </a>
          </NextLink>
        </div>
        <ul className="hidden space-x-6 lg:flex">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 text-sm hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer"
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
              hashSpy={true}
              offset={-70}
              duration={500}
              style={{
                color: router.pathname === "/#me" ? "#66ba5d" : "",
              }}
              className={`${
                router.asPath === "/#me" ? "text-[#6234C8]" : "text-gray-700"
              } text-sm hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer`}
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
              hashSpy={true}
              offset={-70}
              duration={500}
              className="text-gray-700 text-sm hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer"
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
              hashSpy={true}
              offset={-70}
              duration={500}
              className="text-gray-700 text-sm hover:text-[#6234C8] ease-in-out duration-150 cursor-pointer"
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="flex items-center  space-x-4">
          <a
            rel="noreferrer"
            href="mailto:brhane5giday@gmail.com"
            target="_blank"
            className="px-4 py-1 sm:py-[0.2rem] rounded-full bg-[#6234C8] text-sm text-white hidden sm:block"
          >
            Let&apos;s Talk
          </a>
          <a
            rel="noreferrer"
            href="https://docs.google.com/document/d/1ZTFbhzxUkX4n8tE2EeZ_zOVkP5cY7_ek89H0Fiu1V6A/edit#"
            target="_blank"
          >
            <DocumentIcon
              className="h-5 w-5 cursor-pointer text-[#6234C8]"
              role="globeIcon"
            />
          </a>
          <div>
            {mounted && currentTheme === "dark" ? (
              <div className="flex items-center">
                <MoonIcon
                  className="h-5 w-5 text-[#6234C8] cursor-pointer"
                  onClick={() => setTheme("dark")}
                  role="moonIcon"
                />
                <p className="text-xs cursor-pointer">Dark</p>
              </div>
            ) : (
              <div className="flex items-center">
                <SunIcon
                  className="h-5 w-5 text-[#6234C8] cursor-pointer"
                  role="sunIcon"
                  onClick={() => setTheme("light")}
                />

                <p className="text-xs cursor-pointer">Light</p>
              </div>
            )}
          </div>
        </div>
      </nav>
      {openMenu && <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </header>
  );
}

export default Header;
