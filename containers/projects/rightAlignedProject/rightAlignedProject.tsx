import styles from '../../../styles/rightAlignedProject.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodeAndLiveButtons from '../codeAndLiveButtons/codeAndLiveButtons';
import SeeMoreButton from '../seeMoreButton/seeMoreButton';

interface Props {
  project_number: number;
  technologies: string;
  name: string;
  big_name: boolean;
  code_link: string;
  live_link: string;
}

const RightALignedProject = ({
  project_number,
  technologies,
  big_name,
  name,
  code_link,
  live_link,
}: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div className={styles.main__container}>
      <div
        className={
          big_name ? styles.text__container : styles.text__container_small
        }
      >
        <div className={styles.technologies}>{technologies}</div>
        <div className={styles.title}>{name}</div>
        <SeeMoreButton />
        <CodeAndLiveButtons />
      </div>
      <motion.div
        whileHover={{ scale: 0.9 }}
        className={styles.smaller_container}
      >
        {project_number === 1 ? (
          <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className={styles.image__container_1}
          >
            <Image
              height="550px"
              width="1000px"
              src="/images/first_project.png"
              alt="rocketleagueairrace.com screenshot"
            />
          </motion.div>
        ) : null}
        {project_number === 3 ? (
          <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className={styles.image__container_3}
          >
            <Image
              height="700px"
              width="350px"
              src="/images/third_project.png"
              alt="rocketleagueairrace.com screenshot"
            />
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
};

export default RightALignedProject;
