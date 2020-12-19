import styles from '../../../../styles/skillsCard.module.scss';
import AnimatedSkill from '../../animatedSkill';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface Props {
  skills: (
    | { label: string; icon: any }
    | [{ label: string; icon: any }, { label: string; icon: any }]
  )[];
}

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Page = ({ skills }: Props) => {
  return (
    <motion.div variants={variants} className={styles.skills_container}>
      {skills.map((skill, index) => {
        if (Array.isArray(skill)) {
          const animationTime = [600, 700, 800, 900, 1200][
            Math.floor(Math.random() * 5)
          ];
          return (
            <AnimatedSkill
              key={index}
              skill={skill}
              animationRepeatTime={2000 + index * animationTime}
            />
          );
        }

        return (
          <div className={styles.skill_container} key={index}>
            <div className={styles.skill_text}>{skill.label}</div>
            <div className={styles.skill_icon}>
              <Icon icon={skill.icon} />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Page;
