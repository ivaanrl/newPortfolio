import styles from '../../../styles/firstProject.module.scss';
import Image from 'next/image';

const FirstProject = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.smaller_container}>
        <div className={styles.image__container}>
          <Image
            height="600px"
            width="1155px"
            src="/images/first_project.png"
            alt="rocketleagueairrace.com screenshot"
          />
        </div>
        <div className={styles.text__container}>
          <div className={styles.technologies}>
            Frontend developer, UI, UX, Server Admin
          </div>

          <div className={styles.title}>Rocketleagueairrace.com</div>
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

export default FirstProject;
