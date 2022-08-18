const archiveData = {
  bloomtech: {
    sprintChallenges: {
      sprintChallenge1: {
        name: "Git and Intro to JavaScript",
        date_started: "January 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-Git-and-intro-js",
      },
      sprintChallenge2: {
        name: "JavaScript Fundamentals",
        date_started: "January 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-javascript-fundamentals",
      },
      sprintChallenge3: {
        name: "User Interface Responsive Design",
        date_started: "January 2022",
        link: "https://github.com/joseph-fantuzzi/web-Sprint-Challenge-User-Interface-Responsive-Design",
      },
      sprintChallenge4: {
        name: "Applied JavaScript",
        date_started: "February 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-applied-javascript",
      },
      sprintChallenge5: {
        name: "Intro to React",
        date_started: "February 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-intro-to-react",
      },
      sprintChallenge6: {
        name: "Single Page Applications",
        date_started: "February 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-single-page-applications",
      },
      sprintChallenge7: {
        name: "Advanced React",
        date_started: "March 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-advanced-react",
      },
      sprintChallenge8: {
        name: "Advanced State",
        date_started: "March 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-advanced-state",
      },
      sprintChallenge9: {
        name: "Advanced Web Applications",
        date_started: "April 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-advanced-web-applications",
      },
      sprintChallenge10: {
        name: "Build a Web API",
        date_started: "April 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-build-a-web-api",
      },
      sprintChallenge11: {
        name: "Adding Data Persistence",
        date_started: "April 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-adding-data-persistence",
      },
      sprintChallenge12: {
        name: "Authentication and Testing",
        date_started: "April 2022",
        link: "https://github.com/joseph-fantuzzi/web-sprint-challenge-authentication-and-testing",
      },
    },
    apprenticeship: {
      pr1: {
        name: "BL-250-be-feature/application-endpoint",
        date: "June 2022",
        link: "https://github.com/BloomTech-Labs/underdog-devs-be-a/pull/135",
      },
      pr2: {
        name: "BL-251/UX-pending-applications",
        date: "June 2022",
        link: "https://github.com/BloomTech-Labs/underdog-devs-docs/pull/1",
      },
      pr3: {
        name: "BL-200 Refactor Mentee Dashboard Tests",
        date: "June 2022",
        link: "https://github.com/BloomTech-Labs/underdog-devs-fe-a/pull/268",
      },
    },
    projects: {
      nasa_pod: {
        name: "Nasa Astronomy Picture of the Day",
        date_started: "February 2022",
        github: "https://github.com/joseph-fantuzzi/nasa-photo-of-the-day",
      },
      team_builder: {
        name: "Team Builder",
        date_started: "February 2022",
        github: "https://github.com/joseph-fantuzzi/team-builder",
        site: "https://joseph-team-builder.vercel.app/",
      },
      advanced_assignments: {
        name: "4 Projects: Dark Theme, Modal, Scroll Progress Bar, and Tic Tac Toe Game",
        date_started: "February 2022",
        github: "https://github.com/joseph-fantuzzi/web-unit-1-bw-advanced-assignments",
      },
      user_onboarding: {
        name: "User Onboarding",
        date_started: "February 2022",
        github: "https://github.com/joseph-fantuzzi/User-Onboarding",
      },
      zip_code: {
        name: "Zip Code",
        date_started: "March 2022",
        github: "https://github.com/joseph-fantuzzi/web-module-project-async-redux",
      },
    },
  },
  personal: {
    portfolioV0: {
      name: "Portfolio Website - v0",
      date_started: "January 2022",
      technologies: ["HTML", "CSS", "JavaScript"],
      site: "https://josephfantuzzi.netlify.app/",
    },
    cryptox: {
      name: "Cryptox",
      date_started: "February 2022",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Knex.js",
        "JWT",
        "Bcrypt.js",
      ],
      github: "https://github.com/joseph-fantuzzi/cryptocurrency-tracker",
      site: "https://cryptox-cryptocurrency-tracker.vercel.app/",
    },
    portfolioV1: {
      name: "Portfolio Website - v1",
      date_started: "June 2022",
      technologies: ["Next.js", "CSS", "Framer Motion"],
      github: "https://github.com/joseph-fantuzzi/portfolio-website",
      site: "https://www.josephfantuzzi.dev/",
    },
    algo_playground: {
      name: "Algo Playground",
      date_started: "July 2022",
      technologies: ["React.js", "CSS"],
      github: "https://github.com/joseph-fantuzzi/algo-playground",
      site: "",
    },
    omega: {
      name: "Omega Calculator App",
      date_started: "August 2022",
      technologies: ["TypeScript", "React.js", "TailwindCSS"],
      github: "https://github.com/joseph-fantuzzi/calculator-app",
      site: "",
    },
  },
};

const bloomtechSprints = [
  archiveData.bloomtech.sprintChallenges.sprintChallenge1,
  archiveData.bloomtech.sprintChallenges.sprintChallenge2,
  archiveData.bloomtech.sprintChallenges.sprintChallenge3,
  archiveData.bloomtech.sprintChallenges.sprintChallenge4,
  archiveData.bloomtech.sprintChallenges.sprintChallenge5,
  archiveData.bloomtech.sprintChallenges.sprintChallenge6,
  archiveData.bloomtech.sprintChallenges.sprintChallenge7,
  archiveData.bloomtech.sprintChallenges.sprintChallenge8,
  archiveData.bloomtech.sprintChallenges.sprintChallenge9,
  archiveData.bloomtech.sprintChallenges.sprintChallenge10,
  archiveData.bloomtech.sprintChallenges.sprintChallenge11,
  archiveData.bloomtech.sprintChallenges.sprintChallenge12,
];

const bloomtechPRs = [
  archiveData.bloomtech.apprenticeship.pr1,
  archiveData.bloomtech.apprenticeship.pr2,
  archiveData.bloomtech.apprenticeship.pr3,
];

const bloomtechProjects = [
  archiveData.bloomtech.projects.nasa_pod,
  archiveData.bloomtech.projects.team_builder,
  archiveData.bloomtech.projects.advanced_assignments,
  archiveData.bloomtech.projects.user_onboarding,
  archiveData.bloomtech.projects.zip_code,
];

const personalProjects = [
  archiveData.personal.portfolioV0,
  archiveData.personal.cryptox,
  archiveData.personal.portfolioV1,
  archiveData.personal.algo_playground,
  archiveData.personal.omega,
];

const data = {
  bloomtechSprints,
  bloomtechPRs,
  bloomtechProjects,
  personalProjects,
};

export default data;
