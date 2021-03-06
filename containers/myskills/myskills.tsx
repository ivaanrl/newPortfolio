import styles from '../../styles/mySkills.module.scss';
import { Icon } from '@iconify/react';
import bxlReact from '@iconify/icons-bx/bxl-react';
import bxGitMerge from '@iconify/icons-bx/bx-git-merge';
import nodeJs from '@iconify/icons-fa-brands/node-js';
import typescriptIcon from '@iconify/icons-cib/typescript';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SkillsCard from './skillsCard/skillsCard';
import { theme } from '../../styles/theme';

const Myskills = () => {
  const [frontendHover, setFrontendHover] = useState<boolean>(false);
  const [backendHover, setBackendHover] = useState<boolean>(false);
  const [othersHover, setOthersHover] = useState<boolean>(false);

  //3 is closed
  const [page, setPage] = useState<0 | 1 | 2 | 3>(3);

  return (
    <>
      <div className={styles.main__container} id="skills">
        <p className={styles.title}>
          MY <br />
          SKILLS
        </p>
        <div className={styles.skills__skills_container}>
          <motion.button
            onMouseEnter={() => setFrontendHover(true)}
            onMouseLeave={() => setFrontendHover(false)}
            onClick={() => setPage(0)}
            className={styles.skill__container}
            animate={{
              backgroundColor: frontendHover
                ? theme.secondaryColor
                : theme.white,
            }}
          >
            <motion.p
              animate={{
                color: frontendHover ? theme.white : theme.mutedTextOnWhite,
              }}
              className={styles.skill__title}
            >
              Frontend
            </motion.p>
            <motion.div
              animate={{
                color: frontendHover ? theme.white : theme.mutedTextOnWhite,
              }}
              className={styles.skill_icon}
            >
              <Icon icon={bxlReact} style={{ fontSize: '105px' }} />
            </motion.div>
          </motion.button>
          <motion.button
            onMouseEnter={() => setBackendHover(true)}
            onMouseLeave={() => setBackendHover(false)}
            onClick={() => setPage(1)}
            className={styles.skill__container}
            animate={{
              backgroundColor: backendHover
                ? theme.secondaryColor
                : theme.white,
            }}
          >
            <motion.p
              animate={{
                color: backendHover ? theme.white : theme.mutedTextOnWhite,
              }}
              className={styles.skill__title}
            >
              Backend
            </motion.p>
            <motion.div
              animate={{
                color: backendHover ? theme.white : theme.mutedTextOnWhite,
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
            onClick={() => setPage(2)}
            className={styles.skill__container}
            animate={{
              backgroundColor: othersHover ? theme.secondaryColor : theme.white,
            }}
          >
            <motion.p
              animate={{
                color: othersHover ? theme.white : theme.mutedTextOnWhite,
              }}
              className={styles.skill__title}
            >
              Others
            </motion.p>
            <motion.div
              animate={{
                color: othersHover ? theme.white : theme.mutedTextOnWhite,
              }}
              className={styles.skill_icon}
            >
              <Icon
                icon={typescriptIcon}
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                  fontSize: '80px',
                }}
              />
            </motion.div>
          </motion.button>
          <motion.button
            whileHover={{
              fontSize: '20px',
            }}
            className={styles.skill__view_all}
          >
            VIEW <br /> ALL
          </motion.button>
        </div>
      </div>
      {page !== 3 ? <SkillsCard page={page} setPage={setPage} /> : null}
    </>
  );
};

export default Myskills;

/*


*/
