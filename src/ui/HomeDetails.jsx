import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";

function HomeDetails() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Raj Shah", "Frontend Developer", "React Js Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col w-full lg:w-2/4 leading-loose space-y-5 z-10">
      <p className=" text-base lg:text-xl ">Hi, There!</p>
      <h1 className="text-lg lg:text-5xl">
        I am <span className="text-websiteColor" ref={el} />
      </h1>
      <h4 className="text-sm lg:text-lg font-thin">
        A passionate Web Developer with 3 years of experience in designing and
        developing web applications.
      </h4>
      <Link
        activeClass="text-websiteColor"
        smooth
        spy
        to="about"
        className="block rounded md:bg-transparent  md:p-0 hover:text-websiteColor cursor-pointer"
        aria-current="page"
      >
        <button
          type="button"
          className="text-websiteColor mt-10 hover:text-textColor border border-websiteColor hover:bg-websiteColor focus:ring-4 focus:outline-none focus:ring-websiteColor font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Know More
        </button>
      </Link>
    </div>
  );
}

export default HomeDetails;
