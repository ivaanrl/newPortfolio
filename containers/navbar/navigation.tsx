import { motion } from 'framer-motion';
import useWindowDimensions from '../../shared/customHooks/useWindowDimentions';
import MenuItem from './menuItem';
import styles from '../../styles/navbar.module.scss';
import { useEffect, useState } from 'react';
import SocialIcon from './socialIcon';
import linkedinOutlined from '@iconify/icons-ant-design/linkedin-outlined';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import youtubeOutlined from '@iconify/icons-ant-design/youtube-outlined';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';

interface Props {
  showContactForm: () => void;
  hideSidebar: () => void;
}

const navigationItems = [
  { label: 'Home', id: 'hero' },
  { label: 'My Projects', id: 'projects' },
  { label: 'My Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const Navigation = ({ hideSidebar, showContactForm }: Props) => {
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
        {navigationItems.map(({ label, id }) => {
          return (
            <MenuItem
              key={id}
              label={label}
              id={id}
              hideSidebar={hideSidebar}
              showContactForm={label === 'Contact' ? showContactForm : null}
            />
          );
        })}
      </motion.ul>
      <motion.ul variants={variants} className={styles.sidebar__socials}>
        <SocialIcon icon={linkedinOutlined} />
        <SocialIcon icon={instagramOutlined} />
        <SocialIcon icon={youtubeOutlined} />
        <SocialIcon icon={twitterOutlined} />
      </motion.ul>
    </motion.div>
  );
};

export default Navigation;
