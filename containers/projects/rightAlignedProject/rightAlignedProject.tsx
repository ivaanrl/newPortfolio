import styles from '../../../styles/rightAlignedProject.module.scss';
import projectStyles from '../../../styles/anyAlignedProject.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  return (
    <div className={styles.main__container}>
      <div
        className={
          big_name
            ? projectStyles.text__container
            : projectStyles.text__container_small
        }
      >
        <div className={projectStyles.technologies}>{technologies}</div>
        <div className={projectStyles.title}>{name}</div>
        <div className={projectStyles.all_buttons__container}>
          <SeeMoreButton />
          <CodeAndLiveButtons />
        </div>
      </div>
      {/*<motion.div
        whileHover={{ scale: 0.9 }}
        className={styles.smaller_container}
      >*/}
      {project_number === 1 ? (
        <motion.div
          whileHover={{ scale: 0.9 }}
          className={styles.image__container_1}
        >
          {/*<img src="/images/first_project.png" style={{ width: '100%' }} /> */}
          <Image
            loading="eager"
            priority={true}
            quality={100}
            layout="responsive"
            height={935}
            width={1920}
            src="/images/first_project.png"
            alt="rocketleagueairrace.com screenshot"
            className={styles.image__1}
          />
        </motion.div>
      ) : null}
      {project_number === 3 ? (
        <motion.div
          whileHover={{ scale: 0.9 }}
          className={styles.image__container_3}
        >
          <Image
            loading="eager"
            priority={true}
            quality={100}
            layout="responsive"
            height={792}
            width={414}
            src="/images/third_project.png"
            alt="alpalac screenshot"
          />
        </motion.div>
      ) : null}
      {/*</motion.div>*/}
    </div>
  );
};

export default RightALignedProject;
