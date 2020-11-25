import styles from '../../styles/projects.module.scss';
import LeftALignedProject from './leftAlignedProject/leftAlignedProject';
import RightALignedProject from './rightAlignedProject/rightAlignedProject';

const Projects = () => {
  return (
    <>
      <div className={styles.projects__container}>
        <p className={styles.projects__title}>Projects</p>
        <RightALignedProject
          project_number={1}
          technologies="Frontend developer, UI, UX, Server Admin"
          name="Rocketleagueairrace.com"
          big_name
          code_link=""
          live_link=""
        />
        <LeftALignedProject />
        <RightALignedProject
          project_number={3}
          technologies="FullStack Dev, UI, UX"
          name="Alpalac"
          big_name={false}
          code_link=""
          live_link=""
        />
      </div>
      <div className={styles.github__button_container}>
        <button className={styles.github__button}>GITHUB PROFILE</button>
      </div>
    </>
  );
};

export default Projects;
