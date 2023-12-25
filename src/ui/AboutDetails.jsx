/* eslint-disable react/no-unescaped-entities */
function AboutDetails() {
  return (
    <div className="flex flex-col w-full lg:w-2/4 leading-loose space-y-5">
      <p>Hi, I am Raj, a Front End developer.</p>
      <p>
        I am responsible for building beautiful, elegant, and functional
        <span className="text-websiteColor"> web applications</span> , with
        around <span className="text-websiteColor">3 years</span> of experience.
        I worked at{" "}
        <a href="https://www.accenture.com/in-en" className="text-websiteColor">
          Accenture
        </a>{" "}
        as an associate software developer. I am currently pursuing my{" "}
        <span className="text-websiteColor">master's degree </span> at the
        <span className="text-websiteColor"> University of Windsor </span>.
        Being passionate about learning & implementing new tools and
        technologies keeps me motivated.
      </p>
    </div>
  );
}

export default AboutDetails;
