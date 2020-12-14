import styles from '../../../styles/codeAndLiveButtons.module.scss';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  color: string;
  setFillSVG: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const CodeAndLiveButtons = ({ color, setFillSVG, isOpen }: Props) => {
  return (
    <motion.div
      className={`${styles.buttons__container}  ${
        isOpen ? styles.buttons__container__open : null
      }`}
    >
      <motion.button
        whileHover={{
          backgroundColor: '#ffffff',
          color: color,
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(200.54deg,#ffffff 100%,${color} 0%)`,
          scale: 1.1,
        }}
        onMouseEnter={() => setFillSVG(false)}
        onMouseLeave={() => setFillSVG(true)}
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
          scale: 1.1,
        }}
        onMouseEnter={() => setFillSVG(false)}
        onMouseLeave={() => setFillSVG(true)}
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
