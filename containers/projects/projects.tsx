import styles from '../../styles/projects.module.scss';
import LeftALignedProject from './leftAlignedProject/leftAlignedProject';
import RightALignedProject from './rightAlignedProject/rightAlignedProject';
import { motion, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import FirstProject from './firstProject';

const Projects = () => {
  const [angle, setAngle] = useState<number>(0);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    return scrollYProgress.onChange((v) => setAngle(v));
  }, [scrollYProgress]);

  return (
    <>
      <div className={styles.projects__container}>
        <p className={styles.projects__title}>Projects</p>
        {/*
        <RightALignedProject
          project_number={1}
          technologies="Frontend developer, UI, UX, Server Admin"
          name="Rocketleagueairrace.com"
          big_name
          code_link=""
          live_link=""
          />
          <LeftALignedProject />
        <RightALignedProject
        project_number={3}
        technologies="FullStack Dev, UI, UX"
        name="Alpalac"
        big_name={false}
        code_link=""
        live_link=""
        /> 
      */}
        <FirstProject />
      </div>
      <div className={styles.github__button_container}>
        <motion.button
          animate={{
            borderImageSource: `linear-gradient(
              ${angle * 360}deg,
              #ff77c9 ${angle * 100}%,
              #aa3fff 100%
            )`,
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: '#000000',
            color: '#ffffff',
            borderImageSource:
              'linear-gradient(101.96deg,#000000 100%,#000000 100%)',
          }}
          className={styles.github__button}
        >
          GITHUB PROFILE
        </motion.button>
      </div>
    </>
  );
};

export default Projects;
