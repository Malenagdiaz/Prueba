tailwind.config = {
  theme: {
    extend: {
      screens: {
        "max-md": { max: "980px" },
      },
      animation: {
        "spin-x": "spin-x 7s linear infinite",
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        "spin-x": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(-360deg)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-200px * 7))" },
        },
      },
      width: {
        "200x14": "calc(200px * 14)",
      },
    },
  },
  variants: {},
  plugins: [],
};
