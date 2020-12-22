import styles from '../../styles/projects.module.scss';
import { motion } from 'framer-motion';
import Project from './project';
import { theme } from '../../styles/theme';

const Projects = () => {
  return (
    <>
      <div className={styles.container} id="projects">
        <p className={styles.projects__title}>Projects</p>
        <motion.div className={styles.projects__container}>
          <Project
            title="Rocket League Air Race"
            technologies="Frontend developer, UI, UX, Server Admin"
            color="#f8b100"
            aligned="right"
            image={{
              name: 'rocketleagueairrace_drawing.png',
              height: 1184,
              width: 1263,
              hasShadow: false,
              isWide: true,
            }}
            openCardImage={{
              name: 'rocketleagueairrace.png',
              height: 580,
              width: 1920,
            }}
            tags={['React', 'Typescript', 'Digital Ocean', 'Plotly.js']}
            codeLink="https://github.com/ivaanrl/reddit-clone"
            liveSiteLink="https://awesome-reddit-clone.netlify.app/"
          />
          <Project
            title="Reddit Clone"
            technologies="FullStack Dev, React Native, Monorepo"
            color="#FF4500"
            aligned="left"
            image={{
              name: 'reddit_drawing.png',
              height: 1184,
              width: 1263,
              hasShadow: false,
              isWide: true,
            }}
            openCardImage={{
              name: 'second_project.png',
              height: 543,
              width: 1920,
            }}
            tags={[
              'React',
              'React Native',
              'Typescript',
              'Monorepo',
              'NodeJS/Express',
              'PostgreSQL',
              'AWS S3',
              'Heroku',
            ]}
            codeLink="https://github.com/ivaanrl/reddit-clone"
            liveSiteLink="https://awesome-reddit-clone.netlify.app/"
          />
          <Project
            title="Alpalac"
            technologies="FullStack Dev, UI, UI"
            color="#c30017"
            aligned="right"
            image={{
              name: 'alpalac_drawing.png',
              height: 1507,
              width: 509,
              hasShadow: true,
              isWide: false,
            }}
            openCardImage={{
              name: 'alpalac.png',
              height: 545,
              width: 1920,
            }}
            tags={[
              'React',
              'Typescript',
              'NodeJS/Express',
              'PostgreSQL',
              'Material UI',
            ]}
            codeLink="https://github.com/ivaanrl/alpalac"
            liveSiteLink="https://alpalac.herokuapp.com/"
          />
        </motion.div>
      </div>
      <div className={styles.github__button_container}>
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: theme.dark,
            color: theme.white,
            borderColor: theme.dark,
          }}
          className={styles.github__button}
        >
          GITHUB PROFILE
        </motion.button>
      </div>
    </>
  );
};

export default Projects;
