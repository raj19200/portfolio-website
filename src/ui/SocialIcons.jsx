function SocialIcons() {
  const openGitHubPage = () => {
    window.open("https://github.com/raj19200", "_blank");
  };
  const openLinkdInPage = () => {
    window.open("https://www.linkedin.com/in/raj-shah-1920r/", "_blank");
  };
  return (
    <div className="wrapper">
      <div className="icon linkdin">
        <div className="tooltip">LinkdIn</div>
        <span>
          <i onClick={openLinkdInPage} className="fa fa-linkedin"></i>
        </span>
      </div>
      <div className="icon github">
        <div className="tooltip">Github</div>
        <span>
          <i onClick={openGitHubPage} className="fa fa-github"></i>
        </span>
      </div>
    </div>
  );
}

export default SocialIcons;
