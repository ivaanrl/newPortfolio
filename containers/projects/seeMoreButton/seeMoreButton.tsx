import { motion } from 'framer-motion';
import styles from '../../../styles/seeMoreButton.module.scss';

const SeeMoreButton = () => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: '#aa3fff',
        color: '#ffffff',
        border: '7px solid #560496',
        scale: 1.1,
      }}
      className={styles.see_more}
    >
      SEE MORE
    </motion.button>
  );
};

export default SeeMoreButton;
