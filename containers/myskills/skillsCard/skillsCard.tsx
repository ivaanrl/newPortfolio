import styles from '../../../styles/skillsCard.module.scss';
import { motion } from 'framer-motion';
import Header from './header/header';
import Page from './pages/page';

/*ICONS IMPORTS*/
import bxlReact from '@iconify/icons-bx/bxl-react';
import bxlAngular from '@iconify/icons-bx/bxl-angular';
import reduxIcon from '@iconify/icons-cib/redux';
import sassAlt from '@iconify/icons-cib/sass-alt';
import nextjsIcon from '@iconify/icons-file-icons/nextjs';
import framerIcon from '@iconify/icons-cib/framer';
import formspringIcon from '@iconify/icons-ps/formspring';
import styledComponents from '@iconify/icons-simple-icons/styled-components';
import reduxSaga from '@iconify/icons-logos/redux-saga';
import bxlNodejs from '@iconify/icons-bx/bxl-nodejs';
import redisIcon from '@iconify/icons-cib/redis';
import expressIcon from '@iconify/icons-logos/express';
import postgresqlIcon from '@iconify/icons-cib/postgresql';
import mysqlIcon from '@iconify/icons-grommet-icons/mysql';
import nginxIcon from '@iconify/icons-cib/nginx';
import bxlGit from '@iconify/icons-bx/bxl-git';
import cypressIcon from '@iconify/icons-logos/cypress';
import jestIcon from '@iconify/icons-cib/jest';
import webpackIcon from '@iconify/icons-cib/webpack';
import yarnIcon from '@iconify/icons-file-icons/yarn';
import typescriptIcon from '@iconify/icons-cib/typescript';
import bxlDigitalocean from '@iconify/icons-bx/bxl-digitalocean';
import octopusIcon from '@iconify/icons-openmoji/octopus';
import npmIcon from '@iconify/icons-cib/npm';
import amazonAws from '@iconify/icons-cib/amazon-aws';
import vercelIcon from '@iconify/icons-simple-icons/vercel';
import netlifyIcon from '@iconify/icons-cib/netlify';
import pm2Icon from '@iconify/icons-file-icons/pm2';
import closeFill from '@iconify/icons-eva/close-fill';
import Icon from '@iconify/react';
/*END ICON IMPORTS*/

const Skills: (
  | { label: string; icon: any }
  | [{ label: string; icon: any }, { label: string; icon: any }]
)[][] = [
  [
    { label: 'React', icon: bxlReact },
    [
      { label: 'Redux', icon: reduxIcon },
      { label: 'Redux-saga', icon: reduxSaga },
    ],
    [
      { label: 'Sass', icon: sassAlt },
      { label: 'CSS in JS', icon: styledComponents },
    ],
    { label: 'Angular', icon: bxlAngular },
    { label: 'NextJS', icon: nextjsIcon },
    [
      { label: 'Framer-motion', icon: framerIcon },
      { label: 'React-Spring', icon: formspringIcon },
    ],
  ],
  [
    { label: 'Node.JS', icon: bxlNodejs },
    { label: 'Redis', icon: redisIcon },
    { label: 'Express', icon: expressIcon },
    [
      { label: 'PostgreSQL', icon: postgresqlIcon },
      { label: 'MySQL', icon: mysqlIcon },
    ],
    { label: 'Nginx', icon: nginxIcon },
    { label: 'PM2', icon: pm2Icon },
  ],
  [
    { label: 'Typescript', icon: typescriptIcon },
    [
      { label: 'Jest', icon: jestIcon },
      { label: 'React TL', icon: octopusIcon },
    ],
    [
      { label: 'Yarn', icon: yarnIcon },
      { label: 'NPM', icon: npmIcon },
    ],
    [
      { label: 'GIT', icon: bxlGit },
      { label: 'Webpack', icon: webpackIcon },
    ],
    [
      { label: 'Netflify', icon: netlifyIcon },
      { label: 'Vercel', icon: vercelIcon },
    ],
    [
      { label: 'Digital Ocean', icon: bxlDigitalocean },
      { label: 'AWS', icon: amazonAws },
    ],
    { label: 'Cypress', icon: cypressIcon },
  ],
];

interface Props {
  setPage: (page: 0 | 1 | 2 | 3) => void;
  page: 0 | 1 | 2 | 3;
}

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const pageContainerVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SkillsCard = ({ setPage, page }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={modalVariants}
      className={styles.container}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageContainerVariants}
        className={styles.page__container}
      >
        <div className={styles.page__header__container}>
          <Header page={page} setPage={setPage} />
        </div>
        <div className={styles.page__button_and_page_container}>
          <Page skills={Skills[page]} key={page} />
        </div>
        <motion.button
          onClick={() => setPage(3)}
          className={styles.skill__small_screen_close}
        >
          Close
        </motion.button>
        <motion.button
          whileHover={{
            rotate: 360,
            scale: 1.3,
            transition: {
              duration: 0.5,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={styles.skill__close_button}
          onClick={() => setPage(3)}
        >
          <Icon icon={closeFill} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SkillsCard;
