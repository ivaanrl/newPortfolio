import styles from '../../../styles/rightAlignedProject.module.scss';
import Image from 'next/image';

interface Props {
  project_number: number;
  technologies: string;
  name: string;
  big_name: boolean;
  code_link: string;
  live_link: string;
}

const RightALignedProject = ({
  project_number,
  technologies,
  big_name,
  name,
  code_link,
  live_link,
}: Props) => {
  return (
    <div className={styles.main__container}>
      <div className={styles.smaller_container}>
        {project_number === 1 ? (
          <div className={styles.image__container_1}>
            <Image
              height="550px"
              width="1000px"
              src="/images/first_project.png"
              alt="rocketleagueairrace.com screenshot"
            />
          </div>
        ) : null}
        {project_number === 3 ? (
          <div className={styles.image__container_3}>
            <Image
              height="700px"
              width="350px"
              src="/images/third_project.png"
              alt="rocketleagueairrace.com screenshot"
            />
          </div>
        ) : null}
        <div
          className={
            big_name ? styles.text__container : styles.text__container_small
          }
        >
          <div className={styles.technologies}>{technologies}</div>

          <div className={styles.title}>{name}</div>
          <button className={styles.see_more}>SEE MORE</button>
          <div className={styles.buttons__container}>
            <button className={styles.button__left}>CODE</button>
            <button className={styles.button__right}>LIVE SITE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightALignedProject;
