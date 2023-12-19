import { Link } from "react-scroll";

function NavList() {
  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-fuchsia-50 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
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
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <Link
              activeClass="text-color"
              smooth
              spy
              to="home"
              className="block py-2 px-3 rounded md:bg-transparent  md:p-0 "
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-color"
              smooth
              spy
              to="about"
              className="block py-2 px-3 rounded md:bg-transparent  md:p-0"
              aria-current="page"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to="/#skills"
              className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 active:text-red-500"
              aria-current="page"
              activeClass="text-red-500"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/#Projects"
              className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 active:text-red-500"
              aria-current="page"
              activeClass="text-red-500"
            >
              Projects
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/#experience"
              className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 active:text-red-500"
              aria-current="page"
              activeClass="text-red-500"
            >
              Experience
            </Link>
          </li> */}
          <li>
            <Link
              activeClass="text-color"
              smooth
              spy
              to="contact"
              className="block py-2 px-3 rounded md:bg-transparent  md:p-0"
              aria-current="page"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavList;
