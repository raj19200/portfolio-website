/* eslint-disable react/prop-types */
import { FiGithub, FiExternalLink } from "react-icons/fi";
function ProjectCard({
  project: { projectTitle, projectDesc, githubLink, liveSite },
}) {
  const openGitHubPage = () => {
    const githubUrl = { githubLink };
    window.open(githubUrl, "_blank");
  };
  const openLiveApp = () => {
    const liveUrl = { liveSite };
    window.open(liveUrl, "_blank");
  };
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <i className="fab fa-windows"></i>
          <h3>{projectTitle}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content m-4">
          <p>{projectDesc}</p>
          <div className="flex pt-3 space-x-4">
            <FiGithub
              onClick={openGitHubPage}
              style={{
                cursor: "pointer",
                color: "#333",
                fontSize: "24px",
                strokeWidth: 2,
              }}
            />
            <FiExternalLink
              onClick={openLiveApp}
              style={{
                cursor: "pointer",
                color: "#333",
                fontSize: "24px",
                strokeWidth: 2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
