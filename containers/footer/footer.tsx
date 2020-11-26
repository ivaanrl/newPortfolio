import styles from '../../styles/footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        READY TO WORK <br /> WITH <span>ME?</span>
      </div>
      <button className={styles.button}>GET IN CONTACT</button>
      <svg
        width="50"
        height="50"
        viewBox="0 0 99 100"
        fill="none"
        className={styles.button__linkedin}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5723 1L1 30.8846V69.1154L28.5723 99H70.4277L98 69.1154V30.8846L70.4277 1H28.5723Z"
          stroke="#560496"
        />
        <g clip-path="url(#clip0)">
          <path
            d="M39.0794 71.9996V42.3128H30.5049V71.9996H39.0794ZM34.7932 38.2571C37.7833 38.2571 39.6445 35.9775 39.6445 33.1288C39.5888 30.2158 37.7834 27.9995 34.85 27.9995C31.917 27.9995 29.999 30.2159 29.999 33.1288C29.999 35.9777 31.8597 38.2571 34.7373 38.2571H34.793H34.7932ZM43.8253 71.9996H52.3997V55.421C52.3997 54.5338 52.4554 53.6474 52.6819 53.0132C53.3017 51.2404 54.7126 49.4044 57.0812 49.4044C60.1839 49.4044 61.4252 52.1268 61.4252 56.1176V71.9993H69.9991V54.9772C69.9991 45.8586 65.7689 41.6158 60.1275 41.6158C55.5019 41.6158 53.471 44.5912 52.3427 46.6177H52.3999V42.3122H43.8255C43.938 45.0978 43.8255 71.9989 43.8255 71.9989L43.8253 71.9996Z"
            fill="#560496"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="40"
              height="44"
              fill="white"
              transform="translate(30 28)"
            />
          </clipPath>
        </defs>
      </svg>

      <svg
        viewBox="0 0 800 738"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.figure}
      >
        <g filter="url(#filter0_d)">
          <path d="M203.239 0L0 201.874V460.126L203.239 662H511.761L715 460.126V201.874L511.761 0H203.239Z" />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="800"
            height="738"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="53" dy="44" />
            <feGaussianBlur stdDeviation="16" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00416667 0 0 0 0 0.00416667 0 0 0 0 0.00416667 0 0 0 0.24 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
