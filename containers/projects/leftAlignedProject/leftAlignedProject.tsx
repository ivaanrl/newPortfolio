import styles from '../../../styles/leftAlignedProject.module.scss';
import Image from 'next/image';
import CodeAndLiveButtons from '../codeAndLiveButtons/codeAndLiveButtons';
import SeeMoreButton from '../seeMoreButton/seeMoreButton';
import { motion } from 'framer-motion';

const LeftALignedProject = () => {
  return (
    <div className={styles.main__container}>
      <motion.div
        whileHover={{ scale: 0.9 }}
        className={styles.smaller_container}
      >
        <div className={styles.image__container_1}>
          <Image
            height="700px"
            width="1000px"
            src="/images/second_project.png"
            alt="rocketleagueairrace.com screenshot"
          />
        </div>
      </motion.div>
      <div className={styles.text__container}>
        <div className={styles.technologies}>
          FullStack Dev, React Native, <br /> Monorepo
        </div>

        <div className={styles.title}>Reddit Clone</div>
        <SeeMoreButton />
        <CodeAndLiveButtons />
      </div>
    </div>
  );
};

export default LeftALignedProject;
