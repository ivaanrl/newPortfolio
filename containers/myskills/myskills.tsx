import styles from '../../styles/mySkills.module.scss';
import { Icon } from '@iconify/react';
import bxlReact from '@iconify/icons-bx/bxl-react';
import bxGitMerge from '@iconify/icons-bx/bx-git-merge';
import nodeJs from '@iconify/icons-fa-brands/node-js';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Myskills = () => {
  const [frontendHover, setFrontendHover] = useState<boolean>(false);
  const [backendHover, setBackendHover] = useState<boolean>(false);
  const [othersHover, setOthersHover] = useState<boolean>(false);

  return (
    <div className={styles.main__container}>
      <p className={styles.title}>
        MY <br />
        SKILLS
      </p>
      <motion.button
        onMouseEnter={() => setFrontendHover(true)}
        onMouseLeave={() => setFrontendHover(false)}
        className={styles.skill__container}
        animate={{
          backgroundColor: frontendHover ? '#ff77c9' : '#ffffff',
        }}
      >
        <motion.p
          animate={{
            color: frontendHover ? '#ffffff' : '#8b9492',
          }}
          className={styles.skill__title}
        >
          Frontend
        </motion.p>
        <motion.div
          animate={{
            rotate: frontendHover ? [0, 360, 0] : [0, 0, 0],
            color: frontendHover ? '#ffffff' : '#8b9492',
          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 0,
            color: frontendHover ? '#ffffff' : '#8b9492',
          }}
          className={styles.skill_icon}
        >
          <Icon icon={bxlReact} style={{ fontSize: '105px' }} />
        </motion.div>
      </motion.button>
      <motion.button
        onMouseEnter={() => setBackendHover(true)}
        onMouseLeave={() => setBackendHover(false)}
        className={styles.skill__container}
        animate={{
          backgroundColor: backendHover ? '#ff77c9' : '#ffffff',
        }}
      >
        <motion.p
          animate={{
            color: backendHover ? '#ffffff' : '#8b9492',
          }}
          className={styles.skill__title}
        >
          Backend
        </motion.p>
        <motion.div
          animate={{
            rotate: backendHover ? [0, 360, 0] : [0, 0, 0],
            color: backendHover ? '#ffffff' : '#8b9492',
          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 0,
            color: backendHover ? '#ffffff' : '#8b9492',
          }}
          className={styles.skill_icon}
        >
          <Icon
            icon={nodeJs}
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              fontSize: '83px',
            }}
          />
        </motion.div>
      </motion.button>
      <motion.button
        onMouseEnter={() => setOthersHover(true)}
        onMouseLeave={() => setOthersHover(false)}
        className={styles.skill__container}
        animate={{
          backgroundColor: othersHover ? '#ff77c9' : '#ffffff',
        }}
      >
        <motion.p
          animate={{
            color: othersHover ? '#ffffff' : '#8b9492',
          }}
          className={styles.skill__title}
        >
          Others
        </motion.p>
        <motion.div
          animate={{
            rotate: othersHover ? [0, 360, 0] : [0, 0, 0],
            color: othersHover ? '#ffffff' : '#8b9492',
          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 0,
            color: othersHover ? '#ffffff' : '#8b9492',
          }}
          className={styles.skill_icon}
        >
          <Icon icon={bxGitMerge} style={{ fontSize: '98px' }} />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Myskills;
