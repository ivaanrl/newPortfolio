import { Icon, IconifyIcon } from '@iconify/react';
import styles from '../../styles/navbar.module.scss';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

interface Props {
  icon: {
    body: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    rotate?: number;
    hFlip?: boolean;
    vFlip?: boolean;
  };
}

const SocialIcon = ({ icon }: Props) => {
  return (
    <motion.li
      whileHover={{
        scale: 1.2,
        backgroundColor: theme.dark,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={styles.socialIcon__container}
    >
      <a>
        <Icon icon={icon} className={styles.socialIcon} />
      </a>
    </motion.li>
  );
};

export default SocialIcon;
