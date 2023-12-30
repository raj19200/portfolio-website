/* eslint-disable react/prop-types */
import { FiGithub, FiExternalLink } from "react-icons/fi";
function ProjectCard({
  project: { projectTitle, projectDesc, githubLink, liveSite },
}) {
  const openGitHubPage = () => {
    window.open(githubLink, "_blank");
  };
  const openLiveApp = () => {
    window.open(liveSite, "_blank");
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
            {githubLink.length ? (
              <FiGithub
                onClick={openGitHubPage}
                style={{
                  cursor: "pointer",
                  color: " #ffb633",
                  fontSize: "24px",
                  strokeWidth: 2,
                }}
              />
            ) : null}
            {liveSite ? (
              <FiExternalLink
                onClick={openLiveApp}
                style={{
                  cursor: "pointer",
                  color: " #ffb633",
                  fontSize: "24px",
                  strokeWidth: 2,
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
