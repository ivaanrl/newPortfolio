import styles from '../../../styles/codeAndLiveButtons.module.scss';
import { motion } from 'framer-motion';

interface Props {
  color: string;
}

const CodeAndLiveButtons = ({ color }: Props) => {
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
          color: color,
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(200.54deg,#ffffff 100%,${color} 0%)`,
        }}
        className={styles.button__left}
        style={{
          borderImageSource: `linear-gradient(
            200.54deg,
            #ffffff 62.45%,
            ${color} 62.46%
          );`,
        }}
      >
        CODE
      </motion.button>
      <motion.button
        whileHover={{
          backgroundColor: '#ffffff',
          color: color,
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(150.6deg,#ffffff 100%, ${color} 0%)`,
        }}
        className={styles.button__right}
        style={{
          borderImageSource: `linear-gradient(
            150.6deg,
            #ffffff 74.52%,
            ${color} 75.11%
          );`,
        }}
      >
        LIVE SITE
      </motion.button>
    </motion.div>
  );
};

export default CodeAndLiveButtons;
