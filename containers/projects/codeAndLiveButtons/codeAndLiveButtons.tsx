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
          backgroundColor: '#ffffff',
          color: '#c30017',
          borderImageSlice: 1,
          borderImageSource:
            'linear-gradient(200.54deg,#ffffff 100%,#000000 0%)',
        }}
        className={styles.button__left}
      >
        CODE
      </motion.button>
      <motion.button
        whileHover={{
          backgroundColor: '#ffffff',
          color: '#c30017',
          borderImageSlice: 1,
          borderImageSource:
            'linear-gradient(150.6deg,#ffffff 100%,#000000 0%)',
        }}
        className={styles.button__right}
      >
        LIVE SITE
      </motion.button>
    </motion.div>
  );
};

export default CodeAndLiveButtons;
