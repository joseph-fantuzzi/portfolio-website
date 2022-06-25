import styles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <svg
      className={styles.logo}
      width="102"
      height="100"
      viewBox="0 0 102 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="51" cy="50" rx="51" ry="50" fill="url(#paint0_linear_42_161)" />
      <g filter="url(#filter0_d_42_161)">
        <rect
          x="45.717"
          y="28"
          width="7.31541"
          height="44.8"
          rx="3.65771"
          fill="#FFFEFE"
          fillOpacity="0.75"
        />
        <rect
          x="45.717"
          y="28"
          width="28.0424"
          height="8.96"
          rx="4.48"
          fill="white"
          fillOpacity="0.75"
        />
        <rect
          x="50.594"
          y="43.36"
          width="18.2885"
          height="8.96"
          rx="4.48"
          fill="#FFFEFE"
          fillOpacity="0.75"
        />
        <rect
          x="32.3055"
          y="65.12"
          width="20.727"
          height="7.68"
          rx="3.84"
          fill="white"
          fillOpacity="0.75"
        />
        <rect
          x="32.3055"
          y="52.32"
          width="7.31541"
          height="20.48"
          rx="3.65771"
          fill="white"
          fillOpacity="0.75"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_42_161"
          x="24.2772"
          y="28"
          width="53.4822"
          height="53"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_161" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_42_161"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_42_161"
          x1="82.9762"
          y1="10.9375"
          x2="15.4407"
          y2="80.9171"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24FF7C" />
          <stop offset="1" stopColor="#003395" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;