import { motion } from 'framer-motion';
import useWindowDimensions from '../../shared/customHooks/useWindowDimentions';
import MenuItem from './menuItem';
import styles from '../../styles/navbar.module.scss';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import linkedinOutlined from '@iconify/icons-ant-design/linkedin-outlined';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import youtubeOutlined from '@iconify/icons-ant-design/youtube-outlined';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';

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
      //height: '100vh',
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      //height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.div className={styles.sidebar__itemsContainer}>
      <motion.ul variants={variants} className={styles.mega_menu__ul}>
        {navigationItems.map((navigationItem, index) => {
          return <MenuItem key={index} label={navigationItem} />;
        })}
      </motion.ul>
      <motion.ul variants={variants} className={styles.sidebar__socials}>
        <motion.a
          whileHover={{
            scale: 1.2,
            backgroundColor: '#000000',
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={styles.socialIcon__container}
        >
          <Icon icon={linkedinOutlined} className={styles.socialIcon} />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
            backgroundColor: '#000000',
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={styles.socialIcon__container}
        >
          <Icon icon={instagramOutlined} className={styles.socialIcon} />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
            backgroundColor: '#000000',
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={styles.socialIcon__container}
        >
          <Icon icon={youtubeOutlined} className={styles.socialIcon} />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
            backgroundColor: '#000000',
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={styles.socialIcon__container}
        >
          <Icon icon={twitterOutlined} className={styles.socialIcon} />
        </motion.a>
      </motion.ul>
    </motion.div>
  );
};

export default Navigation;
