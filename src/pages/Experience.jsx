import { data } from "../data/experience/ExperienceInformation";
import ExperienceDetails from "../ui/ExperienceDetails";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
/* eslint-disable react/no-unescaped-entities */
function Experience() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-28 lg:mt-36 md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 ">
      <h1
        className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium"
        data-aos="fade-up"
      >
        Where I've Worked
      </h1>
      <div className="mt-14 flex flex-col justify-between border-l-[1px] border-solid ">
        {data.map((company) => (
          <ExperienceDetails company={company} key={company.companyName} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
