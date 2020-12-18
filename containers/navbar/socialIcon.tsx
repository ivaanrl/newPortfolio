import { Icon, IconifyIcon } from '@iconify/react';
import styles from '../../styles/navbar.module.scss';
import { motion } from 'framer-motion';

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
      <Icon icon={icon} className={styles.socialIcon} />
    </motion.a>
  );
};

export default SocialIcon;
