// import { socialIcons } from "data/data";
import { socialIcons } from "../../data/data";
import Link from "next/link";

function ContactMe() {
  return (
    <div
      className="py-8 mt-4 pb-10 xl:container sm:px-16 lg:px-20 mx-auto "
      id="contact"
    >
      <h4 className="text-center text-xs md:text-sm text-[#6234C8] font-bold">
        WHAT&apos;S NEXT
      </h4>
      <div className="flex space-x-1 items-baseline justify-center">
        <h3 className="text-center text-xl md:text-3xl  text-gray-700 font-semibold">
          Lets work together
        </h3>
        <div className="w-2 h-2 rounded-full bg-[#6234C8]"></div>
      </div>
      <p className="w-4/5 lg:w-3/5 mx-auto text-center text-sm mt-2 text-gray-700">
        If you wanna get in touch, talk to me about a project collaboration or
        just say hi,
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-8 md:w-4/6 lg:w-3/5 mx-auto">
        <div>
          {socialIcons.map((icon) => (
            <Link href={icon.url} key={icon.id}>
              <a
                rel="noopener"
                target="_blank"
                className="bg-white w-3/6 md:w-4/5 xl:w-3/5 mx-auto  py-2 px-5 lg:px-10 rounded-full flex items-center gap-x-5 mb-4 shadow-md hover:translate-x-2 duration-300 ease-in-out"
              >
                <img
                  src={icon.image}
                  alt={icon.alt}
                  width="20px"
                  height="20px"
                />

                <p className="text-gray-700 text-sm">{icon.text}</p>
              </a>
            </Link>
          ))}
        </div>
        <div className="w-3/6 md:w-4/5 xl:w-3/5 mx-auto">
          <h4 className="hidden md:block font-semibold text-sm">
            Do you prefer an email?
          </h4>
          <p className="hidden md:block text-sm pb-4">
            Reach out at my address below
          </p>
          <Link href="mailto:brhane5giday@gmail.com">
            <a
              target="_blank"
              rel="noopener"
              className="bg-white py-2 px-5 shadow-md rounded-full flex items-center gap-x-5  hover:translate-x-2 duration-300 ease-in-out"
            >
              <div className="flex gap-x-4 items-center justify-center">
                <img
                  src="/contact/gmail_icon.svg"
                  alt="Gmail Icon"
                  height="17px"
                  width="17px"
                  className="grayscale-0"
                />

                <p className="text-gray-700 text-sm">Compose</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
