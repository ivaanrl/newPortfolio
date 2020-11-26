import styles from '../../../styles/codeAndLiveButtons.module.scss';
import { motion } from 'framer-motion';

const CodeAndLiveButtons = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      className={styles.buttons__container}
    >
      <motion.button
        whileHover={{
          backgroundColor: '#000000',
          color: '#ffffff',
          borderImageSlice: 1,
          borderImageSource:
            'linear-gradient(200.54deg,#000000 100%,#FFFFFF 0%)',
        }}
        className={styles.button__left}
      >
        CODE
      </motion.button>
      <motion.button
        whileHover={{
          backgroundColor: '#000000',
          color: '#ffffff',
          borderImageSlice: 1,
          borderImageSource:
            'linear-gradient(150.6deg,#000000 100%,#FFFFFF 0%)',
        }}
        className={styles.button__right}
      >
        LIVE SITE
      </motion.button>
    </motion.div>
  );
};

export default CodeAndLiveButtons;
