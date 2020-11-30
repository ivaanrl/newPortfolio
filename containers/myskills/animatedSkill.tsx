import { useEffect, useState } from 'react';
import styles from '../../styles/skillsCard.module.scss';
import { Icon } from '@iconify/react';
import { motion, useCycle } from 'framer-motion';

interface Props {
  skill: [{ label: string; icon: any }, { label: string; icon: any }];
  animationRepeatTime: number;
}

const firstSkillContainerVariants = {
  showFirstSkill: { transition: { staggerChildren: 0.06 } },
  showSecondSkill: { transition: { staggerChildren: 0.02 } },
};

const secondSkillContainerVariants = {
  showFirstSkill: { transition: { staggerChildren: 0.02 } },
  showSecondSkill: { transition: { staggerChildren: 0.06 } },
};

const firstSkillVariants = {
  showFirstSkill: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
  showSecondSkill: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
};

const secondSkillVariants = {
  showSecondSkill: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
  showFirstSkill: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
};

const AnimatedSkill = ({ skill, animationRepeatTime }: Props) => {
  const firstSkillLabelArray = skill[0].label.split('');
  const secondSkillLabelArray = skill[1].label.split('');

  const [animation, cycleAnimation] = useCycle(
    'showFirstSkill',
    'showSecondSkill',
  );

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    (async function anyNameFunction() {
      await sleep(animationRepeatTime);
    })();
    setInterval(() => {
      cycleAnimation();
    }, animationRepeatTime);
  }, []);

  return (
    <div className={styles.skill_container}>
      <motion.div
        variants={firstSkillContainerVariants}
        animate={animation}
        className={styles.skill__animated_skill_text}
        style={{ display: 'flex' }}
      >
        <div className={styles.skill__animated_skill__letter_container}>
          {firstSkillLabelArray.map((letter, index) => (
            <motion.div variants={firstSkillVariants} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.div>
          ))}
        </div>
        <motion.div variants={firstSkillVariants} className={styles.skill_icon}>
          <Icon icon={skill[0].icon} />
        </motion.div>
      </motion.div>
      <motion.div
        variants={secondSkillContainerVariants}
        animate={animation}
        className={styles.skill__animated_skill_text}
        style={{ display: 'flex' }}
      >
        <div className={styles.skill__animated_skill__letter_container}>
          {secondSkillLabelArray.map((letter, index) => (
            <motion.div variants={secondSkillVariants} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={secondSkillVariants}
          className={styles.skill_icon}
        >
          <Icon icon={skill[1].icon} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedSkill;
