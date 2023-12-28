import { projectData } from "../data/projects/project";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <div className="pl-24 pr-24 lg:pl-32 lg:pr-32 ">
      <h1 className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium">
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
