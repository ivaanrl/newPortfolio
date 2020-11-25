import styles from '../../styles/hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__text_container}>
        <p className={styles.hero__text}>
          Web development <br />
          done <span>right.</span>
        </p>
        <br />
        <p className={styles.hero__text}>Performant.</p>
        <br />
        <p className={styles.hero__text}>
          <span>Proactive.</span>
        </p>
        <br />
        <p className={styles.hero_text}>Creative</p>
        <br />
      </div>
      <div className={styles.hero__scroll_indicator_container}>
        <svg
          width="32"
          height="84"
          viewBox="0 0 32 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="27"
            height="79"
            rx="13.5"
            stroke="#AA3FFF"
            strokeWidth="5"
          />
          <rect x="12" y="42" width="8" height="28" rx="4" fill="#AA3FFF" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
