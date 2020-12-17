import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../../styles/navbar.module.scss';

interface Props {
  label: string;
}

const variants = {
  open: {
    y: 0,
    x: 0,
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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.li
      variants={variants}
      className={styles.mega_menu__li}
      //whileHover={{ borderBottom: '1px solid rgb(255,255,255)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {' '}
      {label}{' '}
      <motion.svg className={styles.mega_menu__liSVG}>
        <motion.path
          animate={{
            pathLength: isHovered ? 1 : 0,
            transition: {
              duration: 0.3,
            },
          }}
          d="M 0,0
            L 500,0
          "
          initial={{
            pathLength: 0,
          }}
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="10px"
        />
      </motion.svg>
    </motion.li>
  );
};

export default MenuItem;
