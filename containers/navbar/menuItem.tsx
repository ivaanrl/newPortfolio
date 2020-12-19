import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../../styles/navbar.module.scss';
import { theme } from '../../styles/theme';

interface Props {
  label: string;
  id: string;
  hideSidebar: () => void;
  showContactForm?: () => void;
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

const MenuItem = ({ label, id, hideSidebar, showContactForm }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = () => {
    hideSidebar();
    if (showContactForm) showContactForm();
  };

  return (
    <motion.li
      variants={variants}
      className={styles.mega_menu__li}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <a href={showContactForm ? null : `/#${id}`}>
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
            stroke={theme.sidebarStroke}
            strokeWidth="10px"
          />
        </motion.svg>
      </a>
    </motion.li>
  );
};

export default MenuItem;
