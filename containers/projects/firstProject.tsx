import { useState } from 'react';
import styles from '../../styles/firstProject.module.scss';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import CodeAndLiveButtons from './codeAndLiveButtons/codeAndLiveButtons';

const FirstProject = () => {
  const angle = 8;

  // we replace the useState with two motion values. One for each axis.
  // Since we want the card to start out flat we set the initial
  // values to x=0.5 y=0.5 which equals to no transformation
  const y = useMotionValue(0.5);
  const x = useMotionValue(0.5);

  const rotateY = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true,
  });
  const rotateX = useTransform(y, [0, 1], [angle, -angle], {
    clamp: true,
  });

  const onMove = (e) => {
    // get position information for the card
    const bounds = e.currentTarget.getBoundingClientRect();

    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

    // update MotionValues
    x.set(xValue, true);
    y.set(yValue, true);
  };

  const restoreOriginalShape = () => {
    x.set(0.5, true);
    y.set(0.5, true);
    setIsHovered(false);
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.content__container}
        onPointerMove={onMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={restoreOriginalShape}
        style={{ rotateY, rotateX }}
        whileHover={{
          boxShadow: '74px 29px 164px -23px rgba(0,0,0,0.75)',
        }}
      >
        <motion.div className={styles.text__container}>
          <motion.div className={styles.text__title}>Alpalac</motion.div>
          <motion.div className={styles.text__technologies}>
            FullStack Dev, UI, UX
          </motion.div>
          <CodeAndLiveButtons />
        </motion.div>
        <motion.div
          style={{ translateY: rotateX, translateX: rotateY }}
          className={styles.image__container}
        >
          <Image
            width={509}
            height={1507}
            loading="eager"
            quality={10}
            src="/images/alpalac_drawing.png"
            className={styles.image}
          />
        </motion.div>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            color: 'white',
          }}
        >
          <motion.svg
            width="50"
            height="50"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: isHovered ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
              }}
              d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
              fill="none"
              stroke="white"
              strokeWidth="5%"
            />

            <motion.path
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
              }}
              d="M7.64592 11.3539C7.59935 11.3075 7.56241 11.2523 7.5372 11.1915C7.512 11.1308 7.49902 11.0657 7.49902 10.9999C7.49902 10.9341 7.512 10.869 7.5372 10.8083C7.56241 10.7475 7.59935 10.6923 7.64592 10.6459L10.2929 7.9999L7.64592 5.3539C7.59943 5.30741 7.56255 5.25222 7.53739 5.19148C7.51223 5.13074 7.49929 5.06564 7.49929 4.9999C7.49929 4.93416 7.51223 4.86906 7.53739 4.80832C7.56255 4.74758 7.59943 4.69239 7.64592 4.6459C7.6924 4.59941 7.74759 4.56254 7.80833 4.53738C7.86907 4.51222 7.93417 4.49927 7.99992 4.49927C8.06566 4.49927 8.13076 4.51222 8.1915 4.53738C8.25224 4.56254 8.30743 4.59941 8.35392 4.6459L11.3539 7.6459C11.4005 7.69234 11.4374 7.74752 11.4626 7.80827C11.4878 7.86901 11.5008 7.93413 11.5008 7.9999C11.5008 8.06567 11.4878 8.13079 11.4626 8.19153C11.4374 8.25228 11.4005 8.30745 11.3539 8.3539L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.13081 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539V11.3539Z"
              fill="white"
            />
            <motion.path
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
              }}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 8C4.5 7.86739 4.55268 7.74021 4.64645 7.64645C4.74021 7.55268 4.86739 7.5 5 7.5H10C10.1326 7.5 10.2598 7.55268 10.3536 7.64645C10.4473 7.74021 10.5 7.86739 10.5 8C10.5 8.13261 10.4473 8.25979 10.3536 8.35355C10.2598 8.44732 10.1326 8.5 10 8.5H5C4.86739 8.5 4.74021 8.44732 4.64645 8.35355C4.55268 8.25979 4.5 8.13261 4.5 8Z"
              fill="white"
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};

/*
              initial={{ pathLength: 1 }}
              animate={{ pathLength: 0 }}
              transition={{ duration: 2 }}*/

export default FirstProject;
