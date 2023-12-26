import { data } from "../data/experience/ExperienceInformation";
import ExperienceDetails from "../ui/ExperienceDetails";

/* eslint-disable react/no-unescaped-entities */
function Experience() {
  return (
    <div className="mt-28 lg:mt-36 pl-24 pr-24 lg:pl-32 lg:pr-32 ">
      <h1 className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium">
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
