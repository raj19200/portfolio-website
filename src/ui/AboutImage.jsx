import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function AboutImage() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="pl-20">
      <div className="imageBox">
        <img
          src="raj.jpg"
          className="hidden lg:block items-center h-40 w-40 md:h-50 md:w-[8rem] lg:h-80 lg:w-[17rem] p-5 object-scale-down"
          alt="raj"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
}

export default AboutImage;
