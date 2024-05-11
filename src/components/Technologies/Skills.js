import { DiReact, DiJava, DiHtml5,DiNodejsSmall, DiPython  } from "react-icons/di";
import { SiFirebase, SiGit, SiCss3, SiMysql, } from "react-icons/si";

export const Skills = [
  {
    slug: "React.js",
    Component: DiReact,
    title: "Web App",
    Description: () => <>Web Applications</>,
  },
  {
    slug: "React Native",
    Component: DiReact,
    title: "React Native",
    Description: () => <>Cross-platform app development</>,
  },
  {
    slug: "Next.js",
    Component: DiNodejsSmall,
    title: "Next.js",
    Description: () => <>React.js FrameWork</>,
  },
  {
    slug: "Python",
    Component:  DiPython ,
    title: "Python",
    Description: () => <>Software Development</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Android apps and Lambda functions</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "Express.js",
    Component: DiNodejsSmall,
    title: "Express.js",
    Description: () => <>Lambda functions for creating APIs</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
