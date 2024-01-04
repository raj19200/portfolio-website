import { skillData } from "../data/skills/skills";
import SkillsDetails from "../ui/SkillsDetails";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
/* eslint-disable react/no-unescaped-entities */
function Skills() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-10 lg:mt-36  md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 ">
      <h1
        className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium"
        data-aos="fade-up"
      >
        Skills
      </h1>
      <div className="flex justify-center items-center mt-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-8 content-center">
          {skillData.map((skill) => (
            <SkillsDetails skill={skill} key={skill.skillName} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
