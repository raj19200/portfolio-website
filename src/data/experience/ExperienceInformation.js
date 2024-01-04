import calculateMonths from "../../utils/calculateMonth";

export const data = [
  {
    companyName: "Empowered Futures Canada",
    period: "Nov 2023 - Present",
    totalYearsOfExperience: calculateMonths("November 2023", new Date()),
    description:
      "Currently working as a volunteering front-end developer with Empowered Futures, contributing to two projects. One involves developing an internal application, while the other focuses on creating a mentorship platform.",
  },
  {
    companyName: "Accenture India",
    period: "Sep 2021 - Aug 2023",
    totalYearsOfExperience: calculateMonths("September 2021", "August 2023"),
    description:
      "Developed and maintained multiple applications of Ireland banking domain, while working as a part of the JavaScript team. Implemented new functionalities in applications and provided support for existing applications. Utilized a range of JavaScript frameworks such as ReactJs, NodeJs, ExpressJs, and MongoDB.",
  },
  {
    companyName: "Synoverge Technologies Pvt. Ltd.",
    period: "Feb 2021 - Sep 2021",
    totalYearsOfExperience: calculateMonths("February 2021", "September 2021"),
    description:
      "Collaborated with a team on multiple projects to design and develop software solutions addressing real-world problems. Actively participated in Agile software development, contributing to both iOS and Android projects. Engaged in diverse projects involving Dart programming, mobile application development, web development. Developed and maintained mobile and web applications using Flutter.",
  },
  {
    companyName: "AHAsolar Technologies Ltd.",
    period: "May 2020 - Jan 2021",
    totalYearsOfExperience: calculateMonths("May 2020", "January 2021"),
    description:
      "During my internship, I took on the responsibility of learning about logic development with Python and the basics of Optical Character Recognition (OCR). Collaborated with my supervisor and researched online resources to gain a deeper understanding of OCR functionality.",
  },
];
