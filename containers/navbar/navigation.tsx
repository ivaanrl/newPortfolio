import { motion } from 'framer-motion';
import useWindowDimensions from '../../shared/customHooks/useWindowDimentions';
import MenuItem from './menuItem';
import styles from '../../styles/navbar.module.scss';
import { useEffect, useState } from 'react';

const navigationItems = ['Home', 'My Projects', 'My Skills', 'Contact'];

const Navigation = () => {
  const windowDimentions = useWindowDimensions();
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setHeight(windowDimentions.height);
    setWidth(windowDimentions.width);
  }, [windowDimentions.width, windowDimentions.height]);

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.ul variants={variants} className={styles.mega_menu__ul}>
      {navigationItems.map((navigationItem, index) => {
        return <MenuItem key={index} label={navigationItem} />;
      })}
    </motion.ul>
  );
};

export default Navigation;
