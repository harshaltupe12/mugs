import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-blue-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  src="/logo.svg"
                  alt="Picture of the author"
                  className="md:h-[60px] md:w-[220px] h-[40px] w-[150px]"
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-[20px]">
                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="#"
                    >
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="#"
                    >
                      About Me{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="#"
                    >
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="#"
                    >
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="#"
                    >
                      Testimonials{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="#"
                    >
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-2">
                <a
                  className="rounded-sm bg-[#FD6F00] md:px-5 px-2 py-1.5 md:text-lg text-sm font-light text-white shadow"
                  href="/sign-in"
                >
                  Download CV
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
