import styles from '../../styles/mySkills.module.scss';
import { Icon, InlineIcon } from '@iconify/react';
import bxlReact from '@iconify/icons-bx/bxl-react';
import bxGitMerge from '@iconify/icons-bx/bx-git-merge';
import nodeJs from '@iconify/icons-fa-brands/node-js';

const Myskills = () => {
  return (
    <div className={styles.main__container}>
      <p className={styles.title}>
        MY <br />
        SKILLS
      </p>
      <button className={styles.skill__container}>
        <p className={styles.skill__title}>Frontend</p>
        <div className={styles.skill_icon}>
          <Icon
            icon={bxlReact}
            style={{ color: '#8b9492', fontSize: '105px' }}
          />
        </div>
      </button>
      <button className={styles.skill__container}>
        <p className={styles.skill__title}>Backend</p>
        <div className={styles.skill_icon}>
          <Icon
            icon={nodeJs}
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              color: '#8b9492',
              fontSize: '83px',
            }}
          />
        </div>
      </button>
      <button className={styles.skill__container}>
        <p className={styles.skill__title}>Others</p>
        <div className={styles.skill_icon}>
          <Icon
            icon={bxGitMerge}
            style={{ color: '#8b9492', fontSize: '98px' }}
          />
        </div>
      </button>
    </div>
  );
};

export default Myskills;
