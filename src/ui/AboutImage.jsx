import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function AboutImage() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="imageBox">
      <img
        src="raj.jpg"
        className="hidden lg:block items-center h-40 w-40 md:h-50 md:w-[8rem] lg:h-80 lg:w-[22rem] p-5"
        alt="raj"
        data-aos="zoom-in"
      />
    </div>
  );
}

export default AboutImage;
