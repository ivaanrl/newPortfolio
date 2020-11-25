import styles from '../../../styles/leftAlignedProject.module.scss';
import Image from 'next/image';

const LeftALignedProject = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.smaller_container}>
        <div className={styles.image__container_1}>
          <Image
            height="700px"
            width="1000px"
            src="/images/second_project.png"
            alt="rocketleagueairrace.com screenshot"
          />
        </div>

        <div className={styles.text__container}>
          <div className={styles.technologies}>
            FullStack Dev, React Native, <br /> Monorepo
          </div>

          <div className={styles.title}>Reddit Clone</div>
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

export default LeftALignedProject;
