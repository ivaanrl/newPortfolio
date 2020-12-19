import { motion } from 'framer-motion';
import styles from '../../styles/navbar.module.scss';
import { theme } from '../../styles/theme';

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const Path = (props: any) => (
  <motion.path strokeWidth="3" strokeLinecap="round" {...props} />
);

export const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <motion.button
      aria-label="sidebar toggle"
      style={{
        backgroundColor: isOpen ? theme.mainColor : null,
      }}
      whileHover={{
        backgroundColor: theme.mainColor,
        transition: {
          duration: 0.3,
        },
      }}
      className={styles.navbar__menu__toggle}
      onClick={toggle}
    >
      <motion.svg className={styles.navbar__menu_icon} viewBox="0 0 21 21">
        <Path
          variants={{
            closed: { d: 'M 8 2.5 L 20 2.5', stroke: theme.white },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: theme.white },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, stroke: theme.white },
            open: { opacity: 0, stroke: theme.white },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 14 16.346 L 20 16.346', stroke: theme.white },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: theme.white },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};
