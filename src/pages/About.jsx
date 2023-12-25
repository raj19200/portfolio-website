import AboutDetails from "../ui/AboutDetails";
import AboutImage from "../ui/AboutImage";

function About() {
  return (
    <div className="mt-28 lg:mt-36 pl-24 pr-24 lg:pl-32 lg:pr-32 ">
      <h1 className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium">
        About Me
      </h1>
      <div className="pt-14 flex items-center flex-col lg:flex-row justify-between ">
        <AboutDetails />
        <AboutImage />
      </div>
    </div>
  );
}

export default About;
