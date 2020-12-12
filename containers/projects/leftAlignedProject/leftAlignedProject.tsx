import styles from '../../../styles/leftAlignedProject.module.scss';
import projectStyles from '../../../styles/anyAlignedProject.module.scss';
import Image from 'next/image';
import CodeAndLiveButtons from '../codeAndLiveButtons/codeAndLiveButtons';
import SeeMoreButton from '../seeMoreButton/seeMoreButton';
import { motion } from 'framer-motion';

const LeftALignedProject = () => {
  return (
    <div className={styles.main__container}>
      <motion.div
        whileHover={{ scale: 0.9 }}
        className={styles.image__container_1}
      >
        <Image
          height="700px"
          width="1000px"
          src="/images/alpalac_drawing.png"
          alt="rocketleagueairrace.com screenshot"
        />
      </motion.div>
      <div className={projectStyles.text__container}>
        <div className={projectStyles.technologies}>
          FullStack Dev, React Native, Monorepo
        </div>

        <div className={projectStyles.title}>Reddit Clone</div>
        <div
          className={projectStyles.all_buttons__container}
          style={{
            alignItems: 'flex-start', //temporary fix
          }}
        >
          <SeeMoreButton />
          <CodeAndLiveButtons />
        </div>
      </div>
    </div>
  );
};

export default LeftALignedProject;
