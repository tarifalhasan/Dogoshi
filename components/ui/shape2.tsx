const Shape2 = () => {
  return (
    <svg
      width={57}
      height={328}
      viewBox="0 0 57 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_1)">
        <ellipse
          cx="28.5415"
          cy="28.9443"
          rx="15.9614"
          ry={16}
          fill="#F40010"
          fillOpacity="0.1"
        />
        <ellipse cx="28.5414" cy="28.9443" rx="7.98069" ry={8} fill="#F40010" />
      </g>
      <line x1="29.5" y1={34} x2="29.5" y2={328} stroke="#F40010" />
      <defs>
        <filter
          id="filter0_d_0_1"
          x="0.580078"
          y="0.944336"
          width="55.9228"
          height={56}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={6} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.270588 0 0 0 0 0.505883 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Shape2;
