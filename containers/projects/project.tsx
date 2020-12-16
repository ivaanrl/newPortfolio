import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/firstProject.module.scss';
import Image from 'next/image';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeAndLiveButtons from './codeAndLiveButtons/codeAndLiveButtons';
import Tags from './tags/tags';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/close-fill';
import { usePreventClickPropagation } from '../../shared/customHooks/usePreventClickPropagation';

const scrollAnimation = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    y: '10vh',
    opacity: 0,
  },
};

interface Props {
  title: string;
  image: {
    name: string;
    height: number;
    width: number;
    hasShadow: boolean;
    isWide: boolean;
  };
  openCardImage: {
    name: string;
    height: number;
    width: number;
  };
  technologies: string;
  color: string;
  aligned: 'right' | 'left';
  tags: string[];
  liveSiteLink: string;
  codeLink: string;
}

export const openSpring = { type: 'spring', stiffness: 600, damping: 100 };
export const closeSpring = { type: 'spring', stiffness: 700, damping: 100 };

const Overlay = ({ isOpen, setIsOpen }: any) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      className={styles.overlay}
      onClick={() => setIsOpen(false)}
    >
      <div onClick={() => setIsOpen(false)} />
    </motion.div>
  );
};

const Project = ({
  title,
  image,
  technologies,
  color,
  aligned,
  openCardImage,
  tags,
  liveSiteLink,
  codeLink,
}: Props) => {
  const { name, height, width, hasShadow, isWide } = image;
  const scrollAnimationControls = useAnimation();
  const [ref, inView] = useInView();
  const textContainerReft = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      scrollAnimationControls.start('visible');
    }
  }, [inView]);

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
    if (isOpen) return;
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
    setFillSVG(false);
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [fillSVG, setFillSVG] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    setFillSVG(true);
  };

  const handleCardClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    restoreOriginalShape();
  };

  return (
    <motion.div>
      <motion.div
        className={`${styles.container} ${
          isOpen ? styles.container__open : null
        } `}
        ref={ref}
        variants={scrollAnimation}
        animate={scrollAnimationControls}
        initial="hidden"
        style={{
          y: isOpen ? 0 : 'auto',
          zIndex: isOpen ? 2000 : 0,
        }}
      >
        <motion.div
          className={`${styles.content__container} ${
            isOpen ? styles.content__container__open : null
          }`}
          onPointerMove={onMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={restoreOriginalShape}
          style={{
            rotateY,
            rotateX,
            backgroundColor: color,
            zIndex: isOpen ? 2000 : 0,
          }}
          whileHover={{
            boxShadow: '74px 29px 164px -23px rgba(0,0,0,0.75)',
          }}
          layout={true}
          transition={isOpen ? openSpring : closeSpring}
          onClick={handleCardClick}
          ref={textContainerReft}
        >
          {isOpen ? (
            <motion.button
              className={styles.close__buttonContainer}
              style={{ color: 'rgb(236, 231, 231)', backgroundColor: color }}
              whileHover={{
                color,
                backgroundColor: 'rgb(236, 231, 231)',
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setIsOpen(false)}
            >
              <Icon icon={closeFill} className={styles.close__button} />
            </motion.button>
          ) : null}
          <motion.div
            className={`${styles.text__container} ${
              aligned === 'left'
                ? styles.text__container__alignedRight
                : styles.text__container__alignedLeft
            }  ${isOpen ? styles.text__container__open : null} `}
          >
            <motion.div
              className={`${styles.text__title} ${
                isOpen ? styles.text__title__open : null
              } `}
              style={{
                height: isOpen ? '25vh' : 'auto',
              }}
            >
              {title}
              {isOpen ? (
                <Tags tags={tags} color={color} parentRef={textContainerReft} />
              ) : null}
              <motion.div
                className={styles.openCard__imageContainer}
                //style={{ display: isOpen ? 'block' : 'none' }}
                style={{
                  opacity: isOpen ? 1 : 0,
                  height: isOpen ? 'auto' : 0,
                }}
              >
                <Image
                  width={openCardImage.width}
                  height={openCardImage.height}
                  className={styles.openCard__image}
                  src={'/images/' + openCardImage.name}
                  alt={openCardImage.name}
                />
              </motion.div>
            </motion.div>
            <motion.div
              animate={{
                display: isOpen ? 'none' : 'block',
              }}
              className={styles.text__technologies}
            >
              {technologies}
            </motion.div>

            <motion.div style={{ display: isOpen ? 'block' : 'none' }}>
              <motion.p className={`${styles.description}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed dui nec mi semper vestibulum vitae vel ipsum.
                Duis id interdum tellus, vehicula facilisis nisl. Aliquam id
                tincidunt mi. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed pellentesque felis ante, in imperdiet mi tincidunt
                nec. Donec sed justo eu nulla faucibus facilisis. Cras felis
                magna, feugiat eu semper non, congue vel est. Curabitur tempor
                dui ut est mollis tincidunt. Ut eu feugiat lorem. Cras finibus,
                sem ut luctus aliquet, massa felis sodales justo, maximus ornare
                tortor erat vitae mauris. Fusce mollis nisi leo, non placerat
                odio accumsan sed. Vestibulum placerat et lectus vel sagittis.
                Mauris euismod egestas dolor, sit amet lobortis diam sodales a.
              </motion.p>
            </motion.div>
            <CodeAndLiveButtons
              color={color}
              setFillSVG={setFillSVG}
              isOpen={isOpen}
              liveSiteLink={liveSiteLink}
              codeLink={codeLink}
              preventOpenClass="prevent-open"
            />
          </motion.div>

          <motion.p
            style={{ translateY: rotateX, translateX: rotateY }}
            animate={{
              opacity: isOpen ? 0 : 1,
              display: isOpen ? 'none' : 'block',
            }}
            className={`${
              hasShadow
                ? styles.image__container__shadow
                : styles.image__container
            } ${isWide ? styles.image__container__wide : null} ${
              aligned === 'left' ? styles.image__container__leftAligned : null
            } `}
          >
            <Image
              width={width}
              height={height}
              loading="eager"
              quality={10}
              src={`/images/${name}`}
              className={styles.image}
            />
          </motion.p>
          <motion.button
            className={`${styles.svg__button} ${
              aligned === 'left'
                ? styles.svg__button__rightAligned
                : styles.svg__button__leftAligned
            } `}
            whileHover={{ scale: 1.2 }}
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
                  pathLength: isHovered && !isOpen ? (fillSVG ? 1 : 0.6) : 0,
                  rotate: isHovered && !isOpen ? 120 : 350,
                  fill:
                    fillSVG && !isOpen
                      ? 'rgba(255,255,255,1)'
                      : 'rgba(255,255,255,0)',
                }}
                fill="rgba(255,255,255,0)"
                transition={{
                  duration: 0.6,
                }}
                d="
              M 8, 8
              m -7, 0
              a 7,7 0 1,0 14,0
              a 7,7 0 1,0 -14,0"
                stroke="rgba(255,255,255,1)"
                strokeWidth="1"
              />
              <motion.path
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: isHovered && !isOpen ? (fillSVG ? 1 : 0.5) : 0,
                  rotate: isHovered && !isOpen ? 130 : 350,
                  stroke: fillSVG ? color : 'rgba(255,255,255,1)',
                }}
                transition={{
                  duration: 0.6,
                }}
                d="
              M 8, 8
              m -5, 0
              a 5,5 0 1,0 10,0
              a 5,5 0 1,0 -10,0"
                stroke="rgba(255,255,255,1)"
                strokeWidth="1"
              />

              <motion.path
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isHovered && !isOpen ? 1 : 0,
                  fill: fillSVG ? color : 'rgba(255,255,255,1)',
                }}
                transition={{
                  duration: 0.6,
                }}
                d="M7.64592 11.3539C7.59935 11.3075 7.56241 11.2523 7.5372 11.1915C7.512 11.1308 7.49902 11.0657 7.49902 10.9999C7.49902 10.9341 7.512 10.869 7.5372 10.8083C7.56241 10.7475 7.59935 10.6923 7.64592 10.6459L10.2929 7.9999L7.64592 5.3539C7.59943 5.30741 7.56255 5.25222 7.53739 5.19148C7.51223 5.13074 7.49929 5.06564 7.49929 4.9999C7.49929 4.93416 7.51223 4.86906 7.53739 4.80832C7.56255 4.74758 7.59943 4.69239 7.64592 4.6459C7.6924 4.59941 7.74759 4.56254 7.80833 4.53738C7.86907 4.51222 7.93417 4.49927 7.99992 4.49927C8.06566 4.49927 8.13076 4.51222 8.1915 4.53738C8.25224 4.56254 8.30743 4.59941 8.35392 4.6459L11.3539 7.6459C11.4005 7.69234 11.4374 7.74752 11.4626 7.80827C11.4878 7.86901 11.5008 7.93413 11.5008 7.9999C11.5008 8.06567 11.4878 8.13079 11.4626 8.19153C11.4374 8.25228 11.4005 8.30745 11.3539 8.3539L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.13081 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539V11.3539Z"
                fill="rgba(255,255,255,1)"
              />
              <motion.path
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isHovered && !isOpen ? 1 : 0,
                  fill: fillSVG ? color : 'rgba(255,255,255,1)',
                }}
                transition={{
                  duration: 0.6,
                }}
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.5 8C4.5 7.86739 4.55268 7.74021 4.64645 7.64645C4.74021 7.55268 4.86739 7.5 5 7.5H10C10.1326 7.5 10.2598 7.55268 10.3536 7.64645C10.4473 7.74021 10.5 7.86739 10.5 8C10.5 8.13261 10.4473 8.25979 10.3536 8.35355C10.2598 8.44732 10.1326 8.5 10 8.5H5C4.86739 8.5 4.74021 8.44732 4.64645 8.35355C4.55268 8.25979 4.5 8.13261 4.5 8Z"
                fill="rgba(255,255,255,1)"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Project;
