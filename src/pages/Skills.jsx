import { skillData } from "../data/skills/skills";
import SkillsDetails from "../ui/SkillsDetails";

/* eslint-disable react/no-unescaped-entities */
function Skills() {
  return (
    <div className="mt-28 lg:mt-36 pl-24 pr-24 lg:pl-32 lg:pr-32 ">
      <h1 className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium">
        Skills
      </h1>
      <div className="mt-14 flex justify-between self-center h-screen">
        <div className="h-[32rem] grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-8">
          {skillData.map((skill) => (
            <SkillsDetails skill={skill} key={skill.skillName} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
