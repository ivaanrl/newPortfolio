import { motion } from 'framer-motion';
import styles from '../../../styles/seeMoreButton.module.scss';
import { theme } from '../../../styles/theme';

const SeeMoreButton = () => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: theme.mainColor,
        color: theme.white,
        border: `7px solid ${theme.mainColorDark}`,
        scale: 1.1,
      }}
      className={styles.see_more}
    >
      SEE MORE
    </motion.button>
  );
};

export default SeeMoreButton;
