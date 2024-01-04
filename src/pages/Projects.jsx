import { projectData } from "../data/projects/project";
import ProjectCard from "../ui/ProjectCard";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function Projects() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-10 lg:mt-30  md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 ">
      <h1
        className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium"
        data-aos="fade-up"
      >
        Projects
      </h1>
      <div className="flex justify-center items-center">
        <div className="projectContainer">
          {projectData.map((project) => (
            <ProjectCard project={project} key={project.projectTitle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
