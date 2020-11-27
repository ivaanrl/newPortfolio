import { motion } from 'framer-motion';
import styles from '../../styles/navbar.module.scss';

interface Props {
  toggle: () => void;
}

const Path = (props: any) => (
  <motion.path strokeWidth="3" strokeLinecap="round" {...props} />
);

export const MenuToggle = ({ toggle }: Props) => {
  return (
    <motion.button
      whileHover={{
        rotate: 360,
        transition: {
          duration: 1,
        },
      }}
      className={styles.navbar__menu__toggle}
      onClick={toggle}
    >
      <motion.svg className={styles.navbar__menu_icon} viewBox="0 0 21 21">
        <Path
          variants={{
            closed: { d: 'M 8 2.5 L 20 2.5', stroke: '#000000' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: '#000000' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, stroke: '#000000' },
            open: { opacity: 0, stroke: '#000000' },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 14 16.346 L 20 16.346', stroke: '#000000' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: '#000000' },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};
