import { motion } from 'framer-motion';
import styles from '../../styles/navbar.module.scss';

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
      style={{
        backgroundColor: isOpen ? '#aa3fff' : null,
      }}
      whileHover={{
        backgroundColor: '#aa3fff',
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
            closed: { d: 'M 8 2.5 L 20 2.5', stroke: '#FFFFFF' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: '#FFFFFF' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, stroke: '#FFFFFF' },
            open: { opacity: 0, stroke: '#FFFFFF' },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 14 16.346 L 20 16.346', stroke: '#FFFFFF' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: '#FFFFFF' },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};
