import { motion } from 'framer-motion';
import styles from '../../styles/navbar.module.scss';

interface Props {
  label: string;
}

const variants = {
  open: {
    y: 100,
    x: -100,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -500,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ label }: Props) => {
  return (
    <motion.li variants={variants} className={styles.mega_menu__li}>
      {' '}
      {label}{' '}
    </motion.li>
  );
};

export default MenuItem;
