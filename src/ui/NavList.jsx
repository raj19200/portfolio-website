import LinkTab from "./LinkTab";
import Pdf from "../data/pdf/Raj_Shah_Resume.pdf";
import { useState } from "react";
function NavList() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-fuchsia-50 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:block md:w-auto space-x-14`}
        id="navbar-default "
      >
        <ul className="font-medium flex  items-center flex-col p-4 lg:p-0 mt-4 border rounded  md:flex-row md:space-x-5 lg:space-x-8  md:mt-0 md:border-0">
          <LinkTab tabName="home" tabTitle="Home" />
          <LinkTab tabName="about" tabTitle="About" />
          <LinkTab tabName="experience" tabTitle="Experience" />
          <LinkTab tabName="skills" tabTitle="Skills" />
          <LinkTab tabName="projects" tabTitle="Projects" />
          <LinkTab tabName="contact" tabTitle="Contact" />
          <div className="mt-2">
            <button
              href={Pdf}
              target="_blank"
              type="button"
              className="text-websiteColor hover:text-textColor border border-websiteColor hover:bg-websiteColor focus:ring-4 focus:outline-none focus:ring-websiteColor font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              <a href={Pdf} target="_blank" rel="noreferrer">
                Resume
              </a>
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default NavList;
