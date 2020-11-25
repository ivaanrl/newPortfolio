import styles from '../../styles/projects.module.scss';
import FirstProject from './firstProject/firstProject';

const Projects = () => {
  return (
    <div className={styles.projects__container}>
      <p className={styles.projects__title}>Projects</p>
      <FirstProject />
    </div>
  );
};

export default Projects;
