import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <div className={styles.frontend}>
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-sass-original colored"></i>
        <i className="devicon-less-plain-wordmark colored"></i>
        <i className="devicon-tailwindcss-plain colored"></i>
        <i className="devicon-materialui-plain colored"></i>
        <i className="devicon-bootstrap-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-typescript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-redux-original colored"></i>
        <i className="devicon-nextjs-original colored"></i>
      </div>
      <div className={styles.backend}>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-express-original colored"></i>
        <i className="devicon-sqlite-plain colored"></i>
        <i className="devicon-postgresql-plain colored"></i>
        <i className="devicon-heroku-plain colored"></i>
      </div>
      <div className={styles.management}>
        <i className="devicon-vscode-plain colored"></i>
        <i className="devicon-git-plain colored"></i>
        <i className="devicon-github-original colored"></i>
        <i className="devicon-jira-plain colored"></i>
        <i className="devicon-trello-plain colored"></i>
        <i className="devicon-jest-plain colored"></i>
        <i className="devicon-google-plain colored"></i>
        <i className="devicon-npm-original-wordmark colored"></i>
        <i className="devicon-markdown-original colored"></i>
      </div>
      <div className={styles.ui}>
        <i className="devicon-figma-plain colored"></i>
        <i className="devicon-blender-original colored"></i>
        <i className="devicon-photoshop-plain colored"></i>
      </div>
    </div>
  );
};

export default Skills;
