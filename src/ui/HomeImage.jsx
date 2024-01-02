import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function HomeImage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let isSmallOrMediumScreen = windowWidth > 1024;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    Aos.init({ duration: 1000 });
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isSmallOrMediumScreen ? (
        <img
          src="../src/data/images/hero-portrait.svg"
          className="h-40 w-40 md:h-50 md:w-[8rem] lg:h-80 lg:w-[22rem]"
          alt="Flowbite Logo"
          data-aos="zoom-out"
        />
      ) : (
        <img
          src="../src/data/images/hero-portrait.svg"
          className="h-80 w-[22rem] absolute filter brightness-[.3]"
          alt="Flowbite Logo"
        />
      )}
    </>
  );
}

export default HomeImage;
