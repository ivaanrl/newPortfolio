import styles from '../../styles/navbar.module.scss';
import { useCycle } from 'framer-motion';
import useMeasure from 'react-use-measure';
import useWindowDimensions from '../../shared/customHooks/useWindowDimentions';
import { motion } from 'framer-motion';
import { MenuToggle } from './menuToggle';
import Navigation from './navigation';

const megaMenu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90% 100px)`,
    background: 'rgba(255,255,255,1)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(1px at 90% 100px)',
    background: 'rgba(255,255,255,1)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [ref, { height }] = useMeasure();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const windowDimensions = useWindowDimensions();

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__logo__container}>Iván Roldán Lusich</div>
      <div className={styles.navbar__right__container}>
        <motion.button
          whileHover={{
            backgroundColor: '#000000',
            color: '#ffffff',
          }}
          className={styles.navbar__contact}
        >
          Contact
        </motion.button>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={ref}
        >
          <motion.div
            animate={{
              height: windowDimensions.height,
            }}
            className={styles.mega_menu__background}
            variants={megaMenu}
          />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
