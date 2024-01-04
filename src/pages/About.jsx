import AboutDetails from "../ui/AboutDetails";
import AboutImage from "../ui/AboutImage";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function About() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-28 lg:mt-36 md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 ">
      <h1
        className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium"
        data-aos="fade-up"
      >
        About Me
      </h1>
      <div className="pt-14 flex items-center flex-col lg:flex-row ">
        <AboutDetails />
        <AboutImage />
      </div>
    </div>
  );
}

export default About;
